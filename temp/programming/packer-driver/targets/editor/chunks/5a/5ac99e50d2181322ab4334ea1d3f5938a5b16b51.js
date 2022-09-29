System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, _decorator, AS, animController, editorUtils, UIAnimationLibrary, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, UIAnim;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfanimController(extras) {
    _reporterNs.report("animController", "./UIAnimLibrary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimController(extras) {
    _reporterNs.report("AnimController", "./UIAnimLibrary", _context.meta, extras);
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
      animController = _unresolved_3.animController;
      editorUtils = _unresolved_3.editorUtils;
      UIAnimationLibrary = _unresolved_3.UIAnimationLibrary;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b0cfrOEHlPvoRDYvaoStWe", "UIAnim", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIAnim", UIAnim = (_dec = ccclass("UIAnim"), _dec2 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger on anim start.",
        displayOrder: 30
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: "The event handler to trigger on anim complete.",
        displayOrder: 31
      }), _dec4 = property({
        type: (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
          error: Error()
        }), editorUtils) : editorUtils).enumType,
        tooltip: "Choose animation."
      }), _dec5 = property({
        tooltip: "The animation duration."
      }), _dec6 = property({
        tooltip: "The number of times to repeat. If -1 will repeat infinitely until stop is called."
      }), _dec(_class = (_class2 = (_class3 = class UIAnim extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "animBeginEvents", _descriptor, this);

          _initializerDefineProperty(this, "animEndEvents", _descriptor2, this);

          _initializerDefineProperty(this, "_anim", _descriptor3, this);

          _initializerDefineProperty(this, "_duration", _descriptor4, this);

          _initializerDefineProperty(this, "_repeat", _descriptor5, this);

          _initializerDefineProperty(this, "_playOnLoad", _descriptor6, this);

          this._controller = null;
        }

        get anim() {
          return (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).enumType[this._anim];
        }

        get duration() {
          return this._duration;
        }

        get repeat() {
          return this._repeat;
        }

        get playOnLoad() {
          return this._playOnLoad;
        }

        set anim(value) {
          this._anim = (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
            error: Error()
          }), editorUtils) : editorUtils).getName(value);
        }

        set duration(value) {
          this._duration = value;
        }

        set repeat(value) {
          this._repeat = value;
        }

        set playOnLoad(value) {
          this._playOnLoad = value;
        }

        async play() {
          if (this._isAnimating) return;
          this._controller = (_crd && animController === void 0 ? (_reportPossibleCrUseOfanimController({
            error: Error()
          }), animController) : animController)(this.node);
          this._isAnimating = true;
          this.node.emit(UIAnim.EventType.ANIM_BEGIN, this);
          EventHandler.emitEvents(this.animBeginEvents, this);
          const animFn = (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
            error: Error()
          }), UIAnimationLibrary) : UIAnimationLibrary)[this._anim];
          let count = 0;

          do {
            await animFn(this._controller, this._duration);
            count++; // NOTE: possible infinite loop!!
          } while (this.repeat === -1 || count <= this.repeat);

          this._isAnimating = false;
          this._controller = null;
          this.node.emit(UIAnim.EventType.ANIM_END, this);
          EventHandler.emitEvents(this.animEndEvents, this);
        }

        onEnable() {
          if (this.playOnLoad) this.play();
        }

        onDisable() {
          this.stop();
        }

        stop() {
          if (!this._isAnimating || this._controller == null) return;

          this._controller.stop();
        }

      }, _class3.Animations = (_crd && editorUtils === void 0 ? (_reportPossibleCrUseOfeditorUtils({
        error: Error()
      }), editorUtils) : editorUtils).enumType, _class3.EventType = {
        ANIM_BEGIN: "anim-begin",
        ANIM_END: "anim-end"
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animBeginEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animEndEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_anim", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "none";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_repeat", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_playOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "anim"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "duration"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "repeat", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "repeat"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnLoad", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnLoad"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ac99e50d2181322ab4334ea1d3f5938a5b16b51.js.map