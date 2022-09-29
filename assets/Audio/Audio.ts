import { _decorator, Component, Button, AudioSourceComponent, Node} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('Audio')
export class Audio extends AS(Component) {
    @property(Button) button: Button | null = null;
    @property(Node) audioSrc: Node | null = null;


    awake(){
        this.button.addComponent(ReplicatedButton);
        this._addEventListeners();

    }
    private _addEventListeners() {
        this.button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
    }
    private _onButtonClick() {        
        this.audioSrc.getComponent(AudioSourceComponent).stop();
        this.audioSrc.getComponent(AudioSourceComponent).play();
    }
    
    get audioclip(){
        return this.audioSrc.getComponent(AudioSourceComponent).clip;
    }

    set audioclip(clip){
        this.audioSrc.getComponent(AudioSourceComponent).clip = clip;
    }

}

