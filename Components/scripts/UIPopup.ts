import {
  BlockInputEvents,
  Canvas,
  CCObject,
  Color,
  Node,
  Sprite,
  SpriteFrame,
  UITransform,
  Widget,
  _decorator,
} from "cc";
import { ColourRect } from "./ColourRect";
import { error } from "./Logger";
import { UIView } from "./UIView";
import { findParentCanvas } from "./Utils";

const { ccclass, property, disallowMultiple } = _decorator;

@ccclass("UIPopup")
@disallowMultiple
export class UIPopup extends UIView {
  @property private _isExclusive = false;

  @property({ formerlySerializedAs: "_enableBackgroundBlur" }) private _enableBackground = false;

  @property private _blurSpriteFrame: SpriteFrame | null = null;

  @property private _blurColor = new Color(50, 50, 50, 128);

  _parentCanvas: Canvas | null = null;

  private _inputMask: Node | null = null;

  private _inputMaskView: UIView | null = null;

  @property({
    tooltip: "If enabled, the popup will not be hidden when a touch event occurs outside of it.",
  })
  get isExclusive() {
    return this._isExclusive;
  }

  @property({
    tooltip: "If enabled add a background sprite and/or color rect.",
  })
  get enableBackground() {
    return this._enableBackground;
  }

  @property({
    type: SpriteFrame,
    tooltip: "Use the given spriteframe as the background behind the popup.",
    visible: function (this: UIPopup) {
      return this.enableBackground;
    },
  })
  get blurSpriteFrame(): SpriteFrame | null {
    return this._blurSpriteFrame;
  }

  @property({
    type: Color,
    visible: function (this: UIPopup) {
      return this.enableBackground;
    },
  })
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

  set blurSpriteFrame(value: SpriteFrame | null) {
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
    if (!this._isAwakeCalled || this._parentCanvas == null || this._inputMask == null) {
      error(`The UI Popup in node:${this.node.name} not initilized.`);
      return;
    }

    if (this.isVisible || this._isAnimating) return;

    this._parentCanvas.node.addChild(this._inputMask);
    this._parentCanvas.node.addChild(this.node);
    await Promise.all([this._inputMaskView?.show(), super.show()]);
  }

  async hide() {
    if (!this._isAwakeCalled) {
      error(`The UI Popup in node:${this.node.name} not initilized.`);
      return;
    }

    if (!this.isVisible || this._isAnimating) return;

    await Promise.all([this._inputMaskView?.hide(), super.hide()]);
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
    this._inputMaskView = this._inputMask.addComponent(UIView);
    this._inputMaskView.showAnim = UIView.Animations.fadeIn;
    this._inputMaskView.showDuration = this.showDuration;
    this._inputMaskView.hideAnim = UIView.Animations.fadeOut;
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
        const blurRect = bg.addComponent(ColourRect);
        blurRect.color = this.blurColor;
      }
    }

    this._parentCanvas = findParentCanvas(this.node);
    // unparent the popup and the item template.
    const originalParent = this.node.parent;
    // Ensure this is also destroyed when parent is destroyed.
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

  private _onTouchEndMask() {
    this.hide();
  }

  private _updateExclusive() {
    if (!this._inputMask) return;
    if (!this.exclusive) {
      this._inputMask.on(Node.EventType.TOUCH_END, this._onTouchEndMask, this);
    } else {
      this._inputMask.off(Node.EventType.TOUCH_END, this._onTouchEndMask, this);
    }
  }
}
