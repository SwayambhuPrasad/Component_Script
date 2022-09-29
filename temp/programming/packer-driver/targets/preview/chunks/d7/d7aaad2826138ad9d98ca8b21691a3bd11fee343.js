System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, ProgressBar, AudioSource, Node, tween, _decorator, Intersection2D, PolygonCollider2D, UITransform, AS, UIPopup, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TapPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "db://as_framework/scripts/UIPopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      tween = _cc.tween;
      _decorator = _cc._decorator;
      Intersection2D = _cc.Intersection2D;
      PolygonCollider2D = _cc.PolygonCollider2D;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIPopup = _unresolved_3.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "904c9/1W8pJkZujl8qgeMMC", "TapPop", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TapPop", TapPop = (_dec = ccclass('TapPop'), _dec2 = property(Button), _dec3 = property(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec4 = property(ProgressBar), _dec5 = property(AudioSource), _dec(_class = (_class2 = class TapPop extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "polygonButton", _descriptor, this);

          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "progressBar", _descriptor3, this);

          _initializerDefineProperty(this, "audio", _descriptor4, this);

          this._progressTween = void 0;
        }

        awake() {
          this.polygonButton.node.on(Node.EventType.MOUSE_DOWN, event => {
            this._pop(event);
          }, this);
          this.popup.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE, () => {
            if (this.progressBar != null) {
              this._progressTween.stop();

              tween(this.progressBar).set({
                progress: 0
              }).start();
            }
          });

          if (this.progressBar != null) {
            var totalLength = this.progressBar.getComponent(UITransform).width;
            var duration = this.audio.duration;
            this._progressTween = tween(this.progressBar).set({
              progress: 0,
              totalLength: totalLength
            }).to(duration, {
              progress: 1
            }).set({
              progress: 0
            });
          }
        }

        _pop(e) {
          var worldPoints = this.polygonButton.node.getComponent(PolygonCollider2D).worldPoints;
          if (Intersection2D.pointInPolygon(e.getUILocation(), worldPoints)) this.popup.show();
        }

        progressPlay(e) {
          this._progressTween.start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "polygonButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec5], {
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
//# sourceMappingURL=d7aaad2826138ad9d98ca8b21691a3bd11fee343.js.map