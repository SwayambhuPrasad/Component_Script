import { Layout, Node, TransformBit, UITransform, v2, _decorator } from "cc";
import { error } from "./Logger";
import { UIDrag } from "./UIDrag";
import { UIDrop } from "./UIDrop";
import { intersectionPercent } from "./Utils";
const { ccclass, property } = _decorator;

@ccclass("UIDragSort")
export class UIDragSort extends UIDrop {
  @property private _container: Layout | null = null;

  private _shadowMap = new Map<UIDrag, Node>();

  @property(Layout) get container() {
    return this._container;
  }

  @property({ override: true, visible: false })
  get enableSnap() {
    return false;
  }

  @property({ override: true, visible: false })
  get behaviour() {
    return UIDragSort.DropBehaviour.ALLOW_MULTIPLE;
  }

  set container(value) {
    this._container = value;
  }

  onEnable() {
    this._addEventListeners();
  }

  onDisable() {
    this._removeEventListeners();
  }

  updateShadow(drag: UIDrag) {
    let shadow: Node;
    if (this._shadowMap.has(drag)) {
      shadow = this._shadowMap.get(drag)!;
    } else {
      shadow = new Node(drag.node.name + "-shadow");
      shadow.layer = drag.node.layer;
      const shadowUI = shadow.addComponent(UITransform);
      const dragUI = drag.getComponent(UITransform);
      shadowUI.width = dragUI!.width;
      shadowUI.height = dragUI!.height;
      shadowUI.setAnchorPoint(dragUI!.anchorPoint);

      this.container!.node.addChild(shadow);
      this.container!.updateLayout();

      this._shadowMap.set(drag, shadow);
      shadow.on(Node.EventType.TRANSFORM_CHANGED, (type: number) => {
        if (type & TransformBit.POSITION) {
          drag.targetWorldPosition = shadow.worldPosition;
        }
      });
      shadow.on(Node.EventType.NODE_DESTROYED, () => {
        drag.reset();
      });
    }

    return shadow;
  }

  __addDrag(drag: UIDrag) {
    this._dragsInside.push(drag);
    const shadow = this.updateShadow(drag);
    if (shadow == null) return false;
    return true;
  }

  __removeDrag(drag: UIDrag) {
    super.__removeDrag(drag);
    const shadow = this._shadowMap.get(drag)!;
    this._shadowMap.delete(drag);
    shadow.destroy();
  }

  onLoad() {
    super.onLoad();
    if (!this.container) {
      error(`UIDragSort: Requires a valid Layout container to be assigned.`);
      return null;
    }
  }

  private _addEventListeners() {
    for (const child of this.node.children) {
      const drag = child.getComponent(UIDrag);
      if (drag) {
        child.on(UIDrag.EventType.DRAG_MOVE, this._onRegisteredDragUpdate, this);
        child.on(UIDrag.EventType.DRAG_DID_END, this._onRegisteredDragUpdate, this);
      }
    }
  }

  private _removeEventListeners() {
    for (const child of this.node.children) {
      const drag = child.getComponent(UIDrag);
      if (drag) {
        child.off(UIDrag.EventType.DRAG_MOVE, this._onRegisteredDragUpdate, this);
        child.off(UIDrag.EventType.DRAG_DID_END, this._onRegisteredDragUpdate, this);
      }
    }
  }

  private _onRegisteredDragUpdate(drag: UIDrag) {
    if (
      !this._shadowMap.has(drag) &&
      this.__isInside(v2(drag.targetWorldPosition.x, drag.targetWorldPosition.y))
    ) {
      this.updateShadow(drag);
    }

    const currentShadow = this._shadowMap.get(drag)!;

    const dragUITransform = drag.getComponent(UITransform)!;
    const bounds = dragUITransform.getBoundingBoxToWorld();
    for (const [otherDrag, shadow] of this._shadowMap.entries()) {
      if (otherDrag && otherDrag !== drag) {
        const shadowUITransform = shadow.getComponent(UITransform)!;
        const shadowBounds = shadowUITransform.getBoundingBoxToWorld();
        if (intersectionPercent(bounds, shadowBounds) > 0.5) {
          // rearrange the shadows by placing current at the overlapped.
          currentShadow.setSiblingIndex(shadow.getSiblingIndex());
          this.container!.updateLayout();
          break;
        }
      }
    }

    for (const [d, shadow] of this._shadowMap.entries()) {
      if (!d.isDragging) d.targetWorldPosition = shadow.worldPosition;
    }
  }
}
