import { Button, Canvas, Component, find, instantiate, Label, Layout, Prefab, _decorator, Node, EventHandler, Event, SpriteFrame, bits } from "cc";
import { AS, UIView } from "db://as_framework/scripts";
import { ReplicatedButton } from "db://as_framework/scripts";
import { UIAnimationLibrary } from "db://as_framework/scripts/UIAnimLibrary";
import { debug } from "db://as_framework/scripts";


import { ChangeBackground } from "../../Background/ChangeBackground";
import { CheckPrompt } from "../../Background/CheckPrompt";
import { ValidationEvent } from "../../Background/ValidationEvent";
const { ccclass, property, requireComponent } = _decorator;

enum AnswerType {
  SINGLE_CORRECT,
  MULTIPLE_CORRECT,
}

@ccclass("MCQ")
export class MCQ extends AS(Component) {

  private backGround: Node = null;

  @property({ type: Number }) ScreenTag: Number = -1;

  @property({ type: String }) private optionLabel: string[] = [];

  @property(Prefab) private optionPrefab: Prefab = null;

  //@property(SpriteFrame) private optionSprite: SpriteFrame[] = [];

  @property(Layout) private optionsContainer: Layout | null = null;

  //@property({type: Enum(AnswerType)}) private answerType = AnswerType.SINGLE_CORRECT;

  // @property({visible: function (this: MCQ) {return this.answerType === AnswerType.SINGLE_CORRECT}}) private x;
  private _selection = Array<boolean>();

  @property({ type: Boolean }) private answer = [];

  @property({ type: Boolean }) private createRuntimeOption = true;

  @property private changeColorAsFeedback = true;

  @property private SingleAns = true;

  private store = -1;


  //private ChangeBackground;

  awake() {
    this.backGround = find("Canvas_new/BackGround");
    this.backGround.on("Screen", this._setNavStatus.bind(this));

    // const BackGround=new  ChangeBackground
    // BackGround.node.on("Screen",this._setNavStatus.bind(this,BackGround))

    if (this.createRuntimeOption) this.insertChild();

    const insertButtonsComp = this.optionsContainer.node.children;

    const choiceButtons = insertButtonsComp.map((child) => {
      const btn = child.addComponent(Button);
      child.addComponent(ReplicatedButton);
      return btn;
    });
    this.node.children[1].addComponent(Button);
    this.node.children[1].addComponent(ReplicatedButton);
    this.node.children[1].addComponent(UIView);
    this.node.children[1].on(Button.EventType.CLICK, () => {
      this.checkSelection();
    });
    choiceButtons.forEach((btn, i) => {
      this._selection.push(false);

      btn.node.on(Button.EventType.CLICK, async () => {
        if (this.SingleAns)
          if (this.store != -1) {
            choiceButtons[this.store].node.children[0].active = false;
            this._selection[this.store] = false;
          }
        this.store = i
        this.backGround.getComponent(ChangeBackground).ButtonClick.play();
        if (this._selection[i] === false) {
          btn.node.children[0].active = true;
          this._selection[i] = true;
        } else {
          btn.node.children[0].active = false;
          this._selection[i] = false;
        }
      });
    });
    this.lableAssigner();

  }

  onEnable() {
    this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false, false, false)
  }
  // onDisable(){
  //   this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false,true,false)
  // }

  _setNavStatus(screen) {
    if (this.ScreenTag == screen) {
      console.log("set", screen)
      this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false, true, false)
    }
  }



  _callToVisible(Screen) {
    if (this.ScreenTag == Screen) this.node.active = true;
    else if (this.ScreenTag == -1) return;
    else this.node.active = false;
  }

  insertChild() {
    for (let i = 0; i < this.optionLabel.length; i++) {
      let addchild = instantiate(this.optionPrefab);
      addchild.parent = this.optionsContainer.node;
    }
  }

  async checkSelection() {
    this.backGround.getComponent(ChangeBackground).ButtonClick.play();
    const isCorrect = this._selection.reduce((check, isSelected, i) => {
      check &&= isSelected === this.answer[i]
      return check;
    }, true);

    this.checkFeedback(isCorrect ? 1 : 2);
    this.node.children[1].active = false;
    if (isCorrect)
      await this.backGround.getComponentInChildren(CheckPrompt).showCorrect();
    else await this.backGround.getComponentInChildren(CheckPrompt).showTryAgain();
    this.node.children[1].active = true;
    const ev = new ValidationEvent(true, isCorrect)
    this.node.dispatchEvent(ev)
    debug("Dispatched event - ", ev)
  }

  lableAssigner() {
    const mcqLable = this.node.getComponentsInChildren(Label);
    mcqLable.forEach((btnLable, i) => {
      if (this.optionLabel.length <= i) {
        btnLable.node.parent.active = false;
      } else btnLable.string = this.optionLabel[i];
    });
  }

  async checkFeedback(statusIndex) {
    const btn = this.optionsContainer.node.children;
    await Promise.all(
      this._selection.map(async (status, i) => {
        if (status) {
          btn[i].children[statusIndex].active = true;
          await UIAnimationLibrary.flash(btn[i].children[statusIndex], 2);
          btn[i].children[statusIndex].active = false;
        }
      }),
    );
  }
}
