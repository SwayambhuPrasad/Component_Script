import {
  Camera,
  Component,
  EventHandler,
  EventTouch,
  Intersection2D,
  Mat4,
  Node,
  PolygonCollider2D,
  rect,
  UITransform,
  v2,
  v3,
  Vec2,
  Vec3,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { UIDrop } from "./UIDrop";
import { findParentCanvas } from "./Utils";

const { ccclass, property, disallowMultiple, requireComponent } = _decorator;

const matrixCached = new Mat4();
const worldMatrixCached = new Mat4();

@ccclass("UIDrag")
@disallowMultiple
@requireComponent(UITransform)
export class UIDrag extends AS(Component) {
  static readonly EventType = {
    DRAG_DID_BEGAN: "drag-did-began",
    DRAG_DID_END: "drag-did-ended",
    DRAG_MOVE: "drag-move",
    MOVE_COMPLETED: "move-completed",
  };

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when drag begins.",
    displayOrder: 30,
  })
  dragDidBeganEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when drag ends.",
    displayOrder: 31,
  })
  dragDidEndedEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when drag target position changes.",
    displayOrder: 32,
  })
  dragMoveEvents = new Array<EventHandler>();

  @property private _target: UITransform | null = null;

  @property private _enableResetPosition = true;

  @property private _usePolygonCollider = false;

  @property private _interactable = true;

  @property private _dragSpeed = 100;

  private _thisUITransform: UITransform | null = null;

  private _targetPosition: Vec3 = v3();

  private _previousTargetPosition: Vec3 = v3();

  private _validUIDrop: UIDrop | null | undefined = null;

  private _resetPosition: Vec3 = v3();

  private _lerpTime = 0;

  private _parentCanvas: UITransform | null = null;

  private _canvasCamera: Camera | null = null;

  private _collider: PolygonCollider2D | null = null;

  private _isBeginValid = false;

  private _actualParent: Node | null = null;

  private _isDragging = false;

  private _isMoving = false;

  @property get interactable() {
    return this._interactable;
  }

  @property get dragSpeed() {
    return this._dragSpeed;
  }

  @property({ tooltip: "Enable to reset position on mouse up if not inside a UIDrop." })
  get enableResetPosition() {
    return this._enableResetPosition;
  }

  @property({
    type: UITransform,
    tooltip:
      "The node to use as area for dragging. This drag will be limited to the bounds of the " +
      "target node. NOTE: Do not use a parent (or grandparents) of this drag as target!",
  })
  get target(): UITransform | null {
    return this._target;
  }

  @property get usePolygonCollider() {
    return this._usePolygonCollider;
  }

  get targetPosition() {
    return this._targetPosition;
  }

  get targetWorldPosition() {
    return this._parentCanvas!.convertToWorldSpaceAR(this._targetPosition);
  }

  get resetScreenPoint() {
    return this._resetPosition;
  }

  get resetWorldPosition() {
    return this._parentCanvas!.convertToWorldSpaceAR(this._resetPosition);
  }

  get validUIDrop() {
    return this.checkUIDrop();
  }

  get previousTargetPosition() {
    return this._previousTargetPosition;
  }

  get isMoving() {
    return this._isMoving;
  }

  get isDragging() {
    return this._isDragging;
  }

  set interactable(value) {
    if (this._interactable === value) return;
    this._interactable = value;

    if (this._interactable) this._addInputListeners();
    else this._removeInputListeners();
  }

  set dragSpeed(value: number) {
    this._dragSpeed = value;
  }

  set enableResetPosition(value) {
    this._enableResetPosition = value;
  }

  set target(value: UITransform | null) {
    this._target = value;
  }

  set usePolygonCollider(value) {
    this._usePolygonCollider = value;
  }

  set targetPosition(value: Vec3) {
    this._lerpTime = 0;
    this._previousTargetPosition.set(this._targetPosition);
    this._targetPosition.set(value);

    this._validUIDrop?.__removeDrag(this);
    this._validUIDrop = null;
  }

  set targetWorldPosition(value) {
    this._targetPosition = this._parentCanvas!.convertToNodeSpaceAR(value);
  }

  set resetScreenPoint(value: Vec3) {
    this._resetPosition.set(value);
  }

  set resetWorldPosition(value) {
    this._resetPosition = this._parentCanvas!.convertToNodeSpaceAR(value);
  }

  reset() {
    if (this._resetPosition) {
      this.forceSetPosition(this._parentCanvas!.convertToWorldSpaceAR(this._resetPosition));
    }

    this._validUIDrop?.__removeDrag(this);
    this._validUIDrop = null;
  }

  resetDrop() {
    this._validUIDrop?.__removeDrag(this);
    this._validUIDrop = null;
    if (this._resetPosition) {
      this._setTargetPositionInternal(this._resetPosition);
    }
  }

  forceSetPosition(worldPosition: Vec3) {
    if (worldPosition == null) return;
    this.targetPosition = this._parentCanvas!.convertToNodeSpaceAR(worldPosition);
    this.node.worldPosition = worldPosition;
    this._validUIDrop?.__removeDrag(this);
    this._validUIDrop = null;
  }

  checkUIDrop() {
    const targetWorldPosition = this._parentCanvas!.convertToWorldSpaceAR(this._targetPosition);
    this._checkUIDropInternal(v2(targetWorldPosition.x, targetWorldPosition.y));

    // If valid UI Drop doesn't allow multiple drag's in them, reset.
    return this._validUIDrop;
  }

  awake() {
    this._thisUITransform = this.getComponent(UITransform);

    const canvas = findParentCanvas(this.node);
    if (canvas == null) {
      error(`UIDrag: ${this.node.name} has no canvas parent.`);
      return;
    }

    this._canvasCamera = canvas.cameraComponent;
    this._parentCanvas = canvas.getComponent(UITransform);
    if (this.target == null) {
      this.target = this._parentCanvas;
    }
    this._collider = this.getComponent(PolygonCollider2D);

    const currentPositionInBounds = this._parentCanvas!.convertToNodeSpaceAR(
      this.node.worldPosition,
    );
    this.resetScreenPoint = this.targetPosition = currentPositionInBounds;
    this._previousTargetPosition.set(currentPositionInBounds);
  }

  onEnable() {
    if (this._interactable) this._addInputListeners();
    this.node.on(Node.EventType.PARENT_CHANGED, this._onParentChanged, this);
    this._onParentChanged();
  }

  onDisable() {
    this._removeInputListeners();
    this.node.off(Node.EventType.PARENT_CHANGED, this._onParentChanged, this);
  }

  update(dt: number) {
    let currPosition = this._parentCanvas!.convertToNodeSpaceAR(this.node.worldPosition);
    if (Vec3.equals(currPosition, this._targetPosition)) {
      if (this._isMoving) {
        this.node.emit(UIDrag.EventType.MOVE_COMPLETED, this);
        this._isMoving = false;
      }
      return;
    }
    this._lerpTime += this.dragSpeed * dt;
    if (this._lerpTime > 1) this._lerpTime = 1;
    currPosition = currPosition.lerp(this._targetPosition, this._lerpTime);
    this.node.worldPosition = this._parentCanvas!.convertToWorldSpaceAR(currPosition);
    this._isMoving = true;
  }

  private _addInputListeners() {
    this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  }

  private _removeInputListeners() {
    this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  }

  private _onParentChanged() {
    if (this._isDragging || this._actualParent === this.node.parent) return;
    this._actualParent?.off(Node.EventType.NODE_DESTROYED, this.node.destroy, this);
    this._actualParent = this.node.parent;
    // Ensure this is also destroyed when parent is destroyed.
    this._actualParent?.on(Node.EventType.NODE_DESTROYED, this.node.destroy, this);
  }

  private _onTouchStart(event: EventTouch) {
    if (this._canvasCamera == null || this._parentCanvas == null) return;
    const mouseWorld = this._canvasCamera.screenToWorld(
      v3(event.getLocationX(), event.getLocationY()),
    );
    if (this._usePolygonCollider && this._collider) {
      this._isBeginValid = Intersection2D.pointInPolygon(
        v2(mouseWorld.x, mouseWorld.y),
        this._collider.worldPoints,
      );
    } else {
      this._isBeginValid = true;
    }

    this._isDragging = true;
    this.node.parent = this._parentCanvas.node;
    EventHandler.emitEvents(this.dragDidBeganEvents, this);
    this.node.emit(UIDrag.EventType.DRAG_DID_BEGAN, this);
  }

  private _onTouchMove(event: EventTouch) {
    if (this._canvasCamera == null || !this._isBeginValid) return;
    // Convert mouse location from screen to world coords.
    const mouseWorld = this._canvasCamera.screenToWorld(
      v3(event.getLocationX(), event.getLocationY()),
    );

    // If outside target stop move.
    if (!this._getTargetBounds().contains(v2(mouseWorld.x, mouseWorld.y))) {
      return;
    }

    this._setTargetPositionInternal(this._parentCanvas!.convertToNodeSpaceAR(mouseWorld));
  }

  private _onTouchEnd(event: EventTouch) {
    if (!this._isBeginValid) return;
    if (this._canvasCamera != null) {
      // Convert mouse location from screen to world coords.
      const mouseWorld = this._canvasCamera.screenToWorld(
        v3(event.getLocationX(), event.getLocationY()),
      );

      // Check to see if inside any valid uidrop under target.
      this._checkUIDropInternal(v2(mouseWorld.x, mouseWorld.y));
    }

    if (this._validUIDrop != null && this._validUIDrop.enableSnap) {
      this._setTargetPositionInternal(
        this._parentCanvas!.convertToNodeSpaceAR(this._validUIDrop.node.worldPosition),
      );
    }

    if (this.enableResetPosition && this._validUIDrop == null) {
      this._setTargetPositionInternal(this._resetPosition);
    }

    this.node.parent = this._actualParent;
    this._isDragging = false;
    EventHandler.emitEvents(this.dragDidEndedEvents, this);
    this.node.emit(UIDrag.EventType.DRAG_DID_END, this);
  }

  private _checkUIDropInternal(touchLocation: Vec2) {
    if (!this._parentCanvas || !this.enabledInHierarchy) return;
    const oldUIDrop = this._validUIDrop;
    this._validUIDrop = this._parentCanvas
      .getComponentsInChildren(UIDrop)
      .find((uiDrop: UIDrop) => uiDrop.enabledInHierarchy && uiDrop.__isInside(touchLocation));

    // Check and see if valid if drop is circle type.
    if (
      this._thisUITransform &&
      this._validUIDrop &&
      this._validUIDrop.boundsType === UIDrop.BoundsType.CIRCLE
    ) {
      const radius = this._validUIDrop.circleRadius;
      const center = this._validUIDrop.node.worldPosition;
      const dragBounds = this._thisUITransform.getBoundingBoxToWorld();

      const distances = [
        Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMin, dragBounds.yMin)),
        Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMin, dragBounds.yMax)),
        Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMax, dragBounds.yMin)),
        Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMax, dragBounds.yMax)),
      ];

      if (distances.some((curr) => curr >= radius)) {
        // If any corner outside the circle radius set as invalid.
        this._validUIDrop = null;
      }
    }

    if (oldUIDrop !== this._validUIDrop) {
      oldUIDrop?.__removeDrag(this);
      if (!this._validUIDrop?.__addDrag(this)) this._validUIDrop = null;
    }
  }

  private _setTargetPositionInternal(position: Vec3) {
    this._previousTargetPosition.set(this._targetPosition);
    this._targetPosition.set(position);
    this._lerpTime = 0;
    EventHandler.emitEvents(this.dragMoveEvents, this);
    this.node.emit(UIDrag.EventType.DRAG_MOVE, this);
  }

  private _getTargetBounds() {
    if (this.target == null) return rect();
    Mat4.fromRTS(
      matrixCached,
      this.target.node.getRotation(),
      this.target.node.getPosition(),
      this.target.node.getScale(),
    );
    const width = this.target.contentSize.width;
    const height = this.target.contentSize.height;
    const localRect = rect(
      -this.target.anchorPoint.x * width,
      -this.target.anchorPoint.y * height,
      width,
      height,
    );
    this.target.node.parent?.getWorldMatrix(worldMatrixCached);
    Mat4.multiply(worldMatrixCached, worldMatrixCached, matrixCached);
    return localRect.transformMat4(worldMatrixCached);
  }
}
