import { Component, Director, director, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";
import { SoftEditBox } from "./SoftEditBox";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

/**
 * Class to automate replication of events for the `SoftEditBox` attached to
 * the same node using the `NetworkReplicator`.
 *
 * Here only the `text-changed` event is replicated.
 * The begin and end events are used to prevent simultaneous editing.
 */
@ccclass("ReplicatedSoftEditBox")
@requireComponent(SoftEditBox)
@disallowMultiple
export class ReplicatedSoftEditBox extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _editBox: SoftEditBox | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    // TODO: Add debounce.
    this._editBox = this.getComponent(SoftEditBox);
    if (this._editBox == null) {
      error("The replicated soft edit box must be attached to a node with soft edit box.");
      return;
    }
    this.node.on(SoftEditBox.EventType.EDITING_DID_BEGAN, this._onEditingBegan, this);
    this.node.on(SoftEditBox.EventType.EDITING_DID_ENDED, this._onEditingEnded, this);
    this.node.on(SoftEditBox.EventType.TEXT_CHANGED, this._onTextChanged, this);
  }

  onActivityEvent(name: string, data?: string) {
    if (this._editBox == null) return;
    switch (name) {
      case SoftEditBox.EventType.EDITING_DID_BEGAN: {
        // Another user is editing this edit box. So disable in current
        // applet to avoid issues.
        // softEditBox.button.interactable = false;
        this._editBox.showEmptyKeypad();
        EventHandler.emitEvents(this._editBox.editingDidBeganEvents, this._editBox);
        this.node.emit(SoftEditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
        break;
      }

      case SoftEditBox.EventType.EDITING_DID_ENDED: {
        // Another user is done editing, enable it again.
        // softEditBox.button.interactable = true;
        this._editBox.hideKeypad();
        // HACK: Replication handled inside SoftEditBox
        break;
      }

      case SoftEditBox.EventType.TEXT_CHANGED: {
        if (data == null) {
          error("The recieved data on text-changed event cannot be null.");
          return;
        }
        // Update the edit box in current user applet.
        this._editBox.string = data;
        if (!this._editBox.isKeypadVisible || !this._editBox.isKeypadEmpty) {
          this._editBox.showEmptyKeypad();
        }
        EventHandler.emitEvents(this._editBox.textChangedEvents, this._editBox);
        this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this._editBox, true);
        break;
      }

      default:
        break;
    }
  }

  getStateData() {
    if (this._editBox == null) return;
    if (this._editBox.isKeypadVisible && !this._editBox.isKeypadEmpty) {
      // If the current edit box keypad is visible and not the empty keypad,
      // send a textchanged event at the begining of next frame to force proper sync of
      // the empty keypad popup, since on recieving text changed event the sync is done.
      director.once(Director.EVENT_BEGIN_FRAME, () => this._onTextChanged(this._editBox!));
    }
    return { string: this._editBox.string, isKeypadOpen: this._editBox.isKeypadVisible };
  }

  updateStateData(data: { string: string; isKeypadOpen: boolean }) {
    if (this._editBox == null) return;
    this._editBox.string = data.string;
    EventHandler.emitEvents(this._editBox.editingDidBeganEvents, this._editBox);
    this.node.emit(SoftEditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
    EventHandler.emitEvents(this._editBox.editingDidEndedEvents, this._editBox);
    this.node.emit(SoftEditBox.EventType.EDITING_DID_ENDED, this._editBox, true);
    EventHandler.emitEvents(this._editBox.textChangedEvents, this._editBox);
    this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this._editBox, true);
    if (data.isKeypadOpen) this._editBox!.showKeypad();
  }

  private _onEditingBegan(_editBox?: SoftEditBox, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: SoftEditBox.EventType.EDITING_DID_BEGAN,
    });
  }

  private _onEditingEnded(_editBox?: SoftEditBox, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: SoftEditBox.EventType.EDITING_DID_ENDED,
    });
  }

  private _onTextChanged(editBox: SoftEditBox, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: SoftEditBox.EventType.TEXT_CHANGED,
      data: editBox.string,
    });
  }
}
