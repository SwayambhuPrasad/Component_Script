System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ProgressBar, tween, AudioClip, UIView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, CheckPrompt;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      UIView = _unresolved_2.UIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a3ebZ7ev1BnIgD9HUB8xBm", "CheckPrompt", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CheckPrompt", CheckPrompt = (_dec = ccclass('CheckPrompt'), _dec2 = property(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
        error: Error()
      }), UIView) : UIView), _dec3 = property(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
        error: Error()
      }), UIView) : UIView), _dec4 = property(ProgressBar), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec(_class = (_class2 = class CheckPrompt extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "correct", _descriptor, this);

          _initializerDefineProperty(this, "tryAgain", _descriptor2, this);

          _initializerDefineProperty(this, "progressDuration", _descriptor3, this);

          _initializerDefineProperty(this, "progressBar", _descriptor4, this);

          _initializerDefineProperty(this, "correctAudio", _descriptor5, this);

          _initializerDefineProperty(this, "incorrectAudio", _descriptor6, this);
        }

        // @property(Button) CheckButton: Button | null = null;
        onLoad() {
          this.correct.node.active = false;
          this.tryAgain.node.active = false;
          this.progressBar.node.active = false; // this.CheckButton.node.active = true;

          this.progressBar.progress = 0;
        }

        showCorrect() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.correctAudio.play();

            yield _this.correct.show(); //this.CheckButton.node.active = false;

            _this.progressBar.progress = 0;
            _this.progressBar.node.active = true;
            yield _this._playProgressTween();
            _this.progressBar.node.active = false;
            yield _this.correct.hide();
          })();
        }

        showTryAgain() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.incorrectAudio.play();

            yield _this2.tryAgain.show(); //this.CheckButton.node.active = false;

            _this2.progressBar.progress = 0;
            _this2.progressBar.node.active = true;
            yield _this2._playProgressTween();
            _this2.progressBar.node.active = false;
            yield _this2.tryAgain.hide(); // this.CheckButton.node.active = true;
          })();
        }

        _playProgressTween() {
          return new Promise(resolve => {
            tween(this.progressBar).set({
              progress: 0
            }).to(this.progressDuration, {
              progress: 1
            }).call(resolve).start();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "correct", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tryAgain", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "correctAudio", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "incorrectAudio", [_dec6], {
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
//# sourceMappingURL=5947889bdccf93cb826726db69836f0dfc78dc95.js.map