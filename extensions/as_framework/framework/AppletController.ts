import {
  AudioClip,
  AudioSource,
  BlockInputEvents,
  Button,
  Component,
  Node,
  Toggle,
  tween,
  v3,
  _decorator,
} from "cc";
import {
  AnalyticsData,
  BiDirectionalMap,
  error,
  info,
  IReplicatedEvent,
  MenuController,
  networkReplicator,
  OptionButton,
  SoftEditBox,
  UIDrag,
} from "db://as_framework/scripts";

const { ccclass, property, requireComponent } = _decorator;

enum CheckStatus {
  INCORRECT = -1,
  UNCHECKED = 0,
  CORRECT = 1,
}

enum ScreenType {
  DEFAULT, // No checks only show next button.
  BEGIN, // Hide next, check and menu.
  END, // Hide next, check and menu.
  HAS_CHECK,
}

const SCREENS = [
  ScreenType.BEGIN, // Screen 0
  // ScreenType.HAS_CHECK, // Screen 1
  // ScreenType.DEFAULT, // Screen 2
  // ScreenType.DEFAULT, // Screen 3
  // ... etc.
  ScreenType.END, // Screen last
];

interface SyncData {
  screenIndex: number; // Current screen index.
  checkStatus: CheckStatus; // Status of check.
}

@ccclass("AppletController")
@requireComponent(AudioSource)
export class AppletController extends Component implements IReplicatedEvent {
  // List of all screen backgrounds - including start and end.
  @property(Node) private screens: Node[] = [];

  // Common interface buttons.
  @property(Button) private beginButton: Button | null = null;

  @property(Button) private checkButton: Button | null = null;

  @property(Button) private nextButton: Button | null = null;

  @property(Button) private homeButton: Button | null = null;

  // Menu interface nodes.
  @property(MenuController) private menu: MenuController | null = null;

  // Prompts - correct and wrong answer.
  @property(Node) private correctPrompt: Node | null = null;

  @property(Node) private incorrectPrompt: Node | null = null;

  // Input blocker
  @property(BlockInputEvents) private inputBlocker: BlockInputEvents | null = null;

  // Activity input nodes and components.
  // Replace and use these as needed.
  @property(SoftEditBox) private inputBoxes: SoftEditBox[] = [];

  @property(OptionButton) private optionButtons: OptionButton[] = [];

  @property(Button) private buttons: Button[] = [];

  @property(Toggle) private toggles: Toggle[] = [];

  @property(UIDrag) private draggables: UIDrag[] = [];

  // Audio files for button clicks and correct/incorrect responses
  @property(AudioClip) private clickAudio: AudioClip | null = null;

  @property(AudioClip) private correctAudio: AudioClip | null = null;

  @property(AudioClip) private incorrectAudio: AudioClip | null = null;

  private _audioSource: AudioSource | null = null;

  private _replicationIndex: string;

  // Current screen / question index.
  private _screen = 0;

  private _questionToScreenMap = new BiDirectionalMap<number, number>(
    SCREENS.reduce<[number, number][]>((arr, screenType, screenIndex) => {
      if (screenType === ScreenType.HAS_CHECK) {
        const qIndex = arr.length;
        arr.push([qIndex, screenIndex]);
      }
      return arr;
    }, []),
  );

  // Check
  private _check: CheckStatus = CheckStatus.UNCHECKED;

  private _correctAnswers = new Array<boolean>(
    SCREENS.filter((type) => type === ScreenType.HAS_CHECK).length,
  );

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  onLoad() {
    // Get the audio source component.
    this._audioSource = this.getComponent(AudioSource);

    networkReplicator.analyticsInjected.on((data?: AnalyticsData) => {
      if (data == null) return;
      const correctAnswers = new Array<boolean>(this._questionToScreenMap.size);
      for (let index = 0; index < this._questionToScreenMap.size; index++) {
        if (data.questions[index].answeredCorrectly) correctAnswers[index] = true;
      }
      // The json q starts from 1 but we track from 0.
      const qIndex = data.current_q - 1;
      this._analyticsCallback(qIndex, correctAnswers);
    });

    // Set up common buttons functionality.
    this.beginButton?.node.on(Button.EventType.CLICK, this._beginCallback, this);
    this.checkButton?.node.on(Button.EventType.CLICK, this._checkCallback, this);
    this.nextButton?.node.on(Button.EventType.CLICK, this._nextCallback, this);
    this.homeButton?.node.on(Button.EventType.CLICK, this._homeCallback, this);

    this.menu?.node.on(MenuController.EventType.MENU_RESET, this._menuResetCallback, this);
    this.menu?.node.on(MenuController.EventType.MENU_HOME, this._homeCallback, this);
    this.menu?.node.on(MenuController.EventType.MENU_QUESTION, this._menuQuestionCallback, this);
    this.menu?.node.on(MenuController.EventType.MENU_CLOSE, () => this._playClickSound(), this);
    this.menu?.node.on(MenuController.EventType.MENU_OPEN, () => this._playClickSound(), this);

    // --------------------------------------------------
    // Set up Applet input handlers.
  }

  start() {
    // Called just before applet first update.
    this._screen = 0;
    this._check = CheckStatus.UNCHECKED;
    this._updateVisibility(true);
    this._playClickSound();
  }

  getStateData() {
    const syncData: SyncData = {
      screenIndex: this._screen,
      checkStatus: this._check,
    };

    return syncData;
  }

  updateStateData(syncData: SyncData) {
    // Update the state variables.
    this._screen = syncData.screenIndex;
    this._check = syncData.checkStatus ?? this._check; // If null keep.

    this._updateVisibility(true);
    // Some updates need to happen after the visibility has been updated
    // eg. menu, draggables, popups etc.
  }

