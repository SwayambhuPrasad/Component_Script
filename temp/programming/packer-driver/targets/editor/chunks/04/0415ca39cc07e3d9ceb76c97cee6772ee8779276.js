System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, find, instantiate, Label, Layout, Prefab, _decorator, AS, UIView, ReplicatedButton, UIAnimationLibrary, debug, ValidationEvent, ChangeBackground, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, requireComponent, AnswerType, MCQ;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAnimationLibrary(extras) {
    _reporterNs.report("UIAnimationLibrary", "db://as_framework/scripts/UIAnimLibrary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdebug(extras) {
    _reporterNs.report("debug", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValidationEvent(extras) {
    _reporterNs.report("ValidationEvent", "../../ValidationEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeBackground(extras) {
    _reporterNs.report("ChangeBackground", "../../Background/ChangeBackground", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      UIView = _unresolved_2.UIView;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }, function (_unresolved_4) {
      UIAnimationLibrary = _unresolved_4.UIAnimationLibrary;
    }, function (_unresolved_5) {
      debug = _unresolved_5.debug;
    }, function (_unresolved_6) {
      ValidationEvent = _unresolved_6.ValidationEvent;
    }, function (_unresolved_7) {
      ChangeBackground = _unresolved_7.ChangeBackground;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e521eMULExEDaTU8T7t0kag", "MCQ", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      (function (AnswerType) {
        AnswerType[AnswerType["SINGLE_CORRECT"] = 0] = "SINGLE_CORRECT";
        AnswerType[AnswerType["MULTIPLE_CORRECT"] = 1] = "MULTIPLE_CORRECT";
      })(AnswerType || (AnswerType = {}));

      _export("MCQ", MCQ = (_dec = ccclass("MCQ"), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: String
      }), _dec4 = property(Prefab), _dec5 = property(Layout), _dec6 = property({
        type: Boolean
      }), _dec7 = property({
        type: Boolean
      }), _dec(_class = (_class2 = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);
          this.backGround = null;

          _initializerDefineProperty(this, "ScreenTag", _descriptor, this);

          _initializerDefineProperty(this, "optionLabel", _descriptor2, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "optionsContainer", _descriptor4, this);

          this._selection = Array();

          _initializerDefineProperty(this, "answer", _descriptor5, this);

          _initializerDefineProperty(this, "createRuntimeOption", _descriptor6, this);

          _initializerDefineProperty(this, "changeColorAsFeedback", _descriptor7, this);

          _initializerDefineProperty(this, "SingleAns", _descriptor8, this);

          this.store = -1;
        }

        //private ChangeBackground;
        awake() {
          this.backGround = find("Canvas_new/BackGround");
          this.backGround.on("Screen", this._setNavStatus.bind(this)); // const BackGround=new  ChangeBackground
          // BackGround.node.on("Screen",this._setNavStatus.bind(this,BackGround))

          if (this.createRuntimeOption) this.insertChild();
          const insertButtonsComp = this.optionsContainer.node.children;
          const choiceButtons = insertButtonsComp.map(child => {
            const btn = child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
            return btn;
          });
          this.node.children[1].addComponent(Button);
          this.node.children[1].addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.node.children[1].addComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);
          this.node.children[1].on(Button.EventType.CLICK, () => {
            this.checkSelection();
          });
          choiceButtons.forEach((btn, i) => {
            this._selection.push(false);

            btn.node.on(Button.EventType.CLICK, async () => {
              if (this.SingleAns) if (this.store != -1) {
                choiceButtons[this.store].node.children[0].active = false;
                this._selection[this.store] = false;
              }
              this.store = i;
              this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
                error: Error()
              }), ChangeBackground) : ChangeBackground).ButtonClick.play();

              if (this._selection[i] === false) {
                btn.node.children[0].active = true;
                this._selection[i] = true;
              } else {
                btn.node.children[0].active = false;
                this._selection[i] = false;
              }
            });
          });
          this.lableAssigner();
        }

        onEnable() {
          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground)._navButtonVisibility(false, false, false);
        } // onDisable(){
        //   this.backGround.getComponent(ChangeBackground)._navButtonVisibility(false,true,false)
        // }


        _setNavStatus(screen) {
          if (this.ScreenTag == screen) {
            console.log("set", screen);

            this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
              error: Error()
            }), ChangeBackground) : ChangeBackground)._navButtonVisibility(false, true, false);
          }
        }

        _callToVisible(Screen) {
          if (this.ScreenTag == Screen) this.node.active = true;else if (this.ScreenTag == -1) return;else this.node.active = false;
        }

        insertChild() {
          for (let i = 0; i < this.optionLabel.length; i++) {
            let addchild = instantiate(this.optionPrefab);
            addchild.parent = this.optionsContainer.node;
          }
        }

        async checkSelection() {
          this.backGround.getComponent(_crd && ChangeBackground === void 0 ? (_reportPossibleCrUseOfChangeBackground({
            error: Error()
          }), ChangeBackground) : ChangeBackground).ButtonClick.play();

          const isCorrect = this._selection.reduce((check, isSelected, i) => {
            check && (check = isSelected === this.answer[i]);
            return check;
          }, true);

          this.checkFeedback(isCorrect ? 1 : 2);
          this.node.children[1].active = false;
          if (isCorrect) await this.backGround.getComponentInChildren(CheckPrompt).showCorrect();else await this.backGround.getComponentInChildren(Checkrompt).showTryAgain();
          this.node.children[1].active = true;
          const ev = new (_crd && ValidationEvent === void 0 ? (_reportPossibleCrUseOfValidationEvent({
            error: Error()
          }), ValidationEvent) : ValidationEvent)(true, isCorrect);
          this.node.dispatchEvent(ev);
          (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
            error: Error()
          }), debug) : debug)("Dispatched event - ", ev);
        }

        lableAssigner() {
          const mcqLable = this.node.getComponentsInChildren(Label);
          mcqLable.forEach((btnLable, i) => {
            if (this.optionLabel.length <= i) {
              btnLable.node.parent.active = false;
            } else btnLable.string = this.optionLabel[i];
          });
        }

        async checkFeedback(statusIndex) {
          const btn = this.optionsContainer.node.children;
          await Promise.all(this._selection.map(async (status, i) => {
            if (status) {
              btn[i].children[statusIndex].active = true;
              await (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
                error: Error()
              }), UIAnimationLibrary) : UIAnimationLibrary).flash(btn[i].children[statusIndex], 2);
              btn[i].children[statusIndex].active = false;
            }
          }));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ScreenTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "optionPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "optionsContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "answer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createRuntimeOption", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "changeColorAsFeedback", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "SingleAns", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0415ca39cc07e3d9ceb76c97cee6772ee8779276.js.map