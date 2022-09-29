import { Button, Component,ProgressBar,AudioSource, Node,tween, _decorator, Intersection2D, PolygonCollider2D, UITransform } from "cc";
import { AS } from "db://as_framework/scripts//ASComponent";
const { ccclass, property } = _decorator;

@ccclass('AppletController')
export class AppletController extends AS(Component) {

    @property(Node) Screens:  Node[] | null = [];
    @property(Button) next : Button | null = null;
    @property(Button) back : Button | null = null;

    private q = 0;

    awake() {

       
        this._updateVisibility()

        this.next.node.on(Button.EventType.CLICK, this._next, this)
        this.back.node.on(Button.EventType.CLICK, this._back, this)

    }

    private _next()
    {
        this.Screens[this.q].active = false;
        this.q++;
        this._updateVisibility()

    }
    private _back()
    {
        this.Screens[this.q].active = false;
        this.q--;
        this._updateVisibility()
    }
    private _updateVisibility()
    {   
        this.Screens[this.q].active = true;
        if(this.q == 0)
            this.back.node.active = false;
        else
            this.back.node.active = true;
        if(this.q == this.Screens.length -1)
            this.next.node.active = false;
        else
            this.next.node.active = true;

    }
   
}

