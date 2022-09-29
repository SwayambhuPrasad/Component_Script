System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Label, Prefab, AS, UIAnimationLibrary, ReplicatedButton, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, AnswerType, MCQ;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAnimationLibrary(extras) {
    _reporterNs.report("UIAnimationLibrary", "db://as_framework/scripts/UIAnimLibrary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIAnimationLibrary = _unresolved_3.UIAnimationLibrary;
    }, function (_unresolved_4) {
      ReplicatedButton = _unresolved_4.ReplicatedButton;
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

      _export("MCQ", MCQ = (_dec = ccclass('MCQ'), _dec2 = property({
        type: String
      }), _dec3 = property(Prefab), _dec(_class = (_class2 = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);
          this._selection = Array();
          this.answer = [false, true, true, false];

          _initializerDefineProperty(this, "optionLabel", _descriptor, this);

          _initializerDefineProperty(this, "option", _descriptor2, this);
        }

        awake() {
          var _this = this;

          var insertButtonsComp = this.node.children;
          var choiceButtons = insertButtonsComp.map(child => {
            var btn = child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
            return btn;
          }); // const choiceButtons = this.node.getComponentsInChildren(Button); 

          choiceButtons.forEach((btn, i) => {
            if (btn.node.name === "check") {
              btn.node.on(Button.EventType.CLICK, () => {
                this.checkSelection();
              });
              return;
            }

            this._selection.push(false);

            btn.node.on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              if (_this._selection[i] === false) {
                btn.node.children[0].active = true;
                _this._selection[i] = true;
              } else {
                btn.node.children[0].active = false;
                _this._selection[i] = false;
              }
            }));
          });
          this.lableAssigner();
        }

        checkSelection() {
          this._selection.forEach((sel, i) => {
            if (sel != this.answer[i]) {
              this.checkFeedback(2);
              return;
            }

            ;
          });

          this.checkFeedback(1);
          console.log("running");
        }

        lableAssigner() {
          var mcqLable = this.node.getComponentsInChildren(Label);
          mcqLable.forEach((btnLable, i) => {
            if (this.optionLabel.length <= i) {
              btnLable.node.parent.active = false;
            } else btnLable.string = this.optionLabel[i];
          });
        }

        checkFeedback(statusIndex) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log("running", _this2._selection);
            var btn = _this2.node.children;
            yield Promise.all(_this2._selection.map( /*#__PURE__*/_asyncToGenerator(function* (status, i) {
              if (status) {
                console.log("running", statusIndex);
                btn[i].children[statusIndex].active = true;
                yield (_crd && UIAnimationLibrary === void 0 ? (_reportPossibleCrUseOfUIAnimationLibrary({
                  error: Error()
                }), UIAnimationLibrary) : UIAnimationLibrary).flash(btn[i].children[statusIndex], 2);
                btn[i].children[statusIndex].active = false;
              }
            })));
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "option", [_dec3], {
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
//# sourceMappingURL=7ee83b3f7234f25ed5c3cd54f68a6b35664335e5.js.map