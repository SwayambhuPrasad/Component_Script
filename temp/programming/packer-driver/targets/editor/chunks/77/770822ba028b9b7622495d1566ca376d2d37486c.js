System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Button, UITransform, AS, UIPopup, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, AddImage;

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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIPopup = _unresolved_3.UIPopup;
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
      }), UIPopup) : UIPopup), _dec(_class = _dec2(_class = (_class2 = class AddImage extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popup", _descriptor, this);

          this._button = null;
        }

        awake() {
          this._button = this.getComponent(Button);

          this._addEventListeners();

          const insertButtonsComp = this.popup.getComponentsInChildren(UITransform);
          insertButtonsComp.forEach((child, i) => {
            child.addComponent(Button);
          });
          const choiceButtons = this.popup.getComponentsInChildren(Button);
          choiceButtons.forEach((btn, i) => {
            btn.node.on(Button.EventType.CLICK, async () => {
              if (this.popup.isVisible) await this.popup.hide();

              let _selectedOption = instantiate(btn.node);

              _selectedOption.parent = this.node;
              _selectedOption.position = this.node.position;
              _selectedOption.getComponent(UITransform).height = this.node.getComponent(UITransform).height;
              _selectedOption.getComponent(UITransform).width = this.node.getComponent(UITransform).width;

              _selectedOption.getComponent(Button).destroy(); //this._removeEventListeners();
              // take i and get the image to add. 

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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
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
//# sourceMappingURL=770822ba028b9b7622495d1566ca376d2d37486c.js.map