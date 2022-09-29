import {
  Button,
  Component,
  Director,
  director,
  EventHandler,
  instantiate,
  Label,
  Layout,
  Node,
  Sprite,
  UITransform,
  v3,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { OptionData } from "./OptionData";
import { OptionItem } from "./OptionItem";
import { UIPopup } from "./UIPopup";

const { ccclass, property, requireComponent } = _decorator;

@ccclass("OptionButton")
@requireComponent(UITransform)
@requireComponent(Button)
export class OptionButton extends AS(Component) {
  static readonly EventType = { OPTION_CHANGED: "option-changed" };

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when selected option is changed.",
    displayOrder: 30,
  })
  optionChangedEvents = new Array<EventHandler>();

  @property private _buttonLabel: Label | null = null;

  @property private _buttonSprite: Sprite | null = null;

  @property private _popup: UIPopup | null = null;

  @property private _optionsContainer: Layout | null = null;

  @property private _optionItemTemplate: Node | null = null;

  @property private _hideOnSelected = true;

  @property private _matchPopupWidth = true;

  @property private _optionDatas = new Array<OptionData>();

  private _uiTransform: UITransform | null = null;

  private _popupUITransform: UITransform | null = null;

  private _selectedIndex = -1;

  /**
   * The label to show the selected option text.
   */
  @property({
    type: Label,
    tooltip: "The label to show the selected option text.",
  })
  get buttonLabel() {
    return this._buttonLabel;
  }

  @property({
    type: Sprite,
    tooltip: "The sprite to show the selected option spriteFrame.",
  })
  get buttonSprite() {
    return this._buttonSprite;
  }

  @property({
    type: UIPopup,
    tooltip: "The node used as popup.",
  })
  get popup() {
    return this._popup;
  }

  @property({
    type: Layout,
    tooltip: "The layout used as a parent for the option items.",
  })
  get optionsContainer() {
    return this._optionsContainer;
  }

  @property({
    type: Node,
    tooltip: "The template used for each option item.",
  })
  get optionItemTemplate() {
    return this._optionItemTemplate;
  }

  @property({
    tooltip: "Set to true if you want to hide the drop down on option selected.",
  })
  get hideOnSelected() {
    return this._hideOnSelected;
  }

  @property({ tooltip: `If true ensures popup width is same as button width.` })
  get matchPopupWidth() {
    return this._matchPopupWidth;
  }

  @property({
    type: [OptionData],
    tooltip: "Array of string and spriteframe data for each option.",
  })
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

  set selectedIndex(value: number) {
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

  set options(value: OptionData[]) {
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
    this.popup?.show();
  }

  /**
   * Manually hide the options popup.
   */
  hideOptions() {
    this.popup?.hide();
  }

  onLoad() {
    if (this.popup == null) {
      error(`The popup cannot be null`);
      return;
    }
    if (this.optionItemTemplate == null) {
      error(`The option item template must be a valid node.`);
      return;
    }
    if (this.optionsContainer == null) {
      error(`The options container cannot be null.`);
      return;
    }

    this._uiTransform = this.getComponent(UITransform);
    this._popupUITransform = this.popup.getComponent(UITransform);

    this.popup.node.on(UIPopup.EventType.HIDE_COMPLETE, this._destroyOptionList, this);

    this.popup.node.on(
      UIPopup.EventType.ABOUT_TO_SHOW,
      () => {
        this._destroyOptionList();
        this._createOptionsList();
        this.optionsContainer!.updateLayout();
        director.once(Director.EVENT_AFTER_UPDATE, this._updatePopupPosition, this);
      },
      this,
    );

    // unparent the item template.
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
    // Ensure the hanging nodes are destroyed to prevent leaks.
    this.optionItemTemplate?.destroy();
  }

  private _onClick() {
    if (!this.popup) return;
    if (!this.popup.isVisible) {
      this.showOptions();
    } else {
      this.hideOptions();
    }
  }

  private _updatePopupPosition() {
    if (
      this.popup == null ||
      this._popupUITransform == null ||
      this._uiTransform == null ||
      this.optionsContainer == null
    ) {
      error("Unable to create options list");
      return;
    }
    if (this._matchPopupWidth) this._popupUITransform.width = this._uiTransform.width;
    if (this._popupUITransform.height === 0) {
      this._popupUITransform.height = this.optionsContainer.node._uiProps.uiTransformComp!.height;
    }
    const buttonWorldBounds = this._uiTransform.getBoundingBoxToWorld();
    const canvasBounds = this.popup._parentCanvas!.node._uiProps.uiTransformComp!.getBoundingBox();
    // Initially set anchor to top center.
    let anchorX = 0.5;
    let anchorY = 1.0;
    // Set the position Y as below the button box bounds.
    let popupWorldPosY = buttonWorldBounds.yMin;
    // Check if popupPositionY provides enough room for the entire popup to
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

  private _destroyOptionList() {
    this.optionsContainer?.node.children.forEach((item) => item.destroy());
  }

  private _updateButton() {
    if (!this.node.active) return;
    if (this.optionDatas.length <= 0 || this.selectedIndex < 0) {
      if (this.buttonLabel) {
        this.buttonLabel.string = "";
        this.buttonLabel.enabled = false;
      }
    } else {
      const data = this.optionDatas[this.selectedIndex];
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

  private _createOptionsList() {
    if (
      this.optionItemTemplate == null ||
      this._uiTransform == null ||
      this.optionsContainer == null
    ) {
      error("Unable to create options list");
      return;
    }
    for (let index = 0; index < this.optionDatas.length; index++) {
      const data = this.optionDatas[index];
      const itemNode = instantiate(this.optionItemTemplate);
      const itemUITransform = itemNode.getComponent(UITransform);
      if (itemUITransform == null) {
        error("The option item template does not have a UITransform Component.");
        return;
      }
      itemUITransform.height = this._uiTransform.height;
      const item = itemNode.getComponent(OptionItem);
      if (item == null) {
        error("The option item template does not have a OptionItem Component.");
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

  private _itemClickCallback(itemIndex: number) {
    if (this.selectedIndex !== itemIndex) {
      this.selectedIndex = itemIndex;
      // Emit the option changed event.
      EventHandler.emitEvents(this.optionChangedEvents, this);
      this.node.emit(OptionButton.EventType.OPTION_CHANGED, this);
    }
  }
}
