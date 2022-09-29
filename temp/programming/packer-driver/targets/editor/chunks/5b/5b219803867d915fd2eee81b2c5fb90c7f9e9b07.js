System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, Intersection2D, Mat4, Node, PolygonCollider2D, rect, UITransform, v2, v3, Vec2, Vec3, _decorator, AS, UIDrop, findParentCanvas, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _crd, ccclass, property, disallowMultiple, requireComponent, DRAG_SPEED, matrixCached, worldMatrixCached, UIDrag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "./UIDrop", _context.meta, extras);
  }

  function _reportPossibleCrUseOffindParentCanvas(extras) {
    _reporterNs.report("findParentCanvas", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Intersection2D = _cc.Intersection2D;
      Mat4 = _cc.Mat4;
      Node = _cc.Node;
      PolygonCollider2D = _cc.PolygonCollider2D;
      rect = _cc.rect;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrop = _unresolved_3.UIDrop;
    }, function (_unresolved_4) {
      findParentCanvas = _unresolved_4.findParentCanvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "721de2tEvtAZaxzOKOycKjO", "UIDrag", undefined);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);
      DRAG_SPEED = 200;
      matrixCached = new Mat4();
      worldMatrixCached = new Mat4();

      _export("UIDrag", UIDrag = (_dec = ccclass("UIDrag"), _dec2 = requireComponent(UITransform), _dec3 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when drag begins.",
        displayOrder: 30
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when drag ends.",
        displayOrder: 31
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when drag target position changes.",
        displayOrder: 32
      }), _dec6 = property({
        tooltip: "Enable to reset position on mouse up if not inside a UIDrop."
      }), _dec7 = property({
        type: UITransform,
        tooltip: "The node to use as area for dragging. This drag will be limited to the bounds of the " + "target node. NOTE: Do not use a parent (or grandparents) of this drag as target!"
      }), _dec(_class = disallowMultiple(_class = _dec2(_class = (_class2 = (_class3 = class UIDrag extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dragDidBeganEvents", _descriptor, this);

          _initializerDefineProperty(this, "dragDidEndedEvents", _descriptor2, this);

          _initializerDefineProperty(this, "dragMoveEvents", _descriptor3, this);

          _initializerDefineProperty(this, "_target", _descriptor4, this);

          _initializerDefineProperty(this, "_enableResetPosition", _descriptor5, this);

          _initializerDefineProperty(this, "_usePolygonCollider", _descriptor6, this);

          _initializerDefineProperty(this, "_interactable", _descriptor7, this);

          this._thisUITransform = null;
          this._targetPosition = v3();
          this._validUIDrop = null;
          this._resetPosition = v3();
          this._lerpTime = 0;
          this._parentCanvas = null;
          this._canvasCamera = null;
          this._collider = null;
          this._isBeginValid = false;
          this._actualParent = null;
          this._isDragging = false;
        }

        get interactable() {
          return this._interactable;
        }

        get enableResetPosition() {
          return this._enableResetPosition;
        }

        get target() {
          return this._target;
        }

        get usePolygonCollider() {
          return this._usePolygonCollider;
        }

        get targetPosition() {
          return this._targetPosition;
        }

        get resetScreenPoint() {
          return this._resetPosition;
        }

        get validUIDrop() {
          return this.checkUIDrop();
        }

        set interactable(value) {
          if (this._interactable === value) return;
          this._interactable = value;
          if (this._interactable) this._addInputListeners();else this._removeInputListeners();
        }

        set enableResetPosition(value) {
          this._enableResetPosition = value;
        }

        set target(value) {
          this._target = value;
        }

        set usePolygonCollider(value) {
          this._usePolygonCollider = value;
        }

        set targetPosition(value) {
          var _this$_validUIDrop;

          this._lerpTime = 0;
          this._targetPosition = value;
          (_this$_validUIDrop = this._validUIDrop) == null ? void 0 : _this$_validUIDrop.__removeDrag(this);
          this._validUIDrop = null;
        }

        set resetScreenPoint(value) {
          this._resetPosition = value;
        }

        reset() {
          var _this$_validUIDrop2;

          if (this._resetPosition) {
            this.forceSetPosition(this._resetPosition);
          }

          (_this$_validUIDrop2 = this._validUIDrop) == null ? void 0 : _this$_validUIDrop2.__removeDrag(this);
          this._validUIDrop = null;
        }

        resetDrop() {
          var _this$_validUIDrop3;

          (_this$_validUIDrop3 = this._validUIDrop) == null ? void 0 : _this$_validUIDrop3.__removeDrag(this);
          this._validUIDrop = null;

          if (this._resetPosition) {
            this._setTargetPositionInternal(this._resetPosition);
          }
        }

        forceSetPosition(position) {
          var _this$_validUIDrop4;

          if (position == null) return;
          this._targetPosition = position;
          this.node.worldPosition = position;
          (_this$_validUIDrop4 = this._validUIDrop) == null ? void 0 : _this$_validUIDrop4.__removeDrag(this);
          this._validUIDrop = null;
        }

        checkUIDrop() {
          this._checkUIDropInternal(v2(this.targetPosition.x, this.targetPosition.y)); // If valid UI Drop doesn't allow multiple drag's in them, reset.


          return this._validUIDrop;
        }

        onLoad() {
          this._thisUITransform = this.getComponent(UITransform);
          this._parentCanvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(this.node);
          if (this._parentCanvas == null) return;
          this._canvasCamera = this._parentCanvas.cameraComponent;

          if (this.target == null) {
            this.target = this._parentCanvas.getComponent(UITransform);
          }

          this._collider = this.getComponent(PolygonCollider2D);
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

        update(dt) {
          const currPosition = this.node.worldPosition;
          if (Vec3.equals(currPosition, this._targetPosition)) return;
          this._lerpTime += DRAG_SPEED * dt;
          if (this._lerpTime > 1) this._lerpTime = 1;
          this.node.worldPosition = currPosition.lerp(this._targetPosition, this._lerpTime);
        }

        awake() {
          // At awake set the target to current position.
          this._targetPosition = this.node.worldPosition.clone();
          this._resetPosition = this.node.worldPosition.clone();
        }

        _addInputListeners() {
          this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        }

        _removeInputListeners() {
          this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        }

        _onParentChanged() {
          if (this._isDragging) return;
          this._actualParent = this.node.parent;
        }

        _onTouchStart(event) {
          if (this._canvasCamera == null || this._parentCanvas == null) return;

          const mouseWorld = this._canvasCamera.screenToWorld(v3(event.getLocationX(), event.getLocationY()));

          if (this._usePolygonCollider && this._collider) {
            this._isBeginValid = Intersection2D.pointInPolygon(v2(mouseWorld.x, mouseWorld.y), this._collider.worldPoints);
          } else {
            this._isBeginValid = true;
          }

          this._isDragging = true;
          this.node.parent = this._parentCanvas.node;
          EventHandler.emitEvents(this.dragDidBeganEvents, this);
          this.node.emit(UIDrag.EventType.DRAG_DID_BEGAN, this);
        }

        _onTouchMove(event) {
          if (this._canvasCamera == null || !this._isBeginValid) return; // Convert mouse location from screen to world coords.

          const mouseWorld = this._canvasCamera.screenToWorld(v3(event.getLocationX(), event.getLocationY())); // If outside target stop move.


          if (!this._getTargetBounds().contains(v2(mouseWorld.x, mouseWorld.y))) {
            return;
          }

          this._setTargetPositionInternal(mouseWorld);
        }

        _onTouchEnd(event) {
          if (!this._isBeginValid) return;

          if (this._canvasCamera != null) {
            // Convert mouse location from screen to world coords.
            const mouseWorld = this._canvasCamera.screenToWorld(v3(event.getLocationX(), event.getLocationY())); // Check to see if inside any valid uidrop under target.


            this._checkUIDropInternal(v2(mouseWorld.x, mouseWorld.y));
          }

          if (this._validUIDrop != null && this._validUIDrop.enableSnap) {
            this._setTargetPositionInternal(this._validUIDrop.node.worldPosition);
          }

          if (this.enableResetPosition && this._validUIDrop == null) {
            this._setTargetPositionInternal(this._resetPosition);
          }

          this.node.parent = this._actualParent;
          this._isDragging = false;
          EventHandler.emitEvents(this.dragDidEndedEvents, this);
          this.node.emit(UIDrag.EventType.DRAG_DID_END, this);
        }

        _checkUIDropInternal(touchLocation) {
          if (!this._parentCanvas || !this.enabledInHierarchy) return;
          const oldUIDrop = this._validUIDrop;
          this._validUIDrop = this._parentCanvas.getComponentsInChildren(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
            error: Error()
          }), UIDrop) : UIDrop).find(uiDrop => uiDrop.enabledInHierarchy && uiDrop.__isInside(touchLocation)); // Check and see if valid if drop is circle type.

          if (this._thisUITransform && this._validUIDrop && this._validUIDrop.boundsType === (_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
            error: Error()
          }), UIDrop) : UIDrop).BoundsType.CIRCLE) {
            const radius = this._validUIDrop.circleRadius;
            const center = this._validUIDrop.node.worldPosition;

            const dragBounds = this._thisUITransform.getBoundingBoxToWorld();

            const distances = [Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMin, dragBounds.yMin)), Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMin, dragBounds.yMax)), Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMax, dragBounds.yMin)), Vec2.distance(v2(center.x, center.y), v2(dragBounds.xMax, dragBounds.yMax))];

            if (distances.some(curr => curr >= radius)) {
              // If any corner outside the circle radius set as invalid.
              this._validUIDrop = null;
            }
          }

          if (oldUIDrop !== this._validUIDrop) {
            var _this$_validUIDrop5;

            oldUIDrop == null ? void 0 : oldUIDrop.__removeDrag(this);
            if (!((_this$_validUIDrop5 = this._validUIDrop) != null && _this$_validUIDrop5.__addDrag(this))) this._validUIDrop = null;
          }
        }

        _setTargetPositionInternal(position) {
          this._targetPosition = position;
          this._lerpTime = 0;
          EventHandler.emitEvents(this.dragMoveEvents, this);
          this.node.emit(UIDrag.EventType.DRAG_MOVE, this);
        }

        _getTargetBounds() {
          var _this$target$node$par;

          if (this.target == null) return rect();
          Mat4.fromRTS(matrixCached, this.target.node.getRotation(), this.target.node.getPosition(), this.target.node.getScale());
          const width = this.target.contentSize.width;
          const height = this.target.contentSize.height;
          const localRect = rect(-this.target.anchorPoint.x * width, -this.target.anchorPoint.y * height, width, height);
          (_this$target$node$par = this.target.node.parent) == null ? void 0 : _this$target$node$par.getWorldMatrix(worldMatrixCached);
          Mat4.multiply(worldMatrixCached, worldMatrixCached, matrixCached);
          return localRect.transformMat4(worldMatrixCached);
        }

      }, _class3.EventType = {
        DRAG_DID_BEGAN: "drag-did-began",
        DRAG_DID_END: "drag-did-ended",
        DRAG_MOVE: "drag-move"
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dragDidBeganEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dragDidEndedEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragMoveEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_target", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_enableResetPosition", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_usePolygonCollider", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_interactable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "interactable", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "interactable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableResetPosition", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "enableResetPosition"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "target", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "usePolygonCollider", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "usePolygonCollider"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b219803867d915fd2eee81b2c5fb90c7f9e9b07.js.map