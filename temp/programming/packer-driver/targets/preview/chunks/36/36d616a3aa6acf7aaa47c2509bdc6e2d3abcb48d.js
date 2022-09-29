System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Label, _decorator, EDITOR, AS, i18n, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, TranslatedLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "./Translations", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      i18n = _unresolved_3.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2cd9OAW+NJB753NYzj5jCQ", "TranslatedLabel", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("TranslatedLabel", TranslatedLabel = (_dec = ccclass("TranslatedLabel"), _dec2 = requireComponent(Label), _dec3 = property({
        tooltip: "The key used to get the translated string."
      }), _dec(_class = _dec2(_class = (_class2 = class TranslatedLabel extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_key", _descriptor, this);

          this._label = null;
        }

        get key() {
          return this._key;
        }

        get string() {
          var _this$_label$string, _this$_label;

          if (EDITOR && this._label == null) {
            this._label = this.getComponent(Label);
          }

          return (_this$_label$string = (_this$_label = this._label) == null ? void 0 : _this$_label.string) != null ? _this$_label$string : "";
        }

        set key(value) {
          this._key = value;
        }

        set string(value) {
          // Ignore if string not valid!
          if (!value || this._label == null) return;
          this._label.string = value;
        }

        awake() {
          this._label = this.getComponent(Label);
          this.updateTranslation();
        }

        onEnable() {
          (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).translationsLoadedEvent.on(this.updateTranslation, this);
        }

        onDisable() {
          (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).translationsLoadedEvent.off(this.updateTranslation, this);
        }

        updateTranslation() {
          if (!(_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).enabled) return;
          this.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(this.key);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "key", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "key"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36d616a3aa6acf7aaa47c2509bdc6e2d3abcb48d.js.map