  private _playClickSound() {
    if (this.clickAudio == null || this._audioSource == null) return;
    // Play the button click audio once
    this._audioSource.playOneShot(this.clickAudio, 1.0);
  }

  private _updateVisibility(isUpdateBackground = false) {
    if (this.correctPrompt) {
      this.correctPrompt.active = this._check === CheckStatus.CORRECT;
    }
    if (this.incorrectPrompt) {
      this.incorrectPrompt.active = this._check === CheckStatus.INCORRECT;
    }
    if (this.checkButton) {
      this.checkButton.node.active = this._isCheckButtonVisible();
    }
    if (this.nextButton) {
      this.nextButton.node.active = this._isNextButtonVisible();
    }
    if (this.menu) {
      this.menu.node.active = this._isMenuAvailable();
    }
    if (this.inputBlocker) {
      this.inputBlocker.node.active = this._check === CheckStatus.CORRECT;
    }

    if (isUpdateBackground) {
      this.screens.forEach((node, i) => (node.active = this._screen === i));
      info(`Making screen ${this._screen} visible`);
    }
  }

  private _resetCallback() {
    // Reset the soft edit boxes.
    this.inputBoxes.forEach((inputBox) => {
      inputBox.string = "";
      inputBox.enabled = true;
      inputBox.hideKeypad();
    });

    this.optionButtons.forEach((btn) => {
      btn.reset();
    });

    this.draggables.forEach((drag) => drag.reset());
  }

  private _beginCallback() {
    this._playClickSound();
    info("Applet started!!");
    this._screen = 1;
    this._updateVisibility(true);
  }

  private _homeCallback() {
    this._playClickSound();
    info("Applet Restarted!!");
    this._screen = 0;
    this._resetCallback();
    this._updateVisibility(true);
  }

  private _nextCallback() {
    // Send Analytics data if needed before screen is incremented.
    if (networkReplicator.isAnalyticsWorking && SCREENS[this._screen] === ScreenType.HAS_CHECK) {
      const qIndex = this._screenToQuestion(this._screen);
      if (this._check === CheckStatus.CORRECT) {
        this._correctAnswers[qIndex] = true;
      }
      networkReplicator.sendAnalyticsData(
        qIndex + 1, // The json q starts from 1 but we track from 0.
        this._correctAnswers,
        false,
      );
    }

    // Check if last page and send with the flag as true.
    if (networkReplicator.isAnalyticsWorking && SCREENS[this._screen + 1] === ScreenType.END) {
      networkReplicator.sendAnalyticsData(-1, this._correctAnswers, true);
    }

    this._playClickSound();
    this._screen++;
    this._check = CheckStatus.UNCHECKED;
    this._updateVisibility(true);
  }

  private _menuResetCallback() {
    this._playClickSound();
    this._resetCallback();
  }

  private _analyticsCallback(current_q: number, correctAnswers: boolean[]) {
    this._screen = this._questionToScreen(current_q);
    this._correctAnswers = correctAnswers;

    this._resetCallback();
    this._updateVisibility(true);
  }

  private _menuQuestionCallback(questionIndex: number) {
    // The selected question number starts from 1.
    this._screen = this._questionToScreen(questionIndex - 1);

    this._resetCallback();
    this._updateVisibility(true);
  }

  private _questionToScreen(questionIndex: number) {
    if (!this._questionToScreenMap.hasKey(questionIndex)) {
      error("Invalid question index ", questionIndex);
      return 0;
    }

    return this._questionToScreenMap.getValue(questionIndex)!;
  }

  private _screenToQuestion(screenIndex: number) {
    if (!this._questionToScreenMap.hasValue(screenIndex)) {
      error("Invalid screen index ", screenIndex);
      return 0;
    }

    return this._questionToScreenMap.getKey(screenIndex)!;
  }

  private _checkCallback() {
    // Evaluate for required screens.
    switch (this._screen) {
      case 1: {
        // Implement check logic.
        break;
      }

      default: {
        error(`Invalid screen index: ${this._screen}`);
        break;
      }
    }

    // Playing audio.
    if (this._check === CheckStatus.CORRECT) {
      if (this._audioSource && this.correctAudio)
        this._audioSource.playOneShot(this.correctAudio, 0.5);
      // animate the prompt.
      tween(this.correctPrompt)
        .to(0.2, { scale: v3(1.2, 1.2), angle: 10 })
        .to(0.2, { scale: v3(1, 1), angle: -10 })
        .to(0.2, { scale: v3(1, 1), angle: 0 })
        .start();
    } else if (this._check === CheckStatus.INCORRECT) {
      if (this._audioSource && this.incorrectAudio)
        this._audioSource.playOneShot(this.incorrectAudio, 0.2);
      // animate the prompt.
      tween(this.incorrectPrompt)
        .to(0.2, { scale: v3(1.2, 1.2), angle: 10 })
        .to(0.2, { scale: v3(1, 1), angle: -10 })
        .to(0.2, { scale: v3(1, 1), angle: 0 })
        .start();
    }

    // Update screen
    this._updateVisibility();
  }

  private _isCheckButtonVisible() {
    return this._check !== CheckStatus.CORRECT && SCREENS[this._screen] === ScreenType.HAS_CHECK;
  }

  private _isNextButtonVisible() {
    return this._check === CheckStatus.CORRECT || SCREENS[this._screen] === ScreenType.DEFAULT;
  }

  private _isMenuAvailable() {
    return (
      SCREENS[this._screen] === ScreenType.DEFAULT || SCREENS[this._screen] === ScreenType.HAS_CHECK
    );
  }
}
