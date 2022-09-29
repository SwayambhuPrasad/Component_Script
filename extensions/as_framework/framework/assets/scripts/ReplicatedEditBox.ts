import { Component, EditBox, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

/**
 * Class to automate replication of events for the `EditBox` attached to
 * the same node using the `NetworkReplicator`.
 *
 * Here only the `text-changed` event is replicated.
 * The begin and end events are used to prevent simultaneous editing.
 */
@ccclass("ReplicatedEditBox")
@requireComponent(EditBox)
@disallowMultiple
export class ReplicatedEditBox extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _editBox: EditBox | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._editBox = this.getComponent(EditBox);
    // TODO: Add debounce.
    if (this._editBox == null) {
      error("The replicated edit box must be attached to a node with edit box.");
      return;
    }
    this.node.on(EditBox.EventType.EDITING_DID_BEGAN, this._onEditingBegan, this);
    this.node.on(EditBox.EventType.EDITING_DID_ENDED, this._onEditingEnded, this);
    this.node.on(EditBox.EventType.TEXT_CHANGED, this._onTextChanged, this);
  }

  onActivityEvent(name: string, data?: string) {
    if (this._editBox == null) return;
    switch (name) {
      case EditBox.EventType.EDITING_DID_BEGAN: {
        EventHandler.emitEvents(this._editBox.editingDidBegan, this._editBox);
        this.node.emit(EditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
        break;
      }

      case EditBox.EventType.EDITING_DID_ENDED: {
        EventHandler.emitEvents(this._editBox.editingDidEnded, this._editBox);
        this.node.emit(EditBox.EventType.EDITING_DID_ENDED, this._editBox, true);
        break;
      }

      case EditBox.EventType.TEXT_CHANGED: {
        // Update the edit box in current user applet.
        if (data == null) {
          error("The data recieved on text-changed event cannot be null.");
          return;
        }
        this._editBox.string = data;
        EventHandler.emitEvents(this._editBox.textChanged, this._editBox);
        this.node.emit(EditBox.EventType.TEXT_CHANGED, this._editBox, true);
        break;
      }

      default:
        break;
    }
  }

  getStateData() {
    return this._editBox?.string;
  }

  updateStateData(data: string) {
    if (this._editBox == null) return;
    this._editBox.string = data;
    EventHandler.emitEvents(this._editBox.editingDidBegan, this._editBox);
    this.node.emit(EditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
    EventHandler.emitEvents(this._editBox.textChanged, this._editBox);
    this.node.emit(EditBox.EventType.TEXT_CHANGED, this._editBox, true);
    EventHandler.emitEvents(this._editBox.editingDidEnded, this._editBox);
    this.node.emit(EditBox.EventType.EDITING_DID_ENDED, this._editBox, true);
  }

  private _onEditingBegan(_editBox: EditBox, isReplicated?: boolean) {
    if (isReplicated || _editBox == null) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: EditBox.EventType.EDITING_DID_BEGAN,
    });
  }

  private _onEditingEnded(_editBox: EditBox, isReplicated?: boolean) {
    if (isReplicated || _editBox == null) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: EditBox.EventType.EDITING_DID_ENDED,
    });
  }

  private _onTextChanged(editBox: EditBox, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: EditBox.EventType.TEXT_CHANGED,
      data: editBox.string,
    });
  }
}
