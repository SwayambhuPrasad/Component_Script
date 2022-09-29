import { Component, EventHandler, Toggle, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";

const { ccclass, requireComponent, disallowMultiple } = _decorator;

@ccclass("ReplicatedToggle")
@requireComponent(Toggle)
@disallowMultiple
export class ReplicatedToggle extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _toggle: Toggle | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._toggle = this.getComponent(Toggle);
    if (this._toggle == null) {
      error("The replicated toggle must be attached to a node with toggle component.");
      return;
    }
    this.node.on(Toggle.EventType.CLICK, this._onClick, this);
  }

  onActivityEvent(name: string, data?: boolean): void {
    if (this._toggle == null || name !== Toggle.EventType.TOGGLE) return;
    if (data == null) {
      error("The data recieved on toggle event cannot be null.");
      return;
    }
    this.node.emit(Toggle.EventType.CLICK, this._toggle, true);
    EventHandler.emitEvents(this._toggle.clickEvents, this._toggle);
  }

  getStateData() {
    return this._toggle?.isChecked;
  }

  updateStateData(data: boolean) {
    if (this._toggle == null) return;
    this._toggle.setIsCheckedWithoutNotify(data);
    this.node.emit(Toggle.EventType.TOGGLE, this._toggle, true);
    EventHandler.emitEvents(this._toggle.checkEvents, this._toggle);
  }

  private _onClick(toggle: Toggle, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: Toggle.EventType.TOGGLE,
      data: toggle.isChecked,
    });
  }
}
