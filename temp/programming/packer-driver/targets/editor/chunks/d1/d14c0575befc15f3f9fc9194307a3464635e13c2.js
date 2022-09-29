System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Layout, Node, TransformBit, UITransform, v2, _decorator, error, UIDrag, UIDrop, intersectionPercent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _crd, ccclass, property, UIDragSort;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "./UIDrag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "./UIDrop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfintersectionPercent(extras) {
    _reporterNs.report("intersectionPercent", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Layout = _cc.Layout;
      Node = _cc.Node;
      TransformBit = _cc.TransformBit;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
    }, function (_unresolved_4) {
      UIDrop = _unresolved_4.UIDrop;
    }, function (_unresolved_5) {
      intersectionPercent = _unresolved_5.intersectionPercent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70dccYToYRKGI716kMagugJ", "UIDragSort", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIDragSort", UIDragSort = (_dec = ccclass("UIDragSort"), _dec2 = property(Layout), _dec3 = property({
        override: true,
        visible: false
      }), _dec4 = property({
        override: true,
        visible: false
      }), _dec(_class = (_class2 = class UIDragSort extends (_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
        error: Error()
      }), UIDrop) : UIDrop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_container", _descriptor, this);

          this._shadowMap = new Map();
        }

        get container() {
          return this._container;
        }

        get enableSnap() {
          return false;
        }

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

        updateShadow(drag) {
          let shadow;

          if (this._shadowMap.has(drag)) {
            shadow = this._shadowMap.get(drag);
          } else {
            shadow = new Node(drag.node.name + "-shadow");
            shadow.layer = drag.node.layer;
            const shadowUI = shadow.addComponent(UITransform);
            const dragUI = drag.getComponent(UITransform);
            shadowUI.width = dragUI.width;
            shadowUI.height = dragUI.height;
            shadowUI.setAnchorPoint(dragUI.anchorPoint);
            this.container.node.addChild(shadow);
            this.container.updateLayout();

            this._shadowMap.set(drag, shadow);

            shadow.on(Node.EventType.TRANSFORM_CHANGED, type => {
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

        __addDrag(drag) {
          this._dragsInside.push(drag);

          const shadow = this.updateShadow(drag);
          if (shadow == null) return false;
          return true;
        }

        __removeDrag(drag) {
          super.__removeDrag(drag);

          const shadow = this._shadowMap.get(drag);

          this._shadowMap.delete(drag);

          shadow.destroy();
        }

        onLoad() {
          super.onLoad();

          if (!this.container) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`UIDragSort: Requires a valid Layout container to be assigned.`);
            return null;
          }
        }

        _addEventListeners() {
          for (const child of this.node.children) {
            const drag = child.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            if (drag) {
              child.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._onRegisteredDragUpdate, this);
              child.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._onRegisteredDragUpdate, this);
            }
          }
        }

        _removeEventListeners() {
          for (const child of this.node.children) {
            const drag = child.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            if (drag) {
              child.off((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._onRegisteredDragUpdate, this);
              child.off((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._onRegisteredDragUpdate, this);
            }
          }
        }

        _onRegisteredDragUpdate(drag) {
          if (!this._shadowMap.has(drag) && this.__isInside(v2(drag.targetWorldPosition.x, drag.targetWorldPosition.y))) {
            this.updateShadow(drag);
          }

          const currentShadow = this._shadowMap.get(drag);

          const dragUITransform = drag.getComponent(UITransform);
          const bounds = dragUITransform.getBoundingBoxToWorld();

          for (const [otherDrag, shadow] of this._shadowMap.entries()) {
            if (otherDrag && otherDrag !== drag) {
              const shadowUITransform = shadow.getComponent(UITransform);
              const shadowBounds = shadowUITransform.getBoundingBoxToWorld();

              if ((_crd && intersectionPercent === void 0 ? (_reportPossibleCrUseOfintersectionPercent({
                error: Error()
              }), intersectionPercent) : intersectionPercent)(bounds, shadowBounds) > 0.5) {
                // rearrange the shadows by placing current at the overlapped.
                currentShadow.setSiblingIndex(shadow.getSiblingIndex());
                this.container.updateLayout();
                break;
              }
            }
          }

          for (const [d, shadow] of this._shadowMap.entries()) {
            if (!d.isDragging) d.targetWorldPosition = shadow.worldPosition;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_container", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "container", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "container"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableSnap", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "enableSnap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "behaviour", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "behaviour"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d14c0575befc15f3f9fc9194307a3464635e13c2.js.map