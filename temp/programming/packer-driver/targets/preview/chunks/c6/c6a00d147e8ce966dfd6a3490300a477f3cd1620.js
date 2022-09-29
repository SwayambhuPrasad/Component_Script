System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, AudioClip, director, AS, UIView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ChangeBackground;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      director = _cc.director;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      UIView = _unresolved_2.UIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83e19/Bj1NA6IUFUOkROyPI", "ChangeBackground", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChangeBackground", ChangeBackground = (_dec = ccclass('ChangeBackground'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property(AudioClip), _dec(_class = (_class2 = class ChangeBackground extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "BG", _descriptor, this);

          _initializerDefineProperty(this, "Next", _descriptor2, this);

          _initializerDefineProperty(this, "Back", _descriptor3, this);

          _initializerDefineProperty(this, "Begin", _descriptor4, this);

          _initializerDefineProperty(this, "Home", _descriptor5, this);

          _initializerDefineProperty(this, "Prompt", _descriptor6, this);

          _initializerDefineProperty(this, "ButtonClick", _descriptor7, this);

          this._nextView = null;
          this._backView = null;
          this._beginView = null;
          this.Screen = 0;
        }

        awake() {
          this._nextView = this.Next.getComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);
          this._backView = this.Back.getComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);
          this._beginView = this.Begin.getComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);

          this._changeBackGround();
        }

        Navigation(event, nav) {
          if (this.Screen != this.BG.length - 1 && nav == 1) this.Screen++;else if (this.Screen != 0 && nav == -1) this.Screen--;else if (this.Screen == this.BG.length - 1 && nav == 2) director.loadScene(director.getScene().name);

          this._changeBackGround();

          this.ButtonClick.play();
        }

        _changeBackGround() {
          this.BG.forEach(b => {
            b.active = false;
          });
          this.BG[this.Screen].active = true;
          if (this.Screen == 0) this._navButtonVisibility(false, false, true);else if (this.Screen == this.BG.length - 1) this._navButtonVisibility(false, true, false);else this._navButtonVisibility(true, true, false);
          this.node.emit("Screen", this.Screen);
        }

        _navButtonVisibility(Next, Back, Begin) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.Next.active = Next;
            _this.Back.active = Back;
            _this.Begin.active = Begin;
            _this.Home.active = _this.Screen == _this.BG.length - 1 ? true : false;
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Next", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Back", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Begin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Home", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Prompt", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ButtonClick", [_dec8], {
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
//# sourceMappingURL=c6a00d147e8ce966dfd6a3490300a477f3cd1620.js.map