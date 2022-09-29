import { _decorator, Component, Node, instantiate, Button, Sprite, Prefab, Layout, Color, SpriteFrame} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('SelectAndMatch')
export class SelectAndMatch extends AS(Component) {
    @property(Layout) objectContainer : Layout | null = null;
    @property(Prefab) matchOption : Prefab | null = null;
    @property(Node) check : Node | null = null;
    @property(Node) reset : Node | null = null;
    @property(Node) next : Node | null = null;
    @property(Node) thatsRight : Node | null = null;
    @property(SpriteFrame) options :SpriteFrame[] | null = [];
    @property(SpriteFrame) hil :SpriteFrame | null = null;
    @property answer = '';

    private _correctAns = [];
    private _options : Node[] | null = [];
    private _store = [];
    private _completedSet = [];
    private _greenColor = new Color(107,207,107,255);
    private _redColor = new Color(250,75,75,255);
    private _whiteColor = new Color(255,255,255,255);
    private _transparent = new Color(255,255,255,0);
    private _completedMatches = 0;
    awake(){

        this.check.addComponent(ReplicatedButton);
        this.reset.addComponent(ReplicatedButton);
        this.next.addComponent(ReplicatedButton);

        for(let i=0; i < this.answer.length; i++)
        {
            this._correctAns[i] = this.answer.charAt(i);
            console.log(this._correctAns[i])
            let newOption = instantiate(this.matchOption);
            newOption.getComponent(Sprite).spriteFrame = this.options[i];
            newOption.children[0].getComponent(Sprite).spriteFrame = this.hil;
            newOption.parent = this.objectContainer.node;
            newOption.addComponent(ReplicatedButton);
            this._options.push(newOption);
        }

        for(let i = 0; i < this._correctAns.length/2; i++)
            this._completedSet.push(false);

        this._options.forEach((btn, i) => {
            btn.on(Button.EventType.CLICK, ()=>{
                this._optionSelect(btn,i);        
            },this)
        })

        this.check.on(Button.EventType.CLICK,this._check,this)
        
        this.next.on(Button.EventType.CLICK,this._matchNext,this)

        this.reset.on(Button.EventType.CLICK,this._reset,this)
    }

    private _optionSelect(btn,i){
        this._hilight(btn, true);
        switch(this._store.length){
            case 0:
                this._store.push(i);
                break;
            case 1:
                if(i != this._store[0]){
                    this._store.push(i);
                    this.check.active = true;
                }
                break;
            case 2:
                if(i != this._store[0] && i != this._store[1]){
                    this._hilight(this._options[this._store[0]], false);
                    this._hilight(this._options[this._store[1]], false);
                    this._store = [];
                    this.check.active = false;
                    this._store.push(i);
                }
                break;
        }
    }
    private _hilight(btn, state){
        btn.children[0].active = state;
    }
    private _check(){
        let correctCheck = false;
        for(let i=0; i<this._correctAns.length; i=i+2)
        {   if((this._store[0] == this._correctAns[i] || this._store[0] == this._correctAns[i+1]) && (this._store[1] == this._correctAns[i] || this._store[1] == this._correctAns[i+1])){
                this._completedSet[i/2] = true;
                this._correctMatch();
                correctCheck = true;
                break;
            }
        }
        if(!correctCheck){
            this._colorFeedback(this._options[this._store[0]], this._redColor)
            this._colorFeedback(this._options[this._store[1]], this._redColor)
            this.scheduleOnce(this._resetToNormal, 1)
        }
    }

    private _resetToNormal(){
        if(this._store.length > 0){
        this._colorFeedback(this._options[this._store[0]], this._whiteColor)
        this._colorFeedback(this._options[this._store[1]], this._whiteColor)
        }
    }

    private _correctMatch(){
        this._options.forEach((btn,i)=>{
            btn.getComponent(Button).interactable = false;
        })
        this._colorFeedback(this._options[this._store[0]], this._greenColor);
        this._colorFeedback(this._options[this._store[1]], this._greenColor);
        this._hilight(this._options[this._store[0]], false);
        this._hilight(this._options[this._store[1]], false);
        this._store = [];
        this._completedMatches++;
        this.check.active = false;
        this.thatsRight.active = true;
        if(this._completedMatches < this._correctAns.length/2)
            this.next.active = true;
    }

    private _colorFeedback(btn, color){
        btn.getComponent(Sprite).color = color;
    }

    private _matchNext(){
        this._options.forEach((btn,i)=>{
            btn.getComponent(Button).interactable = true;
        })
        this.next.active = false;
        this.thatsRight.active = false;
        for (let i = 0; i < this._correctAns.length; i=i+2) {
            if (this._completedSet[i/2]) {
                this._options[this._correctAns[i]].getComponent(Button).interactable = false;
                this._options[this._correctAns[i+1]].getComponent(Button).interactable = false;
                this._colorFeedback(this._options[this._correctAns[i]],this._transparent)
                this._colorFeedback(this._options[this._correctAns[i+1]],this._transparent)
            }
        }
    }
    private _reset(){
        this._options.forEach((btn,i)=>{
            btn.getComponent(Button).interactable = true;
            this._hilight(btn, false)
            this._colorFeedback(btn, this._whiteColor)
        })
        this._completedMatches = 0;
        this._store = [];
        this.next.active = false;
        this.check.active = false;
        this.thatsRight.active = false;
        for (let i = 0; i < this._correctAns.length/2; i++) 
            this._completedSet[i] = false;
    }
}