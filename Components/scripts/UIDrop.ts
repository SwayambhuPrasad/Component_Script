import {
  Component,
  Enum,
  Intersection2D,
  PolygonCollider2D,
  UITransform,
  v2,
  v3,
  Vec2,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { error, warn } from "./Logger";
import { UIDrag } from "./UIDrag";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

enum BoundsType {
  RECT,
  CIRCLE,
}

enum DropBehaviour {
  ALLOW_MULTIPLE,
  ALLOW_SINGLE,
  REPLACE,
}

@ccclass("UIDrop")
@disallowMultiple
@requireComponent(UITransform)
export class UIDrop extends AS(Component) {
  static readonly EventType = {
    DRAG_ADDED: "drag-added",
    DRAG_REMOVED: "drag-removed",
  };

  static readonly BoundsType = BoundsType;

  static readonly DropBehaviour = DropBehaviour;

  @property private _enableSnap = true;

  @property private _boundsType = BoundsType.RECT;

  @property private _circleRadius = 0;

  @property private _behaviour = DropBehaviour.REPLACE;

  @property private _usePolygonCollider = false;

  protected _uiTransform: UITransform | null = null;

  protected _parentUiTransform: UITransform | null = null;

  protected _dragsInside = new Array<UIDrag>();

  private _collider: PolygonCollider2D | null = null;

  @property({ tooltip: "Enable if you want the valid drag data to snap to this node position." })
  get enableSnap() {
    return this._enableSnap;
  }

  @property({
    type: Enum(BoundsType),
    tooltip: "The shape of bounds to use.",
  })
  get boundsType() {
    return this._boundsType;
  }

  @property({
    tooltip:
      "The radius of the circle to use for bounds. If radius is greater than the UI Rect " +
      "bounds, it may not work.",
    visible(this: UIDrop) {
      return this.boundsType === BoundsType.CIRCLE;
    },
  })
  get circleRadius() {
    return this._circleRadius;
  }

  @property({ type: Enum(DropBehaviour) })
  get behaviour() {
    return this._behaviour;
  }

  @property get usePolygonCollider() {
    return this._usePolygonCollider;
  }

  get dragsInside() {
    return this._dragsInside;
  }

  set enableSnap(value) {
    this._enableSnap = value;
  }

  set boundsType(value) {
    this._boundsType = value;
  }

  set circleRadius(value) {
    this._circleRadius = value;
  }

  set behaviour(value) {
    this._behaviour = value;
  }

  set usePolygonCollider(value) {
    this._usePolygonCollider = value;
  }

  /**
   * @internal
   */
  __addDrag(drag: UIDrag) {
    switch (this.behaviour) {
      case DropBehaviour.ALLOW_MULTIPLE:
        break;
      case DropBehaviour.ALLOW_SINGLE:
        if (this._dragsInside.length > 0) return false;
        break;
      case DropBehaviour.REPLACE:
        this._dragsInside.forEach((dragInside) => drag !== dragInside && dragInside.resetDrop());
        this._dragsInside = [];
        break;

      default:
        error("Unkown Drop Behaviour!!");
        break;
    }

    this._dragsInside.push(drag);
    this.node.emit(UIDrop.EventType.DRAG_ADDED, this, drag);
    return true;
  }

  /**
   * @internal
   */
  __removeDrag(drag: UIDrag) {
    const index = this._dragsInside.indexOf(drag, 0);
    if (index > -1) {
      const removed = this._dragsInside.splice(index, 1);
      this.node.emit(UIDrop.EventType.DRAG_REMOVED, this, removed[0]);
    }
  }

  /**
   * @internal
   */
  __isInside(worldPoint: Vec2) {
    const localPoint = this._parentUiTransform!.convertToNodeSpaceAR(
      v3(worldPoint.x, worldPoint.y, 0),
    );
    let isInRect =
      this._uiTransform?.getBoundingBox().contains(v2(localPoint.x, localPoint.y)) ?? false;
    if (this.usePolygonCollider && this._collider)
      isInRect &&= Intersection2D.pointInPolygon(worldPoint, this._collider.worldPoints);
    return isInRect;
  }

  onLoad() {
    this._uiTransform = this.getComponent(UITransform);
    this._parentUiTransform = this.node.parent!.getComponent(UITransform);
    this._collider = this.getComponent(PolygonCollider2D);

    if (this.usePolygonCollider && !this._collider) warn("No polygon collider found!");
  }
}
