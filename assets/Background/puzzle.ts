import { throws } from 'assert';
import { _decorator, Component, Node, Button,find, Intersection2D, PolygonCollider2D, EventTouch } from 'cc';
import { AS, UIPopup, UIView } from 'db://as_framework/scripts';
import { ChangeBackground } from './ChangeBackground';
import { ValidationEvent } from './ValidationEvent';
const { ccclass, property } = _decorator;

@ccclass('puzzle')
export class puzzle extends AS(Component) {
private backGround:Node=null;
private puzzle: Button [] = [];
private popup : UIView [] = [];
private currentIndex = -1;
private nextVis=false;
private close:Node=null;
private isCorrect=false;
private backUpBG: Node =  null;


@property private ScreenTag=-1;

awake(){
    this.backGround= find("Canvas_new/BackGround");
    this.backGround.on("Screen",this._setNavStatus.bind(this));

    this.puzzle= this.node.getChildByName("Puzzles").getComponentsInChildren(Button);
    this.popup=  this.node.getComponentsInChildren(UIView);

    this.backUpBG=this.node.getChildByName("BackUpBG").children[0];

    this.popup.forEach((popup) => popup.node.active = false);

    this.puzzle.forEach((p,i) => {
        p.node.on(Button.EventType.CLICK,(event:EventTouch)=>{
            this._onButtonClicktoshow(i)},this);
    });

    this.close=this.node.getChildByName("close");
    this.node.on(ValidationEvent.TYPE, (ev: ValidationEvent) => {
        this.isCorrect=ev.isCorrect;
        if(ev.isCorrect)this.onRevail();})
}


_callToVisible(Screen){
    if(this.ScreenTag == Screen) this.node.active=true;
    else if(this.ScreenTag==-1) return;
    else this.node.active=false;
  }

_onButtonClicktoshow(index){

    this.currentIndex=index;
    console.log("current-index", index)
    this.popup[index].show();
    this.close.active=true;

}

_setNavStatus(screen){
    if(this.ScreenTag==screen){
      console.log("set",screen)
      this.backGround.getComponent(ChangeBackground)._navButtonVisibility(this.nextVis,true,false)
    }
  }
 onRevail(){

        this.close.active=false;
        this.popup[this.currentIndex].hide();
       if(this.isCorrect) this.puzzle[this.currentIndex].node.active=false;
       else this.backGround.getComponent(ChangeBackground).ButtonClick.play();
       this.isCorrect=false;
        var count=0;
        this.puzzle.forEach((p) => {
            if(p.node.active==false) count++;
        });
        if(count==this.puzzle.length) {
        this.nextVis=true
       this.backUpBG.active=true;}
        this.backGround.getComponent(ChangeBackground)._navButtonVisibility(this.nextVis,true,false)
}
}


