System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Button, Label, Sprite, EditBox, Prefab, AS, UIPopup, ReplicatedButton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PickSentence;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts/ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "db://as_framework/scripts/UIPopup", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      EditBox = _cc.EditBox;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIPopup = _unresolved_3.UIPopup;
    }, function (_unresolved_4) {
      ReplicatedButton = _unresolved_4.ReplicatedButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9adaeLphzlCeLOpkhh/1uVK", "PickSentence", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PickSentence", PickSentence = (_dec = ccclass('PickSentence'), _dec2 = property(Button), _dec3 = property(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec4 = property(Prefab), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(String), _dec8 = property(String), _dec(_class = (_class2 = class PickSentence extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "label", _descriptor4, this);

          _initializerDefineProperty(this, "questionLabel", _descriptor5, this);

          _initializerDefineProperty(this, "questionString", _descriptor6, this);

          _initializerDefineProperty(this, "optionLabel", _descriptor7, this);

          this._choices = [];
        }

        awake() {
          var _this = this;

          this.button.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);

          this._addEventListeners();

          this.questionLabel.string = this.questionString.toString();

          for (var i = 0; i < this.optionLabel.length; i++) {
            var newOption = instantiate(this.optionPrefab);
            newOption.parent = this.popup.node.getChildByName('Layout');
            newOption.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);

            this._choices.push(newOption);
          }

          var editbox = this.popup.getComponentInChildren(EditBox);

          this._choices.forEach((btn, i) => {
            var _selectedOption = btn.getChildByName('Label');

            _selectedOption.getComponent(Label).string = this.optionLabel[i].toString();

            var str = _selectedOption.getComponent(Label).string;

            var hilight = btn.getChildByName('hilight');
            btn.on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              if (_this.popup.isVisible) yield _this.popup.hide();

              _this._choices.forEach((hil, j) => {
                hil.getChildByName('hilight').active = false;
              });

              hilight.active = true;
              _this.label.string = str;
              editbox.string = str;
              if (_this.button.getComponent(Sprite).enabled) _this.button.getComponent(Sprite).enabled = false;
            }));
          });

          editbox.node.on('editing-did-ended', /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this.popup.isVisible) yield _this.popup.hide();

            _this._choices.forEach((hil, j) => {
              hil.getChildByName('hilight').active = false;
            });

            _this.label.string = editbox.string;
            if (_this.button.getComponent(Sprite).enabled) _this.button.getComponent(Sprite).enabled = false;
          }));
        }

        _addEventListeners() {
          this.button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
        }

        _onButtonClick() {
          this.popup.show();
        }

        get sentence() {
          return this.label.string;
        }

        set sentence(str) {
          this.label.string = str;
        }

        get question() {
          return this.questionLabel.string;
        }

        set question(str) {
          this.questionLabel.string = str;
        }

        set optionLabelString(str) {
          this.optionLabel = str;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "optionPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "questionLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "questionString", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a74969ffc713d2191993b04b997d97f434e01e30.js.map