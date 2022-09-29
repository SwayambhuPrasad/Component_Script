System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, UITransform, _decorator, AS, UIDrag, intersectionPercent, _dec, _class, _crd, ccclass, property, UIDragSwap;

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "./UIDrag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfintersectionPercent(extras) {
    _reporterNs.report("intersectionPercent", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
    }, function (_unresolved_4) {
      intersectionPercent = _unresolved_4.intersectionPercent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68ee6JC4x1HhLDylTYGFHaw", "UIDragSwap", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIDragSwap", UIDragSwap = (_dec = ccclass("UIDragSwap"), _dec(_class = class UIDragSwap extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        onEnable() {
          this._addEventListeners();
        }

        onDisable() {
          this._removeEventListeners();
        }

        _addEventListeners() {
          for (const child of this.node.children) {
            const drag = child.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            if (drag) {
              child.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._validateAndDoSwap, this);
              child.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._validateAndDoSwap, this);
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
              }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._validateAndDoSwap, this);
              child.off((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._validateAndDoSwap, this);
            }
          }
        }

        _validateAndDoSwap(drag) {
          const dragUITransform = drag.getComponent(UITransform);
          const bounds = dragUITransform.getBoundingBoxToWorld();

          for (const child of this.node.children) {
            const otherDrag = child.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            if (otherDrag && otherDrag !== drag) {
              if (otherDrag.isMoving) continue;
              const otherDragUITransform = otherDrag.getComponent(UITransform);
              const otherBounds = otherDragUITransform.getBoundingBoxToWorld();

              if ((_crd && intersectionPercent === void 0 ? (_reportPossibleCrUseOfintersectionPercent({
                error: Error()
              }), intersectionPercent) : intersectionPercent)(bounds, otherBounds) > 0.5) {
                // swap reset position of drags
                const otherResetPosition = otherDrag.resetScreenPoint.clone();
                otherDrag.resetScreenPoint = drag.resetScreenPoint.clone();
                otherDrag.targetPosition = drag.resetScreenPoint.clone();
                drag.resetScreenPoint = otherResetPosition; // drag.targetPosition = otherResetPosition;

                break;
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=034c65101a13f3125ebfc39765d57d96975e4c97.js.map