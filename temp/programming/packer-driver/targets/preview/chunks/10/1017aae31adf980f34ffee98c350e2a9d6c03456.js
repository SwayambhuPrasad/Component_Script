System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, find, AS, UIView, ChangeBackground, ValidationEvent, _dec, _class, _class2, _descriptor, _crd, ccclass, property, puzzle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeBackground(extras) {
    _reporterNs.report("ChangeBackground", "./ChangeBackground", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidationEvent(extras) {
    _reporterNs.report("ValidationEvent", "./ValidationEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      find = _cc.find;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      UIView = _unresolved_2.UIView;
    }, function (_unresolved_3) {
      ChangeBackground = _unresolved_3.ChangeBackground;
    }, function (_unresolved_4) {
      ValidationEvent = _unresolved_4.ValidationEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c375W5+p5K1rtFJG/he5yo", "puzzle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("puzzle", puzzle = (_dec = ccclass('puzzle'), _dec(_class = (_class2 = class puzzle extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);
          this.backGround = null;
          this.puzzle = [];
          this.popup = [];
          this.currentIndex = -1;
          this.nextVis = false;
          this.close = null;
          this.isCorrect = false;
          this.backUpBG = null;

          _initializerDefineProperty(this, "ScreenTag", _descriptor, this);
        }

        awake() {
          this.backGround = find("Canvas_new/BackGround");
          this.backGround.on("Screen", this._setNavStatus.bind(this));
          this.puzzle = this.node.getChildByName("Puzzles").getComponentsInChildren(Button);
          this.popup = this.node.getComponentsInChildren(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);
          this.backUpBG = this.node.getChildByName("BackUpBG").children[0];
          this.popup.forEach(popup => popup.node.active = false);
          this.puzzle.forEach((p, i) => {
            p.node.on(Button.EventType.CLICK, event => {
              this._onButtonClicktoshow(i);
            }, this);
          });
          this.close = this.node.getChildByName("close");
          this.node.on((_crd && ValidationEvent === void 0 ? (_reportPossibleCrUseOfValidationEvent({
            error: Error()
          }), ValidationEvent) : ValidationEvent).TYPE, ev => {
            this.isCorrect = ev.isCorrect;
            if (ev.isCorrect) this.onRevail();
          });
        }

        _callToVisible(Screen) {
          if (this.ScreenTag == Screen) this.node.active = true;else if (this.ScreenTag == -1) return;else this.node.active = false;
        }

        _onButtonClicktoshow(index) {
          this.currentIndex = index;
          console.log("current-index", index);
          this.popup[index].show();
          this.close.active = true;
        }

        _setNavStatus(screen) {
          if (this.ScreenTag == screen) {
            console.log("set", screen);

            this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
              error: Error()
            }), ChangeBackground) : ChangeBackground)._navButtonVisibility(this.nextVis, true, false);
          }
        }

        onRevail() {
          this.close.active = false;
          this.popup[this.currentIndex].hide();
          if (this.isCorrect) this.puzzle[this.currentIndex].node.active = false;else this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground).ButtonClick.play();
          this.isCorrect = false;
          var count = 0;
          this.puzzle.forEach(p => {
            if (p.node.active == false) count++;
          });

          if (count == this.puzzle.length) {
            this.nextVis = true;
            this.backUpBG.active = true;
          }

          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(this.nextVis, true, false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ScreenTag", [property], {
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
//# sourceMappingURL=1017aae31adf980f34ffee98c350e2a9d6c03456.js.map