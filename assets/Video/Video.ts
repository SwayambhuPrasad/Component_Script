import { _decorator, Component, Button, VideoPlayer, Node} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
const { ccclass, property } = _decorator;

@ccclass('Video')
export class Video extends AS(Component) {
    @property(Button) button: Button | null = null;
    @property(Node) videoPlayer: Node | null = null;
    @property(Boolean) buttonVisible: Boolean = true;
    @property(Boolean) autoPlay: Boolean = false;
    awake(){

        if(this.buttonVisible) {
            this.button.addComponent(ReplicatedButton);
            this._addEventListeners();
        }
        else{
            this.button.node.parent.active = false;
            this.autoPlay = true;
            this.videoPlayer.getComponent(VideoPlayer).loop = true;
        }
        if(this.autoPlay && this.node.active)
        {   this._onButtonClick();
        }
    }
    private _addEventListeners() {
        this.button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
    }
    private _onButtonClick() {        
        this.schedule(function () { this.videoPlayer.getComponent(VideoPlayer).play() }, 0.5);

    }
    
    get videoClip(){
        return this.videoPlayer.getComponent(VideoPlayer).clip;
    }

    set videoClip(clip){
        this.videoPlayer.getComponent(VideoPlayer).clip = clip;
    }

}

