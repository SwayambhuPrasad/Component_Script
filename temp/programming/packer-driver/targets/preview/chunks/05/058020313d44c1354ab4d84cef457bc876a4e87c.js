System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Node, Sprite, Color, find, AS, ReplicatedButton, ReplicatedUIDrag, UIDrag, UIDrop, ChangeBackground, CheckPrompt, ValidationEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, SnapToSlot;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedUIDrag(extras) {
    _reporterNs.report("ReplicatedUIDrag", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeBackground(extras) {
    _reporterNs.report("ChangeBackground", "../Background/ChangeBackground", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckPrompt(extras) {
    _reporterNs.report("CheckPrompt", "../Background/CheckPrompt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidationEvent(extras) {
    _reporterNs.report("ValidationEvent", "../Background/ValidationEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      find = _cc.find;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }, function (_unresolved_4) {
      ReplicatedUIDrag = _unresolved_4.ReplicatedUIDrag;
      UIDrag = _unresolved_4.UIDrag;
      UIDrop = _unresolved_4.UIDrop;
    }, function (_unresolved_5) {
      ChangeBackground = _unresolved_5.ChangeBackground;
    }, function (_unresolved_6) {
      CheckPrompt = _unresolved_6.CheckPrompt;
    }, function (_unresolved_7) {
      ValidationEvent = _unresolved_7.ValidationEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f97aPmfOVOaLHGl8b4CsZN", "SnapToSlot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SnapToSlot", SnapToSlot = (_dec = ccclass('SnapToSlot'), _dec2 = property({
        type: Number
      }), _dec3 = property(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
        error: Error()
      }), UIDrop) : UIDrop), _dec4 = property(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec5 = property(Node), _dec6 = property(String), _dec(_class = (_class2 = class SnapToSlot extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ScreenTag", _descriptor, this);

          _initializerDefineProperty(this, "DropSlots", _descriptor2, this);

          _initializerDefineProperty(this, "DragOptions", _descriptor3, this);

          _initializerDefineProperty(this, "check", _descriptor4, this);

          _initializerDefineProperty(this, "answer", _descriptor5, this);

          this.correctCount = [];
          this.backGround = null;
          this.correctDrags = [];
          this.wrongDrags = [];
          this.chechstatus = void 0;

          _initializerDefineProperty(this, "changeColorAsFeedback", _descriptor6, this);
        }

        awake() {
          this.backGround = find("Canvas_new/BackGround");
          this.backGround.on("Screen", this._setNavStatus.bind(this));
          this.DragOptions.forEach((dragOption, i) => {
            this.correctCount.push(-1);
            dragOption.addComponent(_crd && ReplicatedUIDrag === void 0 ? (_reportPossibleCrUseOfReplicatedUIDrag({
              error: Error()
            }), ReplicatedUIDrag) : ReplicatedUIDrag);
            dragOption.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
                error: Error()
              }), ChangeBackground) : ChangeBackground).ButtonClick.play();
              if (!this.check.active) this.check.active = true;
              this.scheduleOnce(this.afterDrop, 0.05);
            });
          });
          this.check.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.check.on(Button.EventType.CLICK, () => {
            this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
              error: Error()
            }), ChangeBackground) : ChangeBackground).ButtonClick.play();
            this.chechstatus = true;
            this.wrongDrags = [];
            this.correctDrags = [];
            this.DragOptions.forEach((drag, i) => {
              var condition = false;
              var counter = 0;

              for (var j = 0; j < this.answer[i].length; j++) {
                if (drag.validUIDrop === this.DropSlots[this.answer[i][j]]) counter++;
              }

              if (counter > 0) condition = true;else condition = false;

              if (condition) {
                if (this.changeColorAsFeedback) drag.getComponent(Sprite).color = new Color(24, 186, 24, 255);else {
                  drag.node.children[0].active = true;
                }
                this.correctCount[i] = 1;
                this.correctDrags.push(drag);
              } else {
                this.chechstatus = false;
                this.correctCount[i] = -1;
                if (this.changeColorAsFeedback) drag.getComponent(Sprite).color = new Color(255, 50, 50, 255);else {
                  drag.node.children[1].active = true;
                }
                this.wrongDrags.push(drag);
              }
            });
            this.check.active = false;

            this._callForPromts();
          });
        }

        onEnable() {
          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(false, false, false);
        } //   onDisable(){
        //     this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false,true,false)
        //   }


        _setNavStatus(screen) {
          if (this.ScreenTag == screen) {
            console.log("set", screen);

            this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
              error: Error()
            }), ChangeBackground) : ChangeBackground)._navButtonVisibility(false, true, false);
          }
        }

        _callForPromts() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.chechstatus) {
              yield _this.backGround.getComponentInChildren(_crd && CheckPrompt === void 0 ? (_reportPossibleCrUseOfCheckPrompt({
                error: Error()
              }), CheckPrompt) : CheckPrompt).showCorrect();
              var ev = new (_crd && ValidationEvent === void 0 ? (_reportPossibleCrUseOfValidationEvent({
                error: Error()
              }), ValidationEvent) : ValidationEvent)(true, true);

              _this.node.dispatchEvent(ev);

              _this.check.active = true;
            } else {
              yield _this.backGround.getComponentInChildren(_crd && CheckPrompt === void 0 ? (_reportPossibleCrUseOfCheckPrompt({
                error: Error()
              }), CheckPrompt) : CheckPrompt).showTryAgain();

              var _ev = new (_crd && ValidationEvent === void 0 ? (_reportPossibleCrUseOfValidationEvent({
                error: Error()
              }), ValidationEvent) : ValidationEvent)(true, false);

              _this.node.dispatchEvent(_ev);

              _this.check.active = true;
            }

            _this.scheduleOnce(_this.afterCheck, 1);
          })();
        }

        afterDrop() {
          this.DragOptions.forEach((dragOption, i) => {
            console.log("pos of " + i + " ---" + dragOption.node.worldPosition + "   reset   " + dragOption.resetScreenPoint);

            if (dragOption.validUIDrop == null) {
              dragOption.getComponent(Sprite).color = new Color(255, 255, 255, 255);
            }
          });
        }

        afterCheck() {
          this.wrongDrags.forEach(W => {
            W.reset();
            if (this.changeColorAsFeedback) W.getComponent(Sprite).color = new Color(255, 255, 255, 255);else {
              this._resetfeedback();
            }
          });
          this.correctDrags.forEach(R => {
            if (this.changeColorAsFeedback) R.getComponent(Sprite).color = new Color(255, 255, 255, 255);else {
              this._resetfeedback();
            }
          });
        }

        _resetfeedback() {
          for (var i = 0; i < this.DragOptions.length; i++) {
            this.DragOptions[i].node.children.forEach(child => {
              child.active = false;
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ScreenTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DropSlots", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragOptions", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "answer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "changeColorAsFeedback", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=058020313d44c1354ab4d84cef457bc876a4e87c.js.map