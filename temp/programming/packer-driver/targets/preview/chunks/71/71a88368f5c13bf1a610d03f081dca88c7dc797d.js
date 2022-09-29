System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Button, find, Sprite, AS, debug, ChangeBackground, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ClickToAppear;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdebug(extras) {
    _reporterNs.report("debug", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeBackground(extras) {
    _reporterNs.report("ChangeBackground", "./ChangeBackground", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Button = _cc.Button;
      find = _cc.find;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      debug = _unresolved_2.debug;
    }, function (_unresolved_3) {
      ChangeBackground = _unresolved_3.ChangeBackground;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "436adeOjyhHnKFkhy3n6Jnd", "ClickToAppear", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClickToAppear", ClickToAppear = (_dec = ccclass('ClickToAppear'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property({
        type: Number
      }), _dec(_class = (_class2 = class ClickToAppear extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Objects", _descriptor, this);

          _initializerDefineProperty(this, "buttons", _descriptor2, this);

          _initializerDefineProperty(this, "ScreenTag", _descriptor3, this);

          this.bgs = void 0;
          this._buttons = void 0;
          this.backGround = null;
          this.nextVis = false;
        }

        awake() {
          this.backGround = find("Canvas_new/BackGround");
          this.backGround.on("Screen", this._setNavStatus.bind(this));
          this.bgs = this.Objects.getComponentsInChildren(Sprite);
          (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
            error: Error()
          }), debug) : debug)("ghhh", this.bgs);
          this._buttons = this.buttons.getComponentsInChildren(Button);
        }

        star() {
          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground).ButtonClick.play();
          this.Objects.getComponentsInChildren(Sprite)[0].node.active = true;
          this.Objects.getComponentsInChildren(Sprite)[1].node.active = false;
          this.buttons.getComponentsInChildren(Button)[0].node.active = false;
          this.buttons.getComponentsInChildren(Button)[1].node.active = true;
          this.buttons.getComponentsInChildren(Button)[1].node.position = this.buttons.getComponentsInChildren(Button)[0].node.position;
          this.nextVis = true;

          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(this.nextVis, true, false);
        }

        moon() {
          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground).ButtonClick.play();
          this.Objects.getComponentsInChildren(Sprite)[0].node.active = false;
          this.Objects.getComponentsInChildren(Sprite)[1].node.active = true;
          this.buttons.getComponentsInChildren(Button)[1].node.active = false;
          this.buttons.getComponentsInChildren(Button)[0].node.active = true;
          this.nextVis = true;

          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(this.nextVis, true, false);
        }

        _setNavStatus(screen) {
          if (this.ScreenTag == screen) this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(this.nextVis, true, false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Objects", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ScreenTag", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71a88368f5c13bf1a610d03f081dca88c7dc797d.js.map