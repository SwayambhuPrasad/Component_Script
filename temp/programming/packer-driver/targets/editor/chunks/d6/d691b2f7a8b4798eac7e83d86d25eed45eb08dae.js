System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Label, Sprite, _decorator, AS, error, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, OptionItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5f29jLtrNGSZKawr/X1dVn", "OptionItem", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("OptionItem", OptionItem = (_dec = ccclass("OptionItem"), _dec2 = requireComponent(Button), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = class OptionItem extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_label", _descriptor, this);

          _initializerDefineProperty(this, "_sprite", _descriptor2, this);

          this._button = null;

          this._onClickCallback = () => {};
        }

        get label() {
          return this._label;
        }

        get sprite() {
          return this._sprite;
        }

        get button() {
          return this._button;
        }

        set label(value) {
          this._label = value;
        }

        set sprite(value) {
          this._sprite = value;
        }

        setClickCallback(fn) {
          this._onClickCallback = fn;
          this.node.on(Button.EventType.CLICK, this._onClickCallback);
        }

        onEnable() {
          this.node.on(Button.EventType.CLICK, this._onClickCallback);
        }

        onDisable() {
          this.node.off(Button.EventType.CLICK, this._onClickCallback);
        }

        awake() {
          this._button = this.getComponent(Button);

          if (this._button == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Option item button cannot be null.");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_label", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sprite", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "label"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sprite"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d691b2f7a8b4798eac7e83d86d25eed45eb08dae.js.map