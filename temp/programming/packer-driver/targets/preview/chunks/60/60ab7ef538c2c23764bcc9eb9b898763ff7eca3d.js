System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, AS, ReplicatedButton, _dec, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, AnswerType, MCQ;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
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

      _export("MCQ", MCQ = (_dec = ccclass('MCQ'), _dec(_class = (_class2 = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);
          this._selection = [];

          _initializerDefineProperty(this, "answer", _descriptor, this);
        }

        awake() {
          var _this = this;

          var insertButtonsComp = this.node.children;
          insertButtonsComp.forEach((child, i) => {
            child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
          });
          var choiceButtons = this.node.getComponentsInChildren(Button);
          choiceButtons.forEach((btn, i) => {
            this._selection.push(-1);

            console.log("running");
            btn.node.on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              if (btn.node.name == "check") {
                _this.checkSelection();

                return;
              }

              if (_this._selection[i] == -1) {
                btn.node.children[0].active = true;
                _this._selection[i] = 1;
              } else {
                btn.node.children[0].active = false;
                _this._selection[i] = -1;
              }
            }));
          });
        }

        checkSelection() {
          console.log("Running");

          if (this._selection === this.answer) {
            console.log("Running");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "answer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [-1, 1, 1, -1];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60ab7ef538c2c23764bcc9eb9b898763ff7eca3d.js.map