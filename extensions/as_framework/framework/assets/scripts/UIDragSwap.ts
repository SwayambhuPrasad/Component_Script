import { Component, UITransform, _decorator } from "cc";
import { AS } from "./ASComponent";
import { UIDrag } from "./UIDrag";
import { intersectionPercent } from "./Utils";
const { ccclass, property } = _decorator;

@ccclass("UIDragSwap")
export class UIDragSwap extends AS(Component) {
  onEnable() {
    this._addEventListeners();
  }

  onDisable() {
    this._removeEventListeners();
  }

  private _addEventListeners() {
    for (const child of this.node.children) {
      const drag = child.getComponent(UIDrag);
      if (drag) {
        child.on(UIDrag.EventType.DRAG_MOVE, this._validateAndDoSwap, this);
        child.on(UIDrag.EventType.DRAG_DID_END, this._validateAndDoSwap, this);
      }
    }
  }

  private _removeEventListeners() {
    for (const child of this.node.children) {
      const drag = child.getComponent(UIDrag);
      if (drag) {
        child.off(UIDrag.EventType.DRAG_MOVE, this._validateAndDoSwap, this);
        child.off(UIDrag.EventType.DRAG_DID_END, this._validateAndDoSwap, this);
      }
    }
  }

  private _validateAndDoSwap(drag: UIDrag) {
    const dragUITransform = drag.getComponent(UITransform)!;
    const bounds = dragUITransform.getBoundingBoxToWorld();
    for (const child of this.node.children) {
      const otherDrag = child.getComponent(UIDrag);
      if (otherDrag && otherDrag !== drag) {
        if (otherDrag.isMoving) continue;
        const otherDragUITransform = otherDrag.getComponent(UITransform)!;
        const otherBounds = otherDragUITransform.getBoundingBoxToWorld();
        if (intersectionPercent(bounds, otherBounds) > 0.5) {
          // swap reset position of drags
          const otherResetPosition = otherDrag.resetScreenPoint.clone();
          otherDrag.resetScreenPoint = drag.resetScreenPoint.clone();
          otherDrag.targetPosition = drag.resetScreenPoint.clone();
          drag.resetScreenPoint = otherResetPosition;
          // drag.targetPosition = otherResetPosition;
          break;
        }
      }
    }
  }
}
