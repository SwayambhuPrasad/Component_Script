System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, instantiate, Label, Layout, Prefab, _decorator, AS, ReplicatedButton, UIAnimationLibrary, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, requireComponent, AnswerType, MCQ;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAnimationLibrary(extras) {
    _reporterNs.report("UIAnimationLibrary", "db://as_framework/scripts/UIAnimLibrary", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }, function (_unresolved_4) {
      UIAnimationLibrary = _unresolved_4.UIAnimationLibrary;
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
        type: String
      }), _dec3 = property(Prefab), _dec4 = property(Layout), _dec(_class = (_class2 = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "optionLabel", _descriptor, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "optionsContainer", _descriptor3, this);

          this._selection = Array();
          this.answer = [false, true, true, false];
        }

        awake() {
          this.insertChild();
          const insertButtonsComp = this.node.children;
          const choiceButtons = insertButtonsComp.map(child => {
            const btn = child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
            return btn;
          });
          choiceButtons.forEach((btn, i) => {
            if (btn.node.name === "check") {
              btn.node.on(Button.EventType.CLICK, () => {
                this.checkSelection();
              });
              return;
            }

            this._selection.push(false);

            btn.node.on(Button.EventType.CLICK, async () => {
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

        insertChild() {
          this.optionsContainer.node.destroyAllChildren();

          for (let i = 0; i < this.optionLabel.length; i++) {
            let addchild = instantiate(this.optionPrefab);
            addchild.parent = this.optionsContainer.node;
          }

          console.log("Child count", this.optionsContainer.node.children.length);
        }

        checkSelection() {
          this._selection.forEach((sel, i) => {
            if (sel != this.answer[i]) {
              this.checkFeedback(2);
              return;
            }
          });

          this.checkFeedback(1);
          console.log("running");
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
          console.log("running", this._selection);
          const btn = this.node.children;
          await Promise.all(this._selection.map(async (status, i) => {
            if (status) {
              console.log("running", statusIndex);
              btn[i].children[statusIndex].active = true;
              await (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
                error: Error()
              }), UIAnimationLibrary) : UIAnimationLibrary).flash(btn[i].children[statusIndex], 2);
              btn[i].children[statusIndex].active = false;
            }
          }));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "optionsContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d3eceb78039b9980e4c05a9bf4b45502ecc6c94.js.map