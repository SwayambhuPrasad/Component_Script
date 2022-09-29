import { _decorator, Component, Button, Node, Sprite, SpriteFrame, instantiate, Prefab, Color, find } from 'cc';
import { AS } from "db://as_framework/scripts//ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
import { ReplicatedUIDrag, UIDrag, UIDrop } from "db://as_framework/scripts";
import { ChangeBackground } from '../Background/ChangeBackground';
import { CheckPrompt } from '../Background/CheckPrompt';
import { ValidationEvent } from '../Background/ValidationEvent';

const { ccclass, property } = _decorator;

@ccclass('SnapToSlot')
export class SnapToSlot extends AS(Component) {

  @property({ type: Number }) ScreenTag: Number = -1;
  @property(UIDrop) DropSlots: UIDrop[] | null = [];
  @property(UIDrag) DragOptions: UIDrag[] | null = [];
  @property(Node) check: Node | null = null;
  @property(String) answer: String[] | null = [];

  private correctCount = [];
  private backGround: Node = null;
  private correctDrags = [];
  private wrongDrags = [];
  private chechstatus;
  @property private changeColorAsFeedback = true;

  awake() {
    this.backGround = find("Canvas_new/BackGround");
    this.backGround.on("Screen", this._setNavStatus.bind(this));


    this.DragOptions.forEach((dragOption, i) => {
      this.correctCount.push(-1);
      dragOption.addComponent(ReplicatedUIDrag)
      dragOption.node.on(UIDrag.EventType.DRAG_DID_END, () => {
        this.backGround.getComponent(ChangeBackground).ButtonClick.play();
        if (!this.check.active) this.check.active = true;
        this.scheduleOnce(this.afterDrop, 0.05);
      })
    })
    this.check.addComponent(ReplicatedButton)
    this.check.on(Button.EventType.CLICK, () => {
      this.backGround.getComponent(ChangeBackground).ButtonClick.play();
      this.chechstatus = true;
      this.wrongDrags = [];
      this.correctDrags = [];
      this.DragOptions.forEach((drag, i) => {

        var condition = false;
        let counter = 0;
        for (let j = 0; j < this.answer[i].length; j++) {
          if (drag.validUIDrop === this.DropSlots[this.answer[i][j]])
            counter++;
        }
        if (counter > 0) condition = true
        else condition = false;

        if (condition) {
          if (this.changeColorAsFeedback) drag.getComponent(Sprite).color = new Color(24, 186, 24, 255);
          else {
            drag.node.children[0].active = true;
          }
          this.correctCount[i] = 1;
          this.correctDrags.push(drag)
        }
        else {
          this.chechstatus = false;
          this.correctCount[i] = -1;
          if (this.changeColorAsFeedback) drag.getComponent(Sprite).color = new Color(255, 50, 50, 255);
          else {
            drag.node.children[1].active = true;
          }
          this.wrongDrags.push(drag)
        }
      })
      this.check.active = false;
      this._callForPromts();

    })

  }
  onEnable() {
    this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false, false, false)
  }
  //   onDisable(){
  //     this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false,true,false)
  //   }
  _setNavStatus(screen) {
    if (this.ScreenTag == screen) {
      console.log("set", screen)
      this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false, true, false)
    }
  }

  async _callForPromts() {

    if (this.chechstatus) {
      await this.backGround.getComponentInChildren(CheckPrompt).showCorrect();
      const ev = new ValidationEvent(true, true)
      this.node.dispatchEvent(ev)
      this.check.active = true;
    }
    else {
      await this.backGround.getComponentInChildren(CheckPrompt).showTryAgain();
      const ev = new ValidationEvent(true, false)
      this.node.dispatchEvent(ev)
      this.check.active = true;
    }
    this.scheduleOnce(this.afterCheck, 1);
  }

  afterDrop() {

    this.DragOptions.forEach((dragOption, i) => {
      console.log("pos of " + i + " ---" + dragOption.node.worldPosition + "   reset   " + dragOption.resetScreenPoint)
      if (dragOption.validUIDrop == null) {
        dragOption.getComponent(Sprite).color = new Color(255, 255, 255, 255);
      }
    })

  }
  afterCheck() {
    this.wrongDrags.forEach((W) => {
      W.reset();
      if (this.changeColorAsFeedback) W.getComponent(Sprite).color = new Color(255, 255, 255, 255);
      else { this._resetfeedback(); }
    });
    this.correctDrags.forEach((R) => {
      if (this.changeColorAsFeedback) R.getComponent(Sprite).color = new Color(255, 255, 255, 255);
      else { this._resetfeedback(); }
    });
  }

  _resetfeedback() {
    for (let i = 0; i < this.DragOptions.length; i++)
      this.DragOptions[i].node.children.forEach((child) => {
        child.active = false;
      })
  }








}

