System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockInputEvents, CCObject, Color, Node, Sprite, SpriteFrame, UITransform, Widget, _decorator, ColourRect, error, UIView, findParentCanvas, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, disallowMultiple, UIPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfColourRect(extras) {
    _reporterNs.report("ColourRect", "./ColourRect", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOffindParentCanvas(extras) {
    _reporterNs.report("findParentCanvas", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      BlockInputEvents = _cc.BlockInputEvents;
      CCObject = _cc.CCObject;
      Color = _cc.Color;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ColourRect = _unresolved_2.ColourRect;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      UIView = _unresolved_4.UIView;
    }, function (_unresolved_5) {
      findParentCanvas = _unresolved_5.findParentCanvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b092aDJ+hBMVaIUoB5908hd", "UIPopup", undefined);

      ({
        ccclass,
        property,
        disallowMultiple
      } = _decorator);

      _export("UIPopup", UIPopup = (_dec = ccclass("UIPopup"), _dec2 = property({
        formerlySerializedAs: "_enableBackgroundBlur"
      }), _dec3 = property({
        tooltip: "If enabled, the popup will not be hidden when a touch event occurs outside of it."
      }), _dec4 = property({
        tooltip: "If enabled add a background sprite and/or color rect."
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: "Use the given spriteframe as the background behind the popup.",
        visible: function () {
          return this.enableBackground;
        }
      }), _dec6 = property({
        type: Color,
        visible: function () {
          return this.enableBackground;
        }
      }), _dec(_class = disallowMultiple(_class = (_class2 = class UIPopup extends (_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
        error: Error()
      }), UIView) : UIView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_isExclusive", _descriptor, this);

          _initializerDefineProperty(this, "_enableBackground", _descriptor2, this);

          _initializerDefineProperty(this, "_blurSpriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "_blurColor", _descriptor4, this);

          this._parentCanvas = null;
          this._inputMask = null;
          this._inputMaskView = null;
        }

        get isExclusive() {
          return this._isExclusive;
        }

        get enableBackground() {
          return this._enableBackground;
        }

        get blurSpriteFrame() {
          return this._blurSpriteFrame;
        }

        get blurColor() {
          return this._blurColor;
        }

        get exclusive() {
          return this._isExclusive;
        }

        set isExclusive(value) {
          if (this._isExclusive === value) return;
          this._isExclusive = value;

          this._updateExclusive();
        }

        set enableBackground(value) {
          this._enableBackground = value;
        }

        set blurSpriteFrame(value) {
          this._blurSpriteFrame = value;
        }

        set blurColor(value) {
          this._blurColor = value;
        }

        set exclusive(value) {
          if (this._isExclusive === value) return;
          this._isExclusive = value;

          this._updateExclusive();
        }

        async show() {
          var _this$_inputMaskView;

          if (!this._isAwakeCalled || this._parentCanvas == null || this._inputMask == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`The UI Popup in node:${this.node.name} not initilized.`);
            return;
          }

          if (this.isVisible || this._isAnimating) return;

          this._parentCanvas.node.addChild(this._inputMask);

          this._parentCanvas.node.addChild(this.node);

          await Promise.all([(_this$_inputMaskView = this._inputMaskView) == null ? void 0 : _this$_inputMaskView.show(), super.show()]);
        }

        async hide() {
          var _this$_inputMaskView2;

          if (!this._isAwakeCalled) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`The UI Popup in node:${this.node.name} not initilized.`);
            return;
          }

          if (!this.isVisible || this._isAnimating) return;
          await Promise.all([(_this$_inputMaskView2 = this._inputMaskView) == null ? void 0 : _this$_inputMaskView2.hide(), super.hide()]);
          if (this._parentCanvas == null || this._inputMask == null) return;

          this._parentCanvas.node.removeChild(this._inputMask);

          this._parentCanvas.node.removeChild(this.node);
        }

        onEnable() {
          this._updateExclusive();
        }

        onDisable() {
          this._updateExclusive();
        }

        awake() {
          // Mark this as a floating popup for layout
          // const uiElement = this.getComponent(UIElement);
          // if (uiElement) uiElement._setIsFloating(true);
          // Create an input mask node.
          this._inputMask = new Node("InputMask");
          this._inputMask.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          this._inputMask.layer = this.node.layer;

          this._inputMask.addComponent(UITransform);

          this._inputMask.addComponent(BlockInputEvents);

          this._inputMaskView = this._inputMask.addComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);
          this._inputMaskView.showAnim = (_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView).Animations.fadeIn;
          this._inputMaskView.showDuration = this.showDuration;
          this._inputMaskView.hideAnim = (_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView).Animations.fadeOut;
          this._inputMaskView.hideDuration = this.hideDuration;

          const inputMaskWidget = this._inputMask.addComponent(Widget);

          inputMaskWidget.isAlignBottom = true;
          inputMaskWidget.bottom = 0;
          inputMaskWidget.isAlignTop = true;
          inputMaskWidget.top = 0;
          inputMaskWidget.isAlignRight = true;
          inputMaskWidget.right = 0;
          inputMaskWidget.isAlignLeft = true;
          inputMaskWidget.left = 0;
          inputMaskWidget.alignMode = Widget.AlignMode.ALWAYS;

          if (this.enableBackground) {
            const bg = new Node("Background");
            bg.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
            bg.layer = this.node.layer;
            bg.addComponent(UITransform);
            const bgWidget = bg.addComponent(Widget);
            bgWidget.isAlignBottom = true;
            bgWidget.bottom = 0;
            bgWidget.isAlignTop = true;
            bgWidget.top = 0;
            bgWidget.isAlignRight = true;
            bgWidget.right = 0;
            bgWidget.isAlignLeft = true;
            bgWidget.left = 0;
            bgWidget.alignMode = Widget.AlignMode.ALWAYS;

            this._inputMask.addChild(bg);

            if (this.blurSpriteFrame) {
              const blurSprite = bg.addComponent(Sprite);
              blurSprite.spriteFrame = this.blurSpriteFrame;
              blurSprite.color = this.blurColor;
            } else {
              const blurRect = bg.addComponent(_crd && ColourRect === void 0 ? (_reportPossibleCrUseOfColourRect({
                error: Error()
              }), ColourRect) : ColourRect);
              blurRect.color = this.blurColor;
            }
          }

          this._parentCanvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(this.node); // unparent the popup and the item template.

          const originalParent = this.node.parent; // Ensure this is also destroyed when parent is destroyed.

          if (originalParent) {
            originalParent.on(Node.EventType.NODE_DESTROYED, this.node.destroy, this);
            originalParent.on(Node.EventType.NODE_DESTROYED, this._inputMask.destroy, this);
          }

          this.node.parent = null;
          this.node.active = false;
          this._inputMask.active = false;
          this._inputMask.parent = null;

          this._updateExclusive();

          this.node.active = false;
        }

        _onTouchEndMask() {
          this.hide();
        }

        _updateExclusive() {
          if (!this._inputMask) return;

          if (!this.exclusive) {
            this._inputMask.on(Node.EventType.TOUCH_END, this._onTouchEndMask, this);
          } else {
            this._inputMask.off(Node.EventType.TOUCH_END, this._onTouchEndMask, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isExclusive", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_enableBackground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_blurSpriteFrame", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_blurColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(50, 50, 50, 128);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isExclusive", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isExclusive"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableBackground", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "enableBackground"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "blurSpriteFrame", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "blurSpriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "blurColor", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "blurColor"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9017b906b2d9516858583d75dff5954f702d7b5.js.map