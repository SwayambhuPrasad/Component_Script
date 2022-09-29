System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Director, director, EventHandler, instantiate, Label, Layout, Node, Sprite, UITransform, v3, _decorator, AS, error, OptionData, OptionItem, UIPopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _crd, ccclass, property, requireComponent, OptionButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptionData(extras) {
    _reporterNs.report("OptionData", "./OptionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptionItem(extras) {
    _reporterNs.report("OptionItem", "./OptionItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "./UIPopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      EventHandler = _cc.EventHandler;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      OptionData = _unresolved_4.OptionData;
    }, function (_unresolved_5) {
      OptionItem = _unresolved_5.OptionItem;
    }, function (_unresolved_6) {
      UIPopup = _unresolved_6.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81acfaDKSlM96cpuTzANu4B", "OptionButton", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("OptionButton", OptionButton = (_dec = ccclass("OptionButton"), _dec2 = requireComponent(UITransform), _dec3 = requireComponent(Button), _dec4 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when selected option is changed.",
        displayOrder: 30
      }), _dec5 = property({
        type: Label,
        tooltip: "The label to show the selected option text."
      }), _dec6 = property({
        type: Sprite,
        tooltip: "The sprite to show the selected option spriteFrame."
      }), _dec7 = property({
        type: _crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
          error: Error()
        }), UIPopup) : UIPopup,
        tooltip: "The node used as popup."
      }), _dec8 = property({
        type: Layout,
        tooltip: "The layout used as a parent for the option items."
      }), _dec9 = property({
        type: Node,
        tooltip: "The template used for each option item."
      }), _dec10 = property({
        tooltip: "Set to true if you want to hide the drop down on option selected."
      }), _dec11 = property({
        tooltip: "If true ensures popup width is same as button width."
      }), _dec12 = property({
        type: [_crd && OptionData === void 0 ? (_reportPossibleCrUseOfOptionData({
          error: Error()
        }), OptionData) : OptionData],
        tooltip: "Array of string and spriteframe data for each option."
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_class3 = class OptionButton extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "optionChangedEvents", _descriptor, this);

          _initializerDefineProperty(this, "_buttonLabel", _descriptor2, this);

          _initializerDefineProperty(this, "_buttonSprite", _descriptor3, this);

          _initializerDefineProperty(this, "_popup", _descriptor4, this);

          _initializerDefineProperty(this, "_optionsContainer", _descriptor5, this);

          _initializerDefineProperty(this, "_optionItemTemplate", _descriptor6, this);

          _initializerDefineProperty(this, "_hideOnSelected", _descriptor7, this);

          _initializerDefineProperty(this, "_matchPopupWidth", _descriptor8, this);

          _initializerDefineProperty(this, "_optionDatas", _descriptor9, this);

          this._uiTransform = null;
          this._popupUITransform = null;
          this._selectedIndex = -1;
        }

        /**
         * The label to show the selected option text.
         */
        get buttonLabel() {
          return this._buttonLabel;
        }

        get buttonSprite() {
          return this._buttonSprite;
        }

        get popup() {
          return this._popup;
        }

        get optionsContainer() {
          return this._optionsContainer;
        }

        get optionItemTemplate() {
          return this._optionItemTemplate;
        }

        get hideOnSelected() {
          return this._hideOnSelected;
        }

        get matchPopupWidth() {
          return this._matchPopupWidth;
        }

        get optionDatas() {
          return this._optionDatas;
        }
        /**
         * The selected option index or `-1` if no option is selected.
         * If invalid value is set it defaults to `-1`.
         */


        get selectedIndex() {
          return this._selectedIndex;
        }
        /**
         * The list of options used in the drop box.
         */


        get options() {
          return this._optionDatas;
        }

        set buttonLabel(value) {
          this._buttonLabel = value;
        }

        set buttonSprite(value) {
          this._buttonSprite = value;
        }

        set popup(value) {
          this._popup = value;
        }

        set optionsContainer(value) {
          this._optionsContainer = value;
        }

        set optionItemTemplate(value) {
          this._optionItemTemplate = value;
        }

        set hideOnSelected(value) {
          this._hideOnSelected = value;
        }

        set matchPopupWidth(value) {
          this._matchPopupWidth = value;
        }

        set optionDatas(value) {
          this._optionDatas = value;
        }

        set selectedIndex(value) {
          if (this._selectedIndex !== value) {
            if (value < 0 || value > this.optionDatas.length) {
              this._selectedIndex = -1;
            } else {
              this._selectedIndex = value;
            }

            this._updateButton();
          }

          if (this.hideOnSelected) this.hideOptions();
        }

        set options(value) {
          this._optionDatas = value;
        }
        /**
         * Clear the selected index and hide the drop box.
         */


        reset() {
          this.selectedIndex = -1;

          this._updateButton();

          this.hideOptions();
        }
        /**
         * Manually show the options popup.
         */


        showOptions() {
          var _this$popup;

          (_this$popup = this.popup) == null ? void 0 : _this$popup.show();
        }
        /**
         * Manually hide the options popup.
         */


        hideOptions() {
          var _this$popup2;

          (_this$popup2 = this.popup) == null ? void 0 : _this$popup2.hide();
        }

        onLoad() {
          if (this.popup == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The popup cannot be null");
            return;
          }

          if (this.optionItemTemplate == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The option item template must be a valid node.");
            return;
          }

          if (this.optionsContainer == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The options container cannot be null.");
            return;
          }

          this._uiTransform = this.getComponent(UITransform);
          this._popupUITransform = this.popup.getComponent(UITransform);
          this.popup.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._destroyOptionList, this);
          this.popup.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW, () => {
            this._destroyOptionList();

            this._createOptionsList();

            this.optionsContainer.updateLayout();
            director.once(Director.EVENT_AFTER_UPDATE, this._updatePopupPosition, this);
          }, this); // unparent the item template.

          this.optionItemTemplate.parent = null;

          this._updateButton();
        }

        onEnable() {
          this.node.on(Button.EventType.CLICK, this._onClick, this);
        }

        onDisable() {
          this.node.off(Button.EventType.CLICK, this._onClick, this);
        }

        onDestroy() {
          var _this$optionItemTempl;

          // Ensure the hanging nodes are destroyed to prevent leaks.
          (_this$optionItemTempl = this.optionItemTemplate) == null ? void 0 : _this$optionItemTempl.destroy();
        }

        _onClick() {
          if (!this.popup) return;

          if (!this.popup.isVisible) {
            this.showOptions();
          } else {
            this.hideOptions();
          }
        }

        _updatePopupPosition() {
          if (this.popup == null || this._popupUITransform == null || this._uiTransform == null || this.optionsContainer == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unable to create options list");
            return;
          }

          if (this._matchPopupWidth) this._popupUITransform.width = this._uiTransform.width;

          if (this._popupUITransform.height === 0) {
            this._popupUITransform.height = this.optionsContainer.node._uiProps.uiTransformComp.height;
          }

          var buttonWorldBounds = this._uiTransform.getBoundingBoxToWorld();

          var canvasBounds = this.popup._parentCanvas.node._uiProps.uiTransformComp.getBoundingBox(); // Initially set anchor to top center.


          var anchorX = 0.5;
          var anchorY = 1.0; // Set the position Y as below the button box bounds.

          var popupWorldPosY = buttonWorldBounds.yMin; // Check if popupPositionY provides enough room for the entire popup to
          // be visible at the bottom.
          // If not place above the edit box.

          if (popupWorldPosY - this._popupUITransform.height < canvasBounds.yMin) {
            // Set the anchor to the bottom.
            anchorY = 0.0;
            popupWorldPosY = buttonWorldBounds.yMax;
          }

          this._popupUITransform.setAnchorPoint(anchorX, anchorY);

          this.popup.node.setWorldPosition(v3(this.node.worldPosition.x, popupWorldPosY));
        }

        _destroyOptionList() {
          var _this$optionsContaine;

          (_this$optionsContaine = this.optionsContainer) == null ? void 0 : _this$optionsContaine.node.children.forEach(item => item.destroy());
        }

        _updateButton() {
          if (!this.node.active) return;

          if (this.optionDatas.length <= 0 || this.selectedIndex < 0) {
            if (this.buttonLabel) {
              this.buttonLabel.string = "";
              this.buttonLabel.enabled = false;
            }
          } else {
            var data = this.optionDatas[this.selectedIndex];

            if (this.buttonLabel) {
              this.buttonLabel.string = data.string;
              this.buttonLabel.enabled = !!data.string;
            }

            if (this.buttonSprite) {
              this.buttonSprite.spriteFrame = data.spriteFrame;
              this.buttonSprite.enabled = !!data.spriteFrame;
            }
          }
        }

        _createOptionsList() {
          if (this.optionItemTemplate == null || this._uiTransform == null || this.optionsContainer == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unable to create options list");
            return;
          }

          for (var index = 0; index < this.optionDatas.length; index++) {
            var data = this.optionDatas[index];
            var itemNode = instantiate(this.optionItemTemplate);
            var itemUITransform = itemNode.getComponent(UITransform);

            if (itemUITransform == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("The option item template does not have a UITransform Component.");
              return;
            }

            itemUITransform.height = this._uiTransform.height;
            var item = itemNode.getComponent(_crd && OptionItem === void 0 ? (_reportPossibleCrUseOfOptionItem({
              error: Error()
            }), OptionItem) : OptionItem);

            if (item == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("The option item template does not have a OptionItem Component.");
              return;
            }

            if (item.label) {
              item.label.string = data.string;
              item.label.enabled = !!data.string;
            }

            if (item.sprite) {
              item.sprite.spriteFrame = data.spriteFrame;
              item.sprite.enabled = !!data.spriteFrame;
            }

            item.setClickCallback(this._itemClickCallback.bind(this, index));
            this.optionsContainer.node.addChild(itemNode);
          }
        }

        _itemClickCallback(itemIndex) {
          if (this.selectedIndex !== itemIndex) {
            this.selectedIndex = itemIndex; // Emit the option changed event.

            EventHandler.emitEvents(this.optionChangedEvents, this);
            this.node.emit(OptionButton.EventType.OPTION_CHANGED, this);
          }
        }

      }, _class3.EventType = {
        OPTION_CHANGED: "option-changed"
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionChangedEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_buttonLabel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_buttonSprite", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_popup", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_optionsContainer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_optionItemTemplate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_hideOnSelected", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_matchPopupWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_optionDatas", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "buttonLabel", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "buttonLabel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "buttonSprite", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "buttonSprite"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "popup"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "optionsContainer", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "optionsContainer"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "optionItemTemplate", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "optionItemTemplate"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hideOnSelected", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "hideOnSelected"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "matchPopupWidth", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "matchPopupWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "optionDatas", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "optionDatas"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=966e7364dffeae5521ba19e98c45ac53a1c7db31.js.map