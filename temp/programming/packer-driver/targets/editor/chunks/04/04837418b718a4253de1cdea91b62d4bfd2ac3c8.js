System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Button, UITransform, Sprite, Prefab, AS, UIPopup, ReplicatedButton, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, requireComponent, AddImage;

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
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
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

      _cclegacy._RF.push({}, "be785mBHORLMpBxNOXd2UTN", "AddImage", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("AddImage", AddImage = (_dec = ccclass('AddImage'), _dec2 = requireComponent(Button), _dec3 = property(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec4 = property(Sprite), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = class AddImage extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popup", _descriptor, this);

          _initializerDefineProperty(this, "optionSprite", _descriptor2, this);

          _initializerDefineProperty(this, "optionPrefab", _descriptor3, this);

          this._button = null;
        }

        awake() {
          this._button = this.getComponent(Button);
          this.node.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);

          this._addEventListeners();

          const insertButtonsComp = this.popup.node.children;
          insertButtonsComp.forEach((child, i) => {
            child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
            child.on(Button.EventType.CLICK, async () => {
              if (this.popup.isVisible) await this.popup.hide();

              let _selectedOption = instantiate(child);

              _selectedOption.parent = this.node;
              _selectedOption.position = this.node.position;
              _selectedOption.getComponent(UITransform).height = this.node.getComponent(UITransform).height;
              _selectedOption.getComponent(UITransform).width = this.node.getComponent(UITransform).width;

              _selectedOption.getComponent(Button).destroy();

              child.children;
            });
          });
        }

        _addEventListeners() {
          this._button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
        }

        _removeEventListeners() {
          this._button.node.off(Button.EventType.CLICK, this._onButtonClick, this);
        }

        _onButtonClick() {
          this.popup.show();
        }

        _spriteAssigner() {
          this.optionSprite.forEach((sprt, i) => {});
        } // insertChild() {
        //   for (let i = 0; i < this.optionLabel.length; i++) {
        //     let addchild = instantiate(this.optionPrefab);
        //     addchild.parent = this.optionsContainer.node;
        //   }
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "optionPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04837418b718a4253de1cdea91b62d4bfd2ac3c8.js.map