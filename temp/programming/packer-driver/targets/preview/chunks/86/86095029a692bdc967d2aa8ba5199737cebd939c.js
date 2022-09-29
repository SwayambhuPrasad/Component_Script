System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Enum, Intersection2D, PolygonCollider2D, rect, UITransform, _decorator, AS, error, warn, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, disallowMultiple, requireComponent, BoundsType, DropBehaviour, UIDrop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "./UIDrag", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Intersection2D = _cc.Intersection2D;
      PolygonCollider2D = _cc.PolygonCollider2D;
      rect = _cc.rect;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
      warn = _unresolved_3.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf0b8v2GZdPyaw/MdHzHyi1", "UIDrop", undefined);

      ({
        ccclass,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);

      (function (BoundsType) {
        BoundsType[BoundsType["RECT"] = 0] = "RECT";
        BoundsType[BoundsType["CIRCLE"] = 1] = "CIRCLE";
      })(BoundsType || (BoundsType = {}));

      (function (DropBehaviour) {
        DropBehaviour[DropBehaviour["ALLOW_MULTIPLE"] = 0] = "ALLOW_MULTIPLE";
        DropBehaviour[DropBehaviour["ALLOW_SINGLE"] = 1] = "ALLOW_SINGLE";
        DropBehaviour[DropBehaviour["REPLACE"] = 2] = "REPLACE";
      })(DropBehaviour || (DropBehaviour = {}));

      _export("UIDrop", UIDrop = (_dec = ccclass("UIDrop"), _dec2 = requireComponent(UITransform), _dec3 = property({
        tooltip: "Enable if you want the valid drag data to snap to this node position."
      }), _dec4 = property({
        type: Enum(BoundsType),
        tooltip: "The shape of bounds to use."
      }), _dec5 = property({
        tooltip: "The radius of the circle to use for bounds. If radius is greater than the UI Rect " + "bounds, it may not work.",

        visible() {
          return this.boundsType === BoundsType.CIRCLE;
        }

      }), _dec6 = property({
        type: Enum(DropBehaviour)
      }), _dec(_class = disallowMultiple(_class = _dec2(_class = (_class2 = (_class3 = class UIDrop extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_enableSnap", _descriptor, this);

          _initializerDefineProperty(this, "_boundsType", _descriptor2, this);

          _initializerDefineProperty(this, "_circleRadius", _descriptor3, this);

          _initializerDefineProperty(this, "_behaviour", _descriptor4, this);

          _initializerDefineProperty(this, "_usePolygonCollider", _descriptor5, this);

          this._uiTransform = null;
          this._dragsInside = new Array();
          this._collider = null;
        }

        get enableSnap() {
          return this._enableSnap;
        }

        get boundsType() {
          return this._boundsType;
        }

        get circleRadius() {
          return this._circleRadius;
        }

        get behaviour() {
          return this._behaviour;
        }

        get usePolygonCollider() {
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


        __addDrag(drag) {
          switch (this.behaviour) {
            case DropBehaviour.ALLOW_MULTIPLE:
              break;

            case DropBehaviour.ALLOW_SINGLE:
              if (this._dragsInside.length > 0) return false;
              break;

            case DropBehaviour.REPLACE:
              this._dragsInside.forEach(dragInside => drag !== dragInside && dragInside.resetDrop());

              this._dragsInside = [];
              break;

            default:
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("Unkown Drop Behaviour!!");
              break;
          }

          this._dragsInside.push(drag);

          return true;
        }
        /**
         * @internal
         */


        __removeDrag(drag) {
          var index = this._dragsInside.indexOf(drag, 0);

          if (index > -1) {
            this._dragsInside.splice(index, 1);
          }
        }
        /**
         * @internal
         */


        __isInside(worldPoint) {
          var _this$_uiTransform$ge, _this$_uiTransform;

          var isInRect = (_this$_uiTransform$ge = (_this$_uiTransform = this._uiTransform) == null ? void 0 : _this$_uiTransform.getBoundingBoxToWorld().contains(worldPoint)) != null ? _this$_uiTransform$ge : false;
          if (this.usePolygonCollider && this._collider) isInRect && (isInRect = Intersection2D.pointInPolygon(worldPoint, this._collider.worldPoints));
          return isInRect;
        }
        /**
         * @internal
         */


        __getWorldBounds() {
          var _this$_uiTransform$ge2, _this$_uiTransform2;

          return (_this$_uiTransform$ge2 = (_this$_uiTransform2 = this._uiTransform) == null ? void 0 : _this$_uiTransform2.getBoundingBoxToWorld()) != null ? _this$_uiTransform$ge2 : rect();
        }

        onLoad() {
          this._uiTransform = this.getComponent(UITransform);
          this._collider = this.getComponent(PolygonCollider2D);
          if (this.usePolygonCollider && !this._collider) (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
            error: Error()
          }), warn) : warn)("No polygon collider found!");
        }

      }, _class3.BoundsType = BoundsType, _class3.DropBehaviour = DropBehaviour, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_enableSnap", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_boundsType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BoundsType.RECT;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_circleRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_behaviour", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DropBehaviour.REPLACE;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_usePolygonCollider", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "enableSnap", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "enableSnap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "boundsType", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "boundsType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "circleRadius", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "circleRadius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "behaviour", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "behaviour"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "usePolygonCollider", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "usePolygonCollider"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86095029a692bdc967d2aa8ba5199737cebd939c.js.map