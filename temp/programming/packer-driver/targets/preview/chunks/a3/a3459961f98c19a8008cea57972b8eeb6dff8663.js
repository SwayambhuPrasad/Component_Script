System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Prefab, UIPopup, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, FIB;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "db://as_framework/scripts/UIPopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      UIPopup = _unresolved_2.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a8c3Ywap9OrIJ5QCk5WRcj", "FIB", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("FIB", FIB = (_dec = ccclass('FIB'), _dec2 = property(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec3 = property(Prefab), _dec(_class = (_class2 = class FIB extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "popup", _descriptor, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor2, this);

          this._button = null;
        }

        awake() {
          this._button = this.getComponent(Button);
        }

        start() {}

        update(deltaTime) {}

        _addEventListeners() {
          this._button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3459961f98c19a8008cea57972b8eeb6dff8663.js.map