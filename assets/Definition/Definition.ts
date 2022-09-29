import { _decorator, Component, Button} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { UIPopup } from "db://as_framework/scripts/UIPopup";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('Definition')
export class Definition extends AS(Component) {
    @property(UIPopup) popup: UIPopup | null = null;
    @property(Button) button: Button | null = null;

    awake(){
        this.button.addComponent(ReplicatedButton);
        this._addEventListeners();
        this.popup.getComponentInChildren(Button).node.on(Button.EventType.CLICK,  () => {
            if (this.popup.isVisible)
                this.popup.hide();
        })
    }
    private _addEventListeners() {
        this.button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
    }
    private _onButtonClick() {        
        this.popup.show();
    }
}
