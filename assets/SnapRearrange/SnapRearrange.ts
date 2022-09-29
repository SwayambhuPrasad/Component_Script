import { Button, Color, Component, Layout, Node, Sprite, SpriteFrame, _decorator } from "cc";
import { AS } from "db://as_framework/scripts//ASComponent";
import { UIDragSort } from "db://as_framework/scripts/UIDragSort";
import { UIDrag } from "db://as_framework/scripts/UIDrag";
const { ccclass, property, requireComponent } = _decorator;

@ccclass('SnapRearrange')
export class SnapRearrange extends AS(Component) {
    @property(UIDragSort) slot : UIDragSort | null = null;
    @property(Node) check : Node | null = null;
    @property answer = '';
    
    private _container : Layout | null = null;
    private _white = new Color(255,255,255,255);
    private _red = new Color(255,0,0,255);
    private _green = new Color(0,255,0,255);
    private _dragOptions = [];

    awake(){
        this._container = this.slot.container;
        this.slot.node.children.forEach((option, i)=>{
            if(i>0){
                this._dragOptions.push(option)
                option.on(UIDrag.EventType.DRAG_DID_BEGAN, ()=>{
                    this._dragOptions.forEach((drag,j)=>{
                        this._colorHilight(drag, this._white)
                    })
                    this.check.active = true;
                })
            }
        })
        this.check.on(Button.EventType.CLICK, ()=>{
            if(this._container.node.children.length == this.slot.node.children.length-1){   this._check();
                console.log("check")
            }
        },this);
    }
    private _check() {
        let correctCount = 0;
        this._container.node.children.forEach((option, i)=>{
        if(option.name == this._dragOptions[this.answer[i]].name+"-shadow"){
            this._colorHilight(this._dragOptions[this.answer[i]], this._green)
            correctCount++
        }
        else
            this._colorHilight(this._dragOptions[this.answer[i]], this._red)  
        })
        if(correctCount == this._dragOptions.length)
            this.check.active = false;
    }
    private _colorHilight(option, color) {
        option.getComponent(Sprite).color = color;
    }
}

