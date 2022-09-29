import { Component, EventHandler, Slider, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

const SLIDE = "slide";

@ccclass("ReplicatedSlider")
@requireComponent(Slider)
@disallowMultiple
export class ReplicatedSlider extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _slider: Slider | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._slider = this.getComponent(Slider);
    if (this._slider == null) {
      error("The replicated slider must be attached to a node with slider component.");
      return;
    }
    this.node.on(SLIDE, this._onSlide, this);
  }

  onActivityEvent(name: string, data?: number): void {
    if (this._slider == null || name !== SLIDE) return;
    if (data == null) {
      error("The recieved data on slide event cannot be null.");
      return;
    }
    this._slider.progress = data;
    EventHandler.emitEvents(this._slider.slideEvents, this._slider);
    this.node.emit(SLIDE, this._slider, true);
  }

  getStateData() {
    return this._slider?.progress;
  }

  updateStateData(data: number) {
    if (this._slider == null) return;
    this._slider.progress = data;
    EventHandler.emitEvents(this._slider.slideEvents, this._slider);
    this.node.emit(SLIDE, this._slider, true);
  }

  private _onSlide(slider: Slider, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: SLIDE,
      data: slider.progress,
    });
  }
}
