import { Button, Component,ProgressBar,AudioSource, Node,tween, _decorator, Intersection2D, PolygonCollider2D, UITransform } from "cc";
import { AS } from "db://as_framework/scripts//ASComponent";
import { UIPopup } from "db://as_framework/scripts/UIPopup";
const { ccclass, property } = _decorator;

@ccclass('TapPop')
export class TapPop extends AS(Component) {
    @property(Button) polygonButton : Button | null = null;
    @property(UIPopup) popup : UIPopup | null = null;
    @property(ProgressBar) progressBar : ProgressBar | null = null;
    @property(AudioSource) audio : AudioSource | null = null;

    private _progressTween;

    
    awake(){
        this.polygonButton.node.on(Node.EventType.MOUSE_DOWN, (event)=> {
                this._pop(event);
            },this);

        this.popup.node.on(UIPopup.EventType.ABOUT_TO_HIDE, () => {
            if(this.progressBar != null){
                this._progressTween.stop();
                tween(this.progressBar).set({progress:0}).start();
            }
        })
        if(this.progressBar != null)
        {   let totalLength = this.progressBar.getComponent(UITransform).width;
            let duration = this.audio.duration;
            this._progressTween = tween(this.progressBar).set({progress:0, totalLength: totalLength}).to(duration, {progress: 1}).set({progress:0});
        }
    }
    private _pop(e){
        let worldPoints = this.polygonButton.node.getComponent(PolygonCollider2D).worldPoints;
        if(Intersection2D.pointInPolygon(e.getUILocation(), worldPoints))
            this.popup.show();         

    }
    private progressPlay(e){
        this._progressTween.start();
    }
}