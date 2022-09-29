System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioClip, AudioSource, BlockInputEvents, Button, Component, Node, Toggle, tween, v3, _decorator, BiDirectionalMap, error, info, MenuController, networkReplicator, OptionButton, SoftEditBox, UIDrag, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, requireComponent, CheckStatus, ScreenType, SCREENS, AppletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnalyticsData(extras) {
    _reporterNs.report("AnalyticsData", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBiDirectionalMap(extras) {
    _reporterNs.report("BiDirectionalMap", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinfo(extras) {
    _reporterNs.report("info", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReplicatedEvent(extras) {
    _reporterNs.report("IReplicatedEvent", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuController(extras) {
    _reporterNs.report("MenuController", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptionButton(extras) {
    _reporterNs.report("OptionButton", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoftEditBox(extras) {
    _reporterNs.report("SoftEditBox", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      BlockInputEvents = _cc.BlockInputEvents;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BiDirectionalMap = _unresolved_2.BiDirectionalMap;
      error = _unresolved_2.error;
      info = _unresolved_2.info;
      MenuController = _unresolved_2.MenuController;
      networkReplicator = _unresolved_2.networkReplicator;
      OptionButton = _unresolved_2.OptionButton;
      SoftEditBox = _unresolved_2.SoftEditBox;
      UIDrag = _unresolved_2.UIDrag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04921Wh9Q1N+6VKzmzEOajF", "AppletController", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      (function (CheckStatus) {
        CheckStatus[CheckStatus["INCORRECT"] = -1] = "INCORRECT";
        CheckStatus[CheckStatus["UNCHECKED"] = 0] = "UNCHECKED";
        CheckStatus[CheckStatus["CORRECT"] = 1] = "CORRECT";
      })(CheckStatus || (CheckStatus = {}));

      (function (ScreenType) {
        ScreenType[ScreenType["DEFAULT"] = 0] = "DEFAULT";
        ScreenType[ScreenType["BEGIN"] = 1] = "BEGIN";
        ScreenType[ScreenType["END"] = 2] = "END";
        ScreenType[ScreenType["HAS_CHECK"] = 3] = "HAS_CHECK";
      })(ScreenType || (ScreenType = {}));

      SCREENS = [ScreenType.BEGIN, // Screen 0
      // ScreenType.HAS_CHECK, // Screen 1
      // ScreenType.DEFAULT, // Screen 2
      // ScreenType.DEFAULT, // Screen 3
      // ... etc.
      ScreenType.END // Screen last
      ];

      _export("AppletController", AppletController = (_dec = ccclass("AppletController"), _dec2 = requireComponent(AudioSource), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
        error: Error()
      }), MenuController) : MenuController), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(BlockInputEvents), _dec12 = property(_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
        error: Error()
      }), SoftEditBox) : SoftEditBox), _dec13 = property(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
        error: Error()
      }), OptionButton) : OptionButton), _dec14 = property(Button), _dec15 = property(Toggle), _dec16 = property(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec17 = property(AudioClip), _dec18 = property(AudioClip), _dec19 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = class AppletController extends Component {
        // List of all screen backgrounds - including start and end.
        // Common interface buttons.
        // Menu interface nodes.
        // Prompts - correct and wrong answer.
        // Input blocker
        // Activity input nodes and components.
        // Replace and use these as needed.
        // Audio files for button clicks and correct/incorrect responses
        // Current screen / question index.
        // Check
        constructor() {
          super();

          _initializerDefineProperty(this, "screens", _descriptor, this);

          _initializerDefineProperty(this, "beginButton", _descriptor2, this);

          _initializerDefineProperty(this, "checkButton", _descriptor3, this);

          _initializerDefineProperty(this, "nextButton", _descriptor4, this);

          _initializerDefineProperty(this, "homeButton", _descriptor5, this);

          _initializerDefineProperty(this, "menu", _descriptor6, this);

          _initializerDefineProperty(this, "correctPrompt", _descriptor7, this);

          _initializerDefineProperty(this, "incorrectPrompt", _descriptor8, this);

          _initializerDefineProperty(this, "inputBlocker", _descriptor9, this);

          _initializerDefineProperty(this, "inputBoxes", _descriptor10, this);

          _initializerDefineProperty(this, "optionButtons", _descriptor11, this);

          _initializerDefineProperty(this, "buttons", _descriptor12, this);

          _initializerDefineProperty(this, "toggles", _descriptor13, this);

          _initializerDefineProperty(this, "draggables", _descriptor14, this);

          _initializerDefineProperty(this, "clickAudio", _descriptor15, this);

          _initializerDefineProperty(this, "correctAudio", _descriptor16, this);

          _initializerDefineProperty(this, "incorrectAudio", _descriptor17, this);

          this._audioSource = null;
          this._replicationIndex = void 0;
          this._screen = 0;
          this._questionToScreenMap = new (_crd && BiDirectionalMap === void 0 ? (_reportPossibleCrUseOfBiDirectionalMap({
            error: Error()
          }), BiDirectionalMap) : BiDirectionalMap)(SCREENS.reduce((arr, screenType, screenIndex) => {
            if (screenType === ScreenType.HAS_CHECK) {
              var qIndex = arr.length;
              arr.push([qIndex, screenIndex]);
            }

            return arr;
          }, []));
          this._check = CheckStatus.UNCHECKED;
          this._correctAnswers = new Array(SCREENS.filter(type => type === ScreenType.HAS_CHECK).length);
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        onLoad() {
          var _this$beginButton, _this$checkButton, _this$nextButton, _this$homeButton, _this$menu, _this$menu2, _this$menu3, _this$menu4, _this$menu5;

          // Get the audio source component.
          this._audioSource = this.getComponent(AudioSource);
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).analyticsInjected.on(data => {
            if (data == null) return;
            var correctAnswers = new Array(this._questionToScreenMap.size);

            for (var index = 0; index < this._questionToScreenMap.size; index++) {
              if (data.questions[index].answeredCorrectly) correctAnswers[index] = true;
            } // The json q starts from 1 but we track from 0.


            var qIndex = data.current_q - 1;

            this._analyticsCallback(qIndex, correctAnswers);
          }); // Set up common buttons functionality.

          (_this$beginButton = this.beginButton) == null ? void 0 : _this$beginButton.node.on(Button.EventType.CLICK, this._beginCallback, this);
          (_this$checkButton = this.checkButton) == null ? void 0 : _this$checkButton.node.on(Button.EventType.CLICK, this._checkCallback, this);
          (_this$nextButton = this.nextButton) == null ? void 0 : _this$nextButton.node.on(Button.EventType.CLICK, this._nextCallback, this);
          (_this$homeButton = this.homeButton) == null ? void 0 : _this$homeButton.node.on(Button.EventType.CLICK, this._homeCallback, this);
          (_this$menu = this.menu) == null ? void 0 : _this$menu.node.on((_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
            error: Error()
          }), MenuController) : MenuController).EventType.MENU_RESET, this._menuResetCallback, this);
          (_this$menu2 = this.menu) == null ? void 0 : _this$menu2.node.on((_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
            error: Error()
          }), MenuController) : MenuController).EventType.MENU_HOME, this._homeCallback, this);
          (_this$menu3 = this.menu) == null ? void 0 : _this$menu3.node.on((_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
            error: Error()
          }), MenuController) : MenuController).EventType.MENU_QUESTION, this._menuQuestionCallback, this);
          (_this$menu4 = this.menu) == null ? void 0 : _this$menu4.node.on((_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
            error: Error()
          }), MenuController) : MenuController).EventType.MENU_CLOSE, () => this._playClickSound(), this);
          (_this$menu5 = this.menu) == null ? void 0 : _this$menu5.node.on((_crd && MenuController === void 0 ? (_reportPossibleCrUseOfMenuController({
            error: Error()
          }), MenuController) : MenuController).EventType.MENU_OPEN, () => this._playClickSound(), this); // --------------------------------------------------
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
          var syncData = {
            screenIndex: this._screen,
            checkStatus: this._check
          };
          return syncData;
        }

        updateStateData(syncData) {
          var _syncData$checkStatus;

          // Update the state variables.
          this._screen = syncData.screenIndex;
          this._check = (_syncData$checkStatus = syncData.checkStatus) != null ? _syncData$checkStatus : this._check; // If null keep.

          this._updateVisibility(true); // Some updates need to happen after the visibility has been updated
          // eg. menu, draggables, popups etc.

        }

        _playClickSound() {
          if (this.clickAudio == null || this._audioSource == null) return; // Play the button click audio once

          this._audioSource.playOneShot(this.clickAudio, 1.0);
        }

        _updateVisibility(isUpdateBackground) {
          if (isUpdateBackground === void 0) {
            isUpdateBackground = false;
          }

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
            this.screens.forEach((node, i) => node.active = this._screen === i);
            (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
              error: Error()
            }), info) : info)("Making screen " + this._screen + " visible");
          }
        }

        _resetCallback() {
          // Reset the soft edit boxes.
          this.inputBoxes.forEach(inputBox => {
            inputBox.string = "";
            inputBox.enabled = true;
            inputBox.hideKeypad();
          });
          this.optionButtons.forEach(btn => {
            btn.reset();
          });
          this.draggables.forEach(drag => drag.reset());
        }

        _beginCallback() {
          this._playClickSound();

          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("Applet started!!");
          this._screen = 1;

          this._updateVisibility(true);
        }

        _homeCallback() {
          this._playClickSound();

          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("Applet Restarted!!");
          this._screen = 0;

          this._resetCallback();

          this._updateVisibility(true);
        }

        _nextCallback() {
          // Send Analytics data if needed before screen is incremented.
          if ((_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).isAnalyticsWorking && SCREENS[this._screen] === ScreenType.HAS_CHECK) {
            var qIndex = this._screenToQuestion(this._screen);

            if (this._check === CheckStatus.CORRECT) {
              this._correctAnswers[qIndex] = true;
            }

            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).sendAnalyticsData(qIndex + 1, // The json q starts from 1 but we track from 0.
            this._correctAnswers, false);
          } // Check if last page and send with the flag as true.


          if ((_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).isAnalyticsWorking && SCREENS[this._screen + 1] === ScreenType.END) {
            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).sendAnalyticsData(-1, this._correctAnswers, true);
          }

          this._playClickSound();

          this._screen++;
          this._check = CheckStatus.UNCHECKED;

          this._updateVisibility(true);
        }

        _menuResetCallback() {
          this._playClickSound();

          this._resetCallback();
        }

        _analyticsCallback(current_q, correctAnswers) {
          this._screen = this._questionToScreen(current_q);
          this._correctAnswers = correctAnswers;

          this._resetCallback();

          this._updateVisibility(true);
        }

        _menuQuestionCallback(questionIndex) {
          // The selected question number starts from 1.
          this._screen = this._questionToScreen(questionIndex - 1);

          this._resetCallback();

          this._updateVisibility(true);
        }

        _questionToScreen(questionIndex) {
          if (!this._questionToScreenMap.hasKey(questionIndex)) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Invalid question index ", questionIndex);
            return 0;
          }

          return this._questionToScreenMap.getValue(questionIndex);
        }

        _screenToQuestion(screenIndex) {
          if (!this._questionToScreenMap.hasValue(screenIndex)) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Invalid screen index ", screenIndex);
            return 0;
          }

          return this._questionToScreenMap.getKey(screenIndex);
        }

        _checkCallback() {
          // Evaluate for required screens.
          switch (this._screen) {
            case 1:
              {
                // Implement check logic.
                break;
              }

            default:
              {
                (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                  error: Error()
                }), error) : error)("Invalid screen index: " + this._screen);
                break;
              }
          } // Playing audio.


          if (this._check === CheckStatus.CORRECT) {
            if (this._audioSource && this.correctAudio) this._audioSource.playOneShot(this.correctAudio, 0.5); // animate the prompt.

            tween(this.correctPrompt).to(0.2, {
              scale: v3(1.2, 1.2),
              angle: 10
            }).to(0.2, {
              scale: v3(1, 1),
              angle: -10
            }).to(0.2, {
              scale: v3(1, 1),
              angle: 0
            }).start();
          } else if (this._check === CheckStatus.INCORRECT) {
            if (this._audioSource && this.incorrectAudio) this._audioSource.playOneShot(this.incorrectAudio, 0.2); // animate the prompt.

            tween(this.incorrectPrompt).to(0.2, {
              scale: v3(1.2, 1.2),
              angle: 10
            }).to(0.2, {
              scale: v3(1, 1),
              angle: -10
            }).to(0.2, {
              scale: v3(1, 1),
              angle: 0
            }).start();
          } // Update screen


          this._updateVisibility();
        }

        _isCheckButtonVisible() {
          return this._check !== CheckStatus.CORRECT && SCREENS[this._screen] === ScreenType.HAS_CHECK;
        }

        _isNextButtonVisible() {
          return this._check === CheckStatus.CORRECT || SCREENS[this._screen] === ScreenType.DEFAULT;
        }

        _isMenuAvailable() {
          return SCREENS[this._screen] === ScreenType.DEFAULT || SCREENS[this._screen] === ScreenType.HAS_CHECK;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "screens", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beginButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "checkButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "menu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "correctPrompt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "incorrectPrompt", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "inputBlocker", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "inputBoxes", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "optionButtons", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "toggles", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "draggables", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "clickAudio", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "correctAudio", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "incorrectAudio", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97c3c606e42377c8c41c7fea504a756e8f77a421.js.map