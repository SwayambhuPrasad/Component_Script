import { _decorator, Component, Node, instantiate, Button, Label, Sprite, Prefab, Layout, Color} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('GuessTheWord')
export class GuessTheWord extends AS(Component) {

    @property(Layout) blankContainer : Layout | null = null;
    @property(Layout) optionContainer : Layout | null = null;
    @property(Prefab) blank : Prefab | null = null;
    @property(Prefab) option : Prefab | null = null;

    @property(Button) check : Button | null = null;
    @property(Button) clear : Button | null = null;
    @property correctWord = '';
    @property jumbledWord = '';

    private _iterator = 0;
    private _blanks : Node[] | null = [];
    private _options : Node[] | null = [];

    awake(){

        this.check.addComponent(ReplicatedButton);
        this.clear.addComponent(ReplicatedButton);

        for(let i = 0; i < this.correctWord.length; i++) {
            let newBlank = instantiate(this.blank);
            newBlank.parent = this.blankContainer.node;
            this._blanks.push(newBlank);
        }
        for(let i = 0; i < this.jumbledWord.length; i++) {
            let newOption = instantiate(this.option);
            newOption.parent = this.optionContainer.node;
            newOption.getComponentInChildren(Label).string = this.jumbledWord[i];
            newOption.addComponent(ReplicatedButton);
            this._options.push(newOption);
        }

        this._options.forEach((btn, i) => {
            btn.on(Button.EventType.CLICK, () => {
                this._select(btn);
            },this)
        })

        this.clear.node.on(Button.EventType.CLICK,this._clear,this);

        this.check.node.on(Button.EventType.CLICK,this._check,this)

    }

    private _select(btn){
        if(this._iterator < this.correctWord.length)
        {
            this._blanks[this._iterator].getComponentInChildren(Label).string = btn.getComponentInChildren(Label).string;
            btn.getComponent(Button).enabled = false;
            btn.getComponent(Sprite).color= new Color(255,255,255,180);
            this._iterator++;
        }
    }

    private _clear(){
        if(this._iterator > 0){
            this._iterator-- ;
            let temp = this._blanks[this._iterator].getComponentInChildren(Label).string;
            this._blanks[this._iterator].getComponentInChildren(Label).string = '';
            for(let i=0; i< this._options.length; i++)
            {
                if(temp == this._options[i].getComponentInChildren(Label).string)
                {
                    this._options[i].getComponent(Button).enabled = true;
                    this._options[i].getComponent(Sprite).color= new Color(255,255,255,255);
                    break;
                }
            }
        }
    }

    private _check(){
        let checkWord =''
        this._blanks.forEach((blanks, i) => {
            checkWord += blanks.getComponentInChildren(Label).string;
        })

        if(checkWord==this.correctWord)
        {   this.check.node.active = false;
            this.clear.enabled = false;
            this.clear.getComponent(Sprite).color= new Color(255,255,255,180);
            this._blanks.forEach((blanks, i) => {
                blanks.getComponent(Sprite).color= new Color(0,255,0,255);
            })
            this._options.forEach((btn, i) => {
                btn.getComponent(Button).enabled = false;
                btn.getComponent(Sprite).color= new Color(255,255,255,180);
            })
        }
        else
        {
            this._blanks.forEach((blanks, i) => {
                blanks.getComponent(Sprite).color= new Color(255,44,44,255);
            })
            this.scheduleOnce(this._clearAll, 0.5);

        }
    }

    private _clearAll(){
        this._iterator = 0;
        this._options.forEach((btn, i) => {
            btn.getComponent(Button).enabled = true;
            btn.getComponent(Sprite).color= new Color(255,255,255,255);
        })
        this._blanks.forEach((blanks, i) => {
            blanks.getComponentInChildren(Label).string = '';
            blanks.getComponent(Sprite).color= new Color(255,255,255,255);
        })
    }

}

