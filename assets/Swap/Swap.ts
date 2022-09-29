import { Button, Color, Component, Node, Sprite, SpriteFrame, _decorator } from "cc";
import { AS } from "db://as_framework/scripts//ASComponent";
import { UIDrag } from "db://as_framework/scripts/UIDrag";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("Swap")
export class Swap extends AS(Component) {
  @property({ type: SpriteFrame }) private parentImage: SpriteFrame[] = [];
  @property({ type: SpriteFrame }) private dragImage: SpriteFrame[] = [];
  @property({ type: Node }) private DragContainer: Node;
  @property({ type: Node }) private ParentImageContainer: Node;
  @property({ type: Node }) private check: Node;
  @property({ type: Number }) private Answer: number[] = [];

  private  _position= [];
  private _dragOptions = [];

  private _white = new Color(255,255,255,255);
  private _red = new Color(255,0,0,255);
  private _green = new Color(0,255,0,255);

  awake() {
    this._updateComponent();
    this.check.addComponent(Button);
    this._collectPositions();
    this.check.on(Button.EventType.CLICK, this._check,this);

    
  }
  
  private _updateComponent() {
    for (let i = 0; i < this.parentImage.length; i++) {
      this.DragContainer.children[i].getComponent(Sprite).spriteFrame = this.dragImage[i];
      this._dragOptions.push(this.DragContainer.children[i]);
      this.ParentImageContainer.children[i].getComponent(Sprite).spriteFrame = this.parentImage[i];
    }
  }

  private _collectPositions(){
    this.DragContainer.children.forEach((drag, i)=>{
      this._position.push(drag.getPosition().y);
    })
  }


  private _check() {
    this._dragOptions.forEach((draggable, i)=>{
      if(draggable.position.y == this._position[this.Answer[i]]){
        this._colorHilight(draggable, this._green)
      }
      else{
        this._colorHilight(draggable, this._red)
      }
    })
  }

  private _colorHilight(draggable, color) {
    draggable.getComponent(Sprite).color = color;
  }






}
