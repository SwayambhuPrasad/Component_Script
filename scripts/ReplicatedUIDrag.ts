import { Component, EventHandler, v3, Vec3, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";
import { UIDrag } from "./UIDrag";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

/**
 * Class to automate replication of events for the `DragData` attached to
 * the same node using the `NetworkReplicator`.
 */
@ccclass("ReplicatedUIDrag")
@requireComponent(UIDrag)
@disallowMultiple
export class ReplicatedUIDrag extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _drag: UIDrag | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._drag = this.getComponent(UIDrag);
    // TODO: Add debounce.
    if (this._drag == null) {
      error("the replicated UIDrag must be attached to node with UIDrag component.");
      return;
    }
    this.node.on(UIDrag.EventType.DRAG_DID_BEGAN, this._onDragBegan, this);
    this.node.on(UIDrag.EventType.DRAG_DID_END, this._onDragEnded, this);
    this.node.on(UIDrag.EventType.DRAG_MOVE, this._onDragMove, this);
  }

  onActivityEvent(name: string, data?: { x: number; y: number }) {
    if (this._drag == null) return;
    switch (name) {
      case UIDrag.EventType.DRAG_DID_BEGAN: {
        this.node.emit(UIDrag.EventType.DRAG_DID_BEGAN, this._drag, true);
        EventHandler.emitEvents(this._drag.dragDidBeganEvents, this._drag);
        break;
      }
      case UIDrag.EventType.DRAG_DID_END: {
        this._drag.checkUIDrop();
        this.node.emit(UIDrag.EventType.DRAG_DID_END, this._drag, true);
        EventHandler.emitEvents(this._drag.dragDidEndedEvents, this._drag);
        break;
      }
      case UIDrag.EventType.DRAG_MOVE: {
        if (data == null) {
          error("The data recieved on drag-move cannot be null.");
          return;
        }
        this._drag.targetPosition = v3(data.x, data.y, 0);
        this.node.emit(UIDrag.EventType.DRAG_MOVE, this._drag, true);
        EventHandler.emitEvents(this._drag.dragMoveEvents, this._drag);
        break;
      }

      default:
        break;
    }
  }

  getStateData() {
    if (!this._drag?.targetPosition) return;
    const targetPosition = this._drag.targetPosition;
    return { x: targetPosition.x, y: targetPosition.y };
  }

  updateStateData(data: { x: number; y: number }) {
    if (!this._drag) return;
    // @ts-ignore
    const parentCanvas = this._drag._parentCanvas!;
    this._drag.forceSetPosition(parentCanvas.convertToWorldSpaceAR(v3(data.x, data.y, 0)));
    this.node.emit(UIDrag.EventType.DRAG_DID_BEGAN, this._drag, true);
    EventHandler.emitEvents(this._drag.dragDidBeganEvents, this._drag);
    this.node.emit(UIDrag.EventType.DRAG_MOVE, this._drag, true);
    EventHandler.emitEvents(this._drag.dragMoveEvents, this._drag);
    this.node.emit(UIDrag.EventType.DRAG_DID_END, this._drag, true);
    EventHandler.emitEvents(this._drag.dragDidEndedEvents, this._drag);
  }

  private _onDragBegan(_drag: UIDrag, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIDrag.EventType.DRAG_DID_BEGAN,
    });
  }

  private _onDragEnded(_drag: UIDrag, isReplicated?: boolean) {
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIDrag.EventType.DRAG_DID_END,
    });
  }

  private _onDragMove(drag: UIDrag, isReplicated?: boolean) {
    if (isReplicated) return;
    const delta = Vec3.subtract(v3(), drag.targetPosition, drag.previousTargetPosition);
    // throttle the event to avoid sending too many events.
    if (Vec3.lengthSqr(delta) < 0.1) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: UIDrag.EventType.DRAG_MOVE,
      data: {
        x: drag.targetPosition.x,
        y: drag.targetPosition.y,
      },
    });
  }
}
