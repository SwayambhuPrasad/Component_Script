import { Component, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { animController, AnimController, editorUtils, UIAnimationLibrary } from "./UIAnimLibrary";
const { ccclass, property } = _decorator;

@ccclass("UIAnim")
export class UIAnim extends AS(Component) {
  static readonly Animations = editorUtils.enumType;

  static readonly EventType = { ANIM_BEGIN: "anim-begin", ANIM_END: "anim-end" };

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger on anim start.",
    displayOrder: 30,
  })
  animBeginEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger on anim complete.",
    displayOrder: 31,
  })
  animEndEvents = new Array<EventHandler>();

  @property protected _anim: keyof typeof UIAnimationLibrary = "none";

  @property protected _duration: number = 1;

  @property protected _repeat: number = 0;

  @property protected _playOnLoad = false;

  protected _controller: AnimController | null = null;

  @property({ type: editorUtils.enumType, tooltip: "Choose animation." }) get anim() {
    return editorUtils.enumType[this._anim];
  }

  @property({ tooltip: "The animation duration." }) get duration() {
    return this._duration;
  }

  @property({
    tooltip: "The number of times to repeat. If -1 will repeat infinitely until stop is called.",
  })
  get repeat() {
    return this._repeat;
  }

  @property get playOnLoad() {
    return this._playOnLoad;
  }

  set anim(value) {
    this._anim = editorUtils.getName(value);
  }

  set duration(value) {
    this._duration = value;
  }

  set repeat(value) {
    this._repeat = value;
  }

  set playOnLoad(value) {
    this._playOnLoad = value;
  }

  async play() {
    if (this._isAnimating) return;

    this._controller = animController(this.node);
    this._isAnimating = true;
    this.node.emit(UIAnim.EventType.ANIM_BEGIN, this);
    EventHandler.emitEvents(this.animBeginEvents, this);
    const animFn = UIAnimationLibrary[this._anim];
    let count = 0;
    do {
      await animFn(this._controller, this._duration);
      count++;
      // NOTE: possible infinite loop!!
    } while (this.repeat === -1 || count <= this.repeat);

    this._isAnimating = false;
    this._controller = null;
    this.node.emit(UIAnim.EventType.ANIM_END, this);
    EventHandler.emitEvents(this.animEndEvents, this);
  }

  onEnable() {
    if (this.playOnLoad) this.play();
  }

  onDisable() {
    this.stop();
  }

  stop() {
    if (!this._isAnimating || this._controller == null) return;

    this._controller.stop();
  }
}
