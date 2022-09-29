System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Sprite, SpriteFrame, _decorator, EDITOR, AS, error, i18n, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _dec5, _class4, _class5, _descriptor3, _descriptor4, _crd, ccclass, property, requireComponent, LanguageSpriteFrame, TranslatedSprite;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      i18n = _unresolved_4.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a636palFpPabBmWv2dIkQ7", "TranslatedSprite", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);
      LanguageSpriteFrame = (_dec = ccclass("LanguageSpriteFrame"), _dec2 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class LanguageSpriteFrame {
        constructor() {
          _initializerDefineProperty(this, "language", _descriptor, this);

          _initializerDefineProperty(this, "spriteFrame", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "language", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "US";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      _export("TranslatedSprite", TranslatedSprite = (_dec3 = ccclass("TranslatedSprite"), _dec4 = requireComponent(Sprite), _dec5 = property({
        tooltip: "The key used to get the translated string."
      }), _dec3(_class4 = _dec4(_class4 = (_class5 = class TranslatedSprite extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_key", _descriptor3, this);

          _initializerDefineProperty(this, "spriteList", _descriptor4, this);

          this._sprite = null;
          this._spriteMap = {};
        }

        get key() {
          return this._key;
        }

        get spriteFrame() {
          var _this$_sprite;

          return (_this$_sprite = this._sprite) == null ? void 0 : _this$_sprite.spriteFrame;
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

        set spriteFrame(value) {
          if (this._sprite == null || value == null) return;
          this._sprite.spriteFrame = value;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this._sprite = _this.getComponent(Sprite);

            _this.spriteList.forEach(langSprite => {
              _this._spriteMap[langSprite.language] = langSprite.spriteFrame;
            });

            _this.updateTranslation();
          })();
        }

        updateTranslation() {
          if (!(_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).enabled) return;
          this.spriteFrame = this._spriteMap[(_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).currentLanguage];
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "spriteList", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "key", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "key"), _class5.prototype)), _class5)) || _class4) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53e3b0f75cb02eee6a27de44b0a384e516aede2b.js.map