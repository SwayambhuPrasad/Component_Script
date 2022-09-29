import { _decorator, Component, Node,instantiate, Button, UITransform, UI, Sprite, sp, Prefab } from 'cc';
import { AS } from "db://as_framework/scripts//ASComponent";
import { UIPopup } from "db://as_framework/scripts/UIPopup";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property, requireComponent } = _decorator;

@ccclass('AddImage')
@requireComponent(Button)
export class AddImage extends AS(Component) {

    @property(UIPopup) popup: UIPopup|null = null;
    @property(Sprite) private optionSprite: Sprite[]=[];
    @property(Prefab) private optionPrefab: Prefab=null;

    private _button: Button | null = null;



    awake() {
        this._button = this.getComponent(Button);
        this.node.addComponent(ReplicatedButton);
        this._addEventListeners();
        const insertButtonsComp = this.popup.node.children
        insertButtonsComp.forEach((child, i) => {
                child.addComponent(Button);
                child.addComponent(ReplicatedButton);

                child.on(Button.EventType.CLICK, async () => {
                    if (this.popup.isVisible) await this.popup.hide();
                    let _selectedOption = instantiate(child);
                    _selectedOption.parent=this.node;
                    _selectedOption.position=this.node.position;
                    _selectedOption.getComponent(UITransform).height=this.node.getComponent(UITransform).height;
                    _selectedOption.getComponent(UITransform).width=this.node.getComponent(UITransform).width;
                    _selectedOption.getComponent(Button).destroy();
                    child.children

                })
        })
    }

    private _addEventListeners() {
        this._button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
    }

    private _removeEventListeners() {
        this._button.node.off(Button.EventType.CLICK, this._onButtonClick, this);
    }

    private _onButtonClick() {
        this.popup.show();
    }

    private _spriteAssigner(){
      this.optionSprite.forEach((sprt,i) => {

      });
    }

    // insertChild() {
    //   for (let i = 0; i < this.optionLabel.length; i++) {
    //     let addchild = instantiate(this.optionPrefab);
    //     addchild.parent = this.optionsContainer.node;
    //   }
    // }




}

