import { _decorator, Component, Node, Button, UITransform, find, Sprite } from 'cc';
import { AS, debug } from '../../extensions/as_framework/framework/assets/scripts';
import { ChangeBackground } from './ChangeBackground';
const { ccclass, property } = _decorator;

@ccclass('ClickToAppear')
export class ClickToAppear extends AS(Component) {

    @property(Node) Objects: Node=null;
    @property(Node) buttons: Node=null;
    @property({type:Number}) ScreenTag: Number = -1;

    private bgs;
    private _buttons;
    private backGround: Node = null;
    private nextVis=false;

    awake()
    {
        this.backGround= find("Canvas_new/BackGround");
        this.backGround.on("Screen",this._setNavStatus.bind(this));

        this.bgs=this.Objects.getComponentsInChildren(Sprite);
        debug("ghhh",this.bgs);
        this._buttons=this.buttons.getComponentsInChildren(Button);



    }
    star()
    {
      this.backGround.getComponent(ChangeBackground).ButtonClick.play();
       this.Objects.getComponentsInChildren(Sprite)[0].node.active=true;
       this.Objects.getComponentsInChildren(Sprite)[1].node.active=false;

        this.buttons.getComponentsInChildren(Button)[0].node.active=false;
        this.buttons.getComponentsInChildren(Button)[1].node.active=true;
        this.buttons.getComponentsInChildren(Button)[1].node.position= this.buttons.getComponentsInChildren(Button)[0].node.position;
        this.nextVis=true;
        this.backGround.getComponent(ChangeBackground)._navButtonVisibility(this.nextVis,true,false)
    }
    moon()
    {
      this.backGround.getComponent(ChangeBackground).ButtonClick.play();
       this.Objects.getComponentsInChildren(Sprite)[0].node.active=false;
       this.Objects.getComponentsInChildren(Sprite)[1].node.active=true;

        this.buttons.getComponentsInChildren(Button)[1].node.active=false;
        this.buttons.getComponentsInChildren(Button)[0].node.active=true;
        this.nextVis=true;
        this.backGround.getComponent(ChangeBackground)._navButtonVisibility(this.nextVis,true,false)
    }
    _setNavStatus(screen)
    {
        if(this.ScreenTag==screen)
        this.backGround.getComponent(ChangeBackground)._navButtonVisibility(this.nextVis,true,false)
    }

}

