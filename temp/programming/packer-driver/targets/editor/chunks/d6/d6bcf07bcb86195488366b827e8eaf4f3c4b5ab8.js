System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Button, Prefab, Layout, Label, AS, UIPopup, ReplicatedButton, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, requireComponent, FIB;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIPopup = _unresolved_3.UIPopup;
    }, function (_unresolved_4) {
      ReplicatedButton = _unresolved_4.ReplicatedButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a8c3Ywap9OrIJ5QCk5WRcj", "FIB", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("FIB", FIB = (_dec = ccclass('FIB'), _dec2 = property(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec3 = property(Prefab), _dec4 = property(Layout), _dec5 = property({
        type: String
      }), _dec(_class = (_class2 = class FIB extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popup", _descriptor, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor2, this);

          this._button = null;

          _initializerDefineProperty(this, "optionsContainer", _descriptor3, this);

          _initializerDefineProperty(this, "optionLabel", _descriptor4, this);

          _initializerDefineProperty(this, "correctIndex", _descriptor5, this);
        }

        awake() {
          this._insertChild();

          this._button = this.getComponentInChildren(Button);

          this._button.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);

          this._addEventListeners();

          this.popup.node.children[0].addComponent(Button);
          this.popup.node.children[0].addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.popup.node.children[0].on(Button.EventType.CLICK, () => {
            this._onCrossClick();
          });
          var options = this.optionsContainer.getComponentsInChildren(Button);
          var seletion = null;
          options.forEach((opt, i) => {
            console.log("name", i);
            opt.node.on(Button.EventType.CLICK, () => {
              seletion = i;
              this.popup.node.children[2].getComponentInChildren(Label).string = this.optionLabel[i];

              for (let j = 0; j < options.length; j++) {
                if (i == j) options[i].node.children[0].active = true;else options[j].node.children[0].active = false;
              }
            }, this);
          });
          this.popup.node.children[3].addComponent(Button);
          this.popup.node.children[3].addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.popup.node.children[3].on(Button.EventType.CLICK, () => {
            this._onCheckClick(options, seletion);
          }, this);
          this.lableAssigner();
        }

        _addEventListeners() {
          this._button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
        }

        _onButtonClick() {
          this.popup.show();
        }

        _onCrossClick() {
          this.popup.hide();
        }

        _onCheckClick(options, seletion) {
          console.log(seletion);
          if (seletion != null) if (seletion == this.correctIndex) {
            options[seletion].node.children[1].active = true;
            this._button.node.getComponentInChildren(Label).string = options[seletion].getComponentInChildren(Label).string;
          } else options[seletion].children[2].active = true;
        }

        _optionSelection(index) {
          console.log("running", index);
          this.popup.node.children[2].getComponent(Label).string = this.optionLabel[index];
        }

        _insertChild() {
          for (let i = 0; i < this.optionLabel.length; i++) {
            let addchild = instantiate(this.optionPrefab);
            addchild.addComponent(Button);
            addchild.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
            addchild.parent = this.optionsContainer.node;
          }
        }

        lableAssigner() {
          const mcqLable = this.popup.node.children[1].getComponentsInChildren(Label);
          mcqLable.forEach((btnLable, i) => {
            if (this.optionLabel.length <= i) {
              btnLable.node.parent.active = false;
            } else btnLable.string = this.optionLabel[i];
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "correctIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6bcf07bcb86195488366b827e8eaf4f3c4b5ab8.js.map