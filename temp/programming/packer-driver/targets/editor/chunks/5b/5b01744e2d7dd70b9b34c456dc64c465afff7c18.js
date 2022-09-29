System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCBoolean, CCInteger, clamp, color, Color, Graphics, UITransform, _decorator, AS, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, disallowMultiple, executeInEditMode, ColourRect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      CCBoolean = _cc.CCBoolean;
      CCInteger = _cc.CCInteger;
      clamp = _cc.clamp;
      color = _cc.color;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "548e1V0MFVMM7MVugxHYaMm", "ColourRect", undefined);

      ({
        ccclass,
        property,
        requireComponent,
        disallowMultiple,
        executeInEditMode
      } = _decorator);

      _export("ColourRect", ColourRect = (_dec = ccclass("ColourRect"), _dec2 = requireComponent(UITransform), _dec3 = property({
        type: CCBoolean,
        tooltip: "Enable to create rect with rounded corners."
      }), _dec4 = property({
        type: CCInteger,
        visible: function () {
          return this.isRounded;
        },
        tooltip: "If is rounded the radius to use for the corners."
      }), _dec5 = property({
        type: Color,
        override: true,
        visible: true
      }), _dec6 = property({
        override: true,
        visible: false
      }), _dec7 = property({
        override: true,
        visible: false
      }), _dec8 = property({
        override: true,
        visible: false
      }), _dec9 = property({
        override: true,
        visible: false
      }), _dec10 = property({
        override: true,
        displayName: "Color"
      }), _dec11 = property({
        override: true,
        visible: false
      }), _dec(_class = disallowMultiple(_class = executeInEditMode(_class = _dec2(_class = (_class2 = class ColourRect extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Graphics) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_isRounded", _descriptor, this);

          _initializerDefineProperty(this, "_radius", _descriptor2, this);

          this._uiTransform = null;
          this._opacity = 1;
        }

        get isRounded() {
          return this._isRounded;
        }

        get radius() {
          return this._radius;
        } // Override the existing color property.


        get color() {
          return this.fillColor;
        }

        get lineWidth() {
          return this._lineWidth;
        }

        get lineJoin() {
          return this._lineJoin;
        }

        get lineCap() {
          return this._lineCap;
        }

        get strokeColor() {
          return this._strokeColor;
        }

        get fillColor() {
          return this._fillColor;
        }

        get miterLimit() {
          return this._miterLimit;
        }

        set isRounded(value) {
          this._isRounded = value;
          this.updateDraw();
        }

        set radius(value) {
          this._radius = value;
          this.updateDraw();
        }

        set color(value) {
          if (this._color === value) {
            return;
          }

          this.fillColor = value;
          this.updateDraw();
        }

        set lineWidth(value) {
          this._lineWidth = value;

          if (!this.impl) {
            return;
          }

          this.impl.lineWidth = value;
        }

        set lineJoin(value) {
          this._lineJoin = value;

          if (!this.impl) {
            return;
          }

          this.impl.lineJoin = value;
        }

        set lineCap(value) {
          this._lineCap = value;

          if (!this.impl) {
            return;
          }

          this.impl.lineCap = value;
        }

        set strokeColor(value) {
          if (!this.impl) {
            return;
          }

          this._strokeColor.set(value);

          this.impl.strokeColor = this._strokeColor;
        }

        set fillColor(value) {
          if (!this.impl) {
            return;
          }

          this._color.set(value);

          this._fillColor.set(value);

          this.impl.fillColor = this._fillColor;
          this.updateDraw();
        }

        set miterLimit(value) {
          this._miterLimit = value;
        }

        onLoad() {
          super.onLoad();
          this._uiTransform = this.getComponent(UITransform);
        }

        onEnable() {
          super.onEnable();
          this.node.on(UITransform.EventType.SIZE_CHANGED, this.updateDraw, this);
          this.updateDraw();
        }

        onDisable() {
          super.onDisable();
          this.node.off(UITransform.EventType.SIZE_CHANGED, this.updateDraw, this);
        }

        update() {
          if (this._opacity !== this.node._uiProps.localOpacity) {
            this._opacity = this.node._uiProps.localOpacity;
            this.updateDraw();
          }
        }

        updateDraw() {
          if (!this._uiTransform) return;
          this.clear();

          const temp = this._fillColor.clone();

          const alpha = clamp(Math.round(this.node._uiProps.localOpacity * this._fillColor.a), 0, 255);
          this._fillColor = color(temp.r, temp.g, temp.b, alpha);
          const anchorX = this._uiTransform.anchorX;
          const anchorY = this._uiTransform.anchorY;
          const width = this._uiTransform.width;
          const height = this._uiTransform.height;
          if (this.isRounded) this.roundRect(-anchorX * width, -anchorY * height, width, height, this.radius);else this.rect(-anchorX * width, -anchorY * height, width, height);
          this.fill();
          this._fillColor = temp;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isRounded", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isRounded", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isRounded"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "color", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "lineWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lineJoin", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "lineJoin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lineCap", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "lineCap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "strokeColor", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "strokeColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillColor", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "fillColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "miterLimit", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "miterLimit"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b01744e2d7dd70b9b34c456dc64c465afff7c18.js.map