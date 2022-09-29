import { _decorator, Component, Button, Node, Layout, Sprite, SpriteFrame, instantiate, Prefab} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
import { UIView } from "db://as_framework/scripts/UIView"
const { ccclass, property } = _decorator;


@ccclass('TapToReveal')
export class TapToReveal extends AS(Component) {
    @property(Layout) buttonContainer : Layout | null = null;
    @property(Node) revealContainer : Node | null = null;
    @property(Node) commonTap : Node | null = null;
    @property(Prefab) buttonPrefab : Prefab | null = null;
    @property(Prefab) revealPrefab : Prefab | null = null;
    @property(SpriteFrame) tapButtons : SpriteFrame[] | null = [];
    @property(SpriteFrame) tapButtonsHilight : SpriteFrame[] | null = [];
    @property(SpriteFrame) revealSprites : SpriteFrame[] | null = [];

    private _buttons : Node[] | null = [];
    private _reveals : Node[] | null = [];


    awake(){

        this._addEventListeners();
        //instantiate all buttons and nodes
        for(let i = 0; i < this.tapButtons.length; i++) {
                let newButton = instantiate(this.buttonPrefab);
                newButton.parent = this.buttonContainer.node;
                newButton.addComponent(ReplicatedButton);

                this._buttons.push(newButton);
                let newReveal = instantiate(this.revealPrefab);
                newReveal.parent = this.revealContainer;
                this._reveals.push(newReveal);
        }
        //assign spriteframes
        this._reveals.forEach((rev, i) => {
            rev.getComponent(Sprite).spriteFrame = this.revealSprites[i];
        });
        //assign spriteframes to buttons and handle button click
        this._buttons.forEach((btn, i) => {
            btn.getComponent(Sprite).spriteFrame = this.tapButtons[i];
            btn.getChildByName('Hilight').getComponent(Sprite).spriteFrame = this.tapButtonsHilight[i];
            btn.on(Button.EventType.CLICK, () => {
                this._buttons.forEach((btnhl, j) => {
                    btnhl.getChildByName('Hilight').active = false;
                })
                btn.getChildByName('Hilight').active = true;
                this.commonTap.getComponent(UIView).show();
                this._reveals.forEach((rev, k) => {
                    rev.active = false;
                });
                this._reveals[i].active = true;
            })
        });
    }
    private _addEventListeners() {
        this.commonTap.on(Button.EventType.CLICK, this._onTapToReveal, this);
    }
    private _onTapToReveal(){
        this.commonTap.getComponent(UIView).hide();
    }
}