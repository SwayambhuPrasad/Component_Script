System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, EDITOR, AS, error, OptionButton, i18n, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, TranslatedOptionButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptionButton(extras) {
    _reporterNs.report("OptionButton", "./OptionButton", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      OptionButton = _unresolved_4.OptionButton;
    }, function (_unresolved_5) {
      i18n = _unresolved_5.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8de42yS/4VCgYcNebuFLVNr", "TranslatedOptionButton", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("TranslatedOptionButton", TranslatedOptionButton = (_dec = ccclass("TranslatedOptionButton"), _dec2 = requireComponent(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
        error: Error()
      }), OptionButton) : OptionButton), _dec3 = property({
        tooltip: "The key used to get the translated string."
      }), _dec(_class = _dec2(_class = (_class2 = class TranslatedOptionButton extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_key", _descriptor, this);

          this._optBtn = null;
        }

        get key() {
          return this._key;
        }

        get string() {
          var _this$_optBtn;

          var strs = new Array();

          if (EDITOR && this._optBtn == null) {
            this._optBtn = this.getComponent(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
              error: Error()
            }), OptionButton) : OptionButton);
          }

          (_this$_optBtn = this._optBtn) == null ? void 0 : _this$_optBtn.options.forEach(item => {
            strs.push(item.string);
          });
          return JSON.stringify(strs);
        }

        set key(value) {
          if (EDITOR) {
            this._key = value;
          } else {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Cannot set key outside the editor!");
          }
        }

        set string(value) {
          var _this$_optBtn2;

          // Ignore if string not valid!
          if (!value || this._optBtn == null) return;
          var options = this._optBtn.options;
          var strs = JSON.parse(value);

          if (strs == null || strs.length !== options.length) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unable to parse option button strings!");
            return;
          }

          (_this$_optBtn2 = this._optBtn) == null ? void 0 : _this$_optBtn2.options.forEach((item, i) => {
            item.string = strs[i];
          });
        }

        awake() {
          this._optBtn = this.getComponent(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton);
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
        } // TODO: Sprites!!


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
//# sourceMappingURL=b27f3ceca278ba63bef787d90f382a1c5a240da4.js.map