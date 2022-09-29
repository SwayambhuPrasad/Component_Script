System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Label, systemEvent, SystemEvent, _decorator, AS, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, SoftKey;

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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7099/00BxIIa0hrcqSdwe1", "SoftKey", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("SoftKey", SoftKey = (_dec = ccclass("SoftKey"), _dec2 = requireComponent(Button), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = class SoftKey extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_keyLabel", _descriptor, this);

          this._keyCodes = new Array();

          this._clickCallback = () => {};
        }

        get keyLabel() {
          return this._keyLabel;
        }

        get string() {
          var _this$keyLabel$string, _this$keyLabel;

          return (_this$keyLabel$string = (_this$keyLabel = this.keyLabel) == null ? void 0 : _this$keyLabel.string) != null ? _this$keyLabel$string : "";
        }

        get button() {
          return this.getComponent(Button);
        }

        set keyLabel(value) {
          this._keyLabel = value;
        }

        set string(value) {
          if (this.keyLabel) this.keyLabel.string = value;
        }

        setClickCallback(fn, keyCode) {
          this._clickCallback = fn;
          if (keyCode) this._keyCodes = this._keyCodes.concat(keyCode);
          this.node.on(Button.EventType.CLICK, this._clickCallback);
        }

        onEnable() {
          this.node.on(Button.EventType.CLICK, this._clickCallback);

          if (this._keyCodes.length > 0) {
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this._onSystemKeyDown, this);
          }
        }

        onDisable() {
          this.node.off(Button.EventType.CLICK, this._clickCallback);

          if (this._keyCodes.length > 0) {
            systemEvent.off(SystemEvent.EventType.KEY_DOWN, this._onSystemKeyDown, this);
          }
        }

        _onSystemKeyDown(event) {
          if (this._keyCodes.indexOf(event.keyCode) !== -1) {
            this._clickCallback();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_keyLabel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "keyLabel", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "keyLabel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "string", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5510b2d9e4de05791877196da0a78aed73403ed4.js.map