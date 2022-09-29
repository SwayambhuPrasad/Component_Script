import { Component, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";
import { UIPopup } from "./UIPopup";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

@ccclass("ReplicatedUIPopup")
@requireComponent(UIPopup)
@disallowMultiple
export class ReplicatedUIPopup extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _popup: UIPopup | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._popup = this.getComponent(UIPopup);
    if (this._popup == null) {
      error("The replicated popup must be attached to a node with popup.");
      return;
    }

    this.node.on(UIPopup.EventType.ABOUT_TO_HIDE, this._onAboutToHide, this);
    this.node.on(UIPopup.EventType.HIDE_COMPLETE, this._onHideComplete, this);
    this.node.on(UIPopup.EventType.ABOUT_TO_SHOW, this._onAboutToShow, this);
    this.node.on(UIPopup.EventType.SHOW_COMPLETE, this._onShowComplete, this);
  }

  onActivityEvent(name: string, data?: any): void {
    if (this._popup == null) return;
    switch (name) {
      case UIPopup.EventType.ABOUT_TO_HIDE: {
        EventHandler.emitEvents(this._popup.aboutToHideEvents, this._popup);
        this.node.emit(UIPopup.EventType.ABOUT_TO_HIDE, this._popup, true);
        break;
      }

      case UIPopup.EventType.HIDE_COMPLETE: {
        EventHandler.emitEvents(this._popup.hideCompleteEvents, this._popup);
        this.node.emit(UIPopup.EventType.HIDE_COMPLETE, this._popup, true);
        break;
      }

      case UIPopup.EventType.ABOUT_TO_SHOW: {
        EventHandler.emitEvents(this._popup.aboutToShowEvents, this._popup);
        this.node.emit(UIPopup.EventType.ABOUT_TO_SHOW, this._popup, true);
        break;
      }

      case UIPopup.EventType.SHOW_COMPLETE: {
        EventHandler.emitEvents(this._popup.showCompleteEvents, this._popup);
        this.node.emit(UIPopup.EventType.SHOW_COMPLETE, this._popup, true);
        break;
      }

      default:
        break;
    }
  }

  getStateData() {
    return this._popup?.isVisible;
  }

  updateStateData(data: boolean) {
    if (this._popup == null) return;
    if (data) {
      this._popup.show();
    } else {
      this._popup.hide();
    }
  }

  private _onAboutToHide(popup: UIPopup, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIPopup.EventType.ABOUT_TO_HIDE,
    });
  }

  private _onHideComplete(popup: UIPopup, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIPopup.EventType.HIDE_COMPLETE,
    });
  }

  private _onAboutToShow(popup: UIPopup, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIPopup.EventType.ABOUT_TO_SHOW,
    });
  }

  private _onShowComplete(popup: UIPopup, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIPopup.EventType.SHOW_COMPLETE,
    });
  }
}
