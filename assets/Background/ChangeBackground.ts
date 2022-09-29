import { _decorator, Component, Node, SpriteFrame, Sprite, tweenUtil, AudioClip, director } from 'cc';
import { AS, UIView } from '../../extensions/as_framework/framework/assets/scripts';
const { ccclass, property } = _decorator;

@ccclass('ChangeBackground')
export class ChangeBackground extends AS(Component) {

    @property({type: Node}) BG: Node[]=[];
    @property({type: Node}) Next: Node=null;
    @property({type: Node}) Back: Node=null;
    @property({type: Node}) Begin: Node=null;
    @property({type: Node}) Home: Node=null;
    @property({type: Node}) Prompt: Node=null;
    @property(AudioClip) ButtonClick: AudioClip=null;

    private _nextView: UIView | null = null;
    private _backView: UIView | null = null;
    private _beginView: UIView | null = null;

    private Screen=0;

    awake(){
      this._nextView = this.Next.getComponent(UIView)
      this._backView = this.Back.getComponent(UIView)
      this._beginView = this.Begin.getComponent(UIView)
      this._changeBackGround();
    }

    Navigation(event,nav){
        if(this.Screen!=this.BG.length-1 && nav==1) this.Screen++;
        else if(this.Screen!=0 && nav==-1) this.Screen--;
        else if(this.Screen==this.BG.length-1 && nav==2)
          director.loadScene(director.getScene().name)

        this._changeBackGround();
        this.ButtonClick.play();

    }

    _changeBackGround(){
       this.BG.forEach((b) => {b.active=false;});
       this.BG[this.Screen].active=true;

       if(this.Screen==0) this._navButtonVisibility(false,false,true)
       else if(this.Screen==this.BG.length-1) this._navButtonVisibility(false,true,false)
       else this._navButtonVisibility(true,true,false);
       this.node.emit("Screen",this.Screen)
    }
    async _navButtonVisibility(Next,Back,Begin){
          this.Next.active=Next;
          this.Back.active=Back;
          this.Begin.active=Begin;
          this.Home.active = this.Screen==this.BG.length-1 ? true: false;
    }

}

