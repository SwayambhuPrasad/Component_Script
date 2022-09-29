System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, _decorator, AS, warn, editorUtils, UIAnimationLibrary, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, UIView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeditorUtils(extras) {
    _reporterNs.report("editorUtils", "./UIAnimLibrary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAnimationLibrary(extras) {
    _reporterNs.report("UIAnimationLibrary", "./UIAnimLibrary", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      warn = _unresolved_3.warn;
    }, function (_unresolved_4) {
      editorUtils = _unresolved_4.editorUtils;
      UIAnimationLibrary = _unresolved_4.UIAnimationLibrary;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b93cKBnP5L8o6ONb2F9Zvf", "UIView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIView", UIView = (_dec = ccclass("UIView"), _dec2 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger when view about to show.",
        displayOrder: 30
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger when view is shown.",
        displayOrder: 31
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger when view about to hide.",
        displayOrder: 32
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger when view is hidden.",
        displayOrder: 33
      }), _dec6 = property({
        type: (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
          error: Error()
        }), editorUtils) : editorUtils).enumType,
        tooltip: "Choose show animation."
      }), _dec7 = property({
        type: (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
          error: Error()
        }), editorUtils) : editorUtils).enumType,
        tooltip: "Choose hide animation."
      }), _dec(_class = (_class2 = (_class3 = class UIView extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "aboutToShowEvents", _descriptor, this);

          _initializerDefineProperty(this, "showCompleteEvents", _descriptor2, this);

          _initializerDefineProperty(this, "aboutToHideEvents", _descriptor3, this);

          _initializerDefineProperty(this, "hideCompleteEvents", _descriptor4, this);

          _initializerDefineProperty(this, "_showAnim", _descriptor5, this);

          _initializerDefineProperty(this, "_hideAnim", _descriptor6, this);

          _initializerDefineProperty(this, "_showDuration", _descriptor7, this);

          _initializerDefineProperty(this, "_hideDuration", _descriptor8, this);
        }

        get showAnim() {
          return (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).enumType[this._showAnim];
        }

        get showDuration() {
          return this._showDuration;
        }

        get hideAnim() {
          return (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).enumType[this._hideAnim];
        }

        get hideDuration() {
          return this._hideDuration;
        }

        get isVisible() {
          return this.node.activeInHierarchy;
        }

        set showAnim(value) {
          this._showAnim = (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).getName(value);
        }

        set showDuration(value) {
          this._showDuration = value;
        }

        set hideAnim(value) {
          this._hideAnim = (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).getName(value);
        }

        set hideDuration(value) {
          this._hideDuration = value;
        }

        async show() {
          if (this.isVisible || this._isAnimating) return;
          EventHandler.emitEvents(this.aboutToShowEvents, this);
          this.node.emit(UIView.EventType.ABOUT_TO_SHOW, this);
          this.node.active = true;
          this._isAnimating = true;
          const anim = (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
            error: Error()
          }), UIAnimationLibrary) : UIAnimationLibrary)[this._showAnim];
          if (!anim) (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
            error: Error()
          }), warn) : warn)("No animation found for " + this.showAnim, this._showAnim, this.node.name);
          await (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
            error: Error()
          }), UIAnimationLibrary) : UIAnimationLibrary)[this._showAnim](this.node, this._showDuration);
          this._isAnimating = false;
          EventHandler.emitEvents(this.showCompleteEvents, this);
          this.node.emit(UIView.EventType.SHOW_COMPLETE, this);
        }

        async hide() {
          if (!this.isVisible || this._isAnimating) return;
          EventHandler.emitEvents(this.aboutToHideEvents, this);
          this.node.emit(UIView.EventType.ABOUT_TO_HIDE, this);
          this._isAnimating = true;
          await (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
            error: Error()
          }), UIAnimationLibrary) : UIAnimationLibrary)[this._hideAnim](this.node, this._hideDuration);
          this._isAnimating = false;
          this.node.active = false;
          EventHandler.emitEvents(this.hideCompleteEvents, this);
          this.node.emit(UIView.EventType.HIDE_COMPLETE, this);
        }

      }, _class3.EventType = {
        ABOUT_TO_SHOW: "about-to-show",
        SHOW_COMPLETE: "show-complete",
        ABOUT_TO_HIDE: "about-to-hide",
        HIDE_COMPLETE: "hide-complete"
      }, _class3.Animations = (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
        error: Error()
      }), editorUtils) : editorUtils).enumType, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aboutToShowEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showCompleteEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "aboutToHideEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideCompleteEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_showAnim", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "none";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_hideAnim", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "none";
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_showDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.4;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_hideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.4;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "showAnim", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "showAnim"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showDuration", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "showDuration"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hideAnim", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "hideAnim"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hideDuration", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "hideDuration"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65f9cdde3af847e4c94ba6def8b4ab8c72ce7017.js.map