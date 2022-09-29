import { _decorator, Component, Node, instantiate, Button, Label, Sprite, EditBox, Prefab} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { UIPopup } from "db://as_framework/scripts/UIPopup";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('PickSentence')
export class PickSentence extends AS(Component) {
    @property(Button) button: Button | null = null;
    @property(UIPopup) popup: UIPopup | null = null;
    @property(Prefab) optionPrefab: Prefab | null = null;
    @property(Label) label: Label | null = null;
    @property(Label) questionLabel: Label | null = null;
    @property(String) questionString: String = '';
    @property(String) optionLabel: String[] | null = [];
    private _choices : Node[] | null = [];

    awake() {
        this.button.addComponent(ReplicatedButton);
        this._addEventListeners();
        this.questionLabel.string = this.questionString.toString();
        for(let i = 0; i < this.optionLabel.length; i++) {
            let newOption = instantiate(this.optionPrefab);
            newOption.parent = this.popup.node.getChildByName('Layout');
            newOption.addComponent(ReplicatedButton);
            this._choices.push(newOption);
        }
        const editbox = this.popup.getComponentInChildren(EditBox);
        this._choices.forEach((btn, i) => {
            let _selectedOption = btn.getChildByName('Label');
            _selectedOption.getComponent(Label).string = this.optionLabel[i].toString();
            let str = _selectedOption.getComponent(Label).string;
            let hilight = btn.getChildByName('hilight');
            btn.on(Button.EventType.CLICK, async () => {
                if (this.popup.isVisible)
                    await this.popup.hide();
                this._choices.forEach((hil, j)=> { hil.getChildByName('hilight').active = false})
                hilight.active = true;
                this.label.string = str;
                editbox.string = str;
                if(this.button.getComponent(Sprite).enabled)
                    this.button.getComponent(Sprite).enabled = false;
            })
        })
       editbox.node.on('editing-did-ended', async ()=>{
        if (this.popup.isVisible)
            await this.popup.hide();
        this._choices.forEach((hil, j)=> { hil.getChildByName('hilight').active = false})
        this.label.string = editbox.string;
        if(this.button.getComponent(Sprite).enabled)
            this.button.getComponent(Sprite).enabled = false;
        })
    }
    private _addEventListeners() {
        this.button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
    }
    private _onButtonClick() {        
        this.popup.show();
    }
    get sentence() {
        return this.label.string;
    }
    set sentence(str) {
        this.label.string = str;
    }
    get question() {
        return this.questionLabel.string;
    }
    set question(str) {
        this.questionLabel.string = str;
    }
    set optionLabelString(str){
        this.optionLabel = str;
    }
}