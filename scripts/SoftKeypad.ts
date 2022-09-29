import {
  Director,
  director,
  instantiate,
  KeyCode,
  Layout,
  Node,
  Prefab,
  Size,
  size,
  UITransform,
  v3,
  _decorator,
} from "cc";
import { error } from "./Logger";
import { KeyCallback, SoftKey } from "./SoftKey";
import { UIPopup } from "./UIPopup";

const { ccclass, property } = _decorator;

export interface KeyData {
  char: string;
  size: Size;
  keyCode?: KeyCode | KeyCode[];
  callback: KeyCallback;
}

export interface KeysLayout {
  keys: KeyData[];
  // rows: number;
}

enum SpecialKeys {
  DONE = "DONE",
  DELETE = "DELETE",
}

const SCREEN_PADDING_X = 10;
const SCREEN_PADDING_Y = 10;

@ccclass("SoftKeypad")
export class SoftKeypad extends UIPopup {
  static readonly SpecialKeys = SpecialKeys;

  @property private _keysContainer: Layout | null = null;

  @property private _arrow: Node | null = null;

  @property private _keyPrefab: Prefab | null = null;

  @property private _deleteKeyPrefab: Prefab | null = null;

  @property private _doneKeyPrefab: Prefab | null = null;

  @property private _emptyContentPrefab: Prefab | null = null;

  private _uiTransform: UITransform | null = null;

  private _editBoxUITransform: UITransform | null = null;

  private _keysContainerUI: UITransform | null = null;

  private _arrowSize = size();

  private _showEmpty = false;

  private _keysLayout: KeysLayout = { keys: [] };

  @property({
    type: Layout,
    tooltip: "The layout node that is used to hold the keys.",
  })
  get keysContainer() {
    return this._keysContainer;
  }

  @property({
    type: Node,
    tooltip: "The node with the arrow sprite.",
  })
  get arrow() {
    return this._arrow;
  }

  @property({
    type: Prefab,
    tooltip: "The prefab used to instantiate keys.",
  })
  get keyPrefab() {
    return this._keyPrefab;
  }

  @property({
    type: Prefab,
    tooltip: "The prefab used to instantiate delete key.",
  })
  get deleteKeyPrefab() {
    return this._deleteKeyPrefab;
  }

  @property({
    type: Prefab,
    tooltip: "The prefab used to instantiate done key.",
  })
  get doneKeyPrefab() {
    return this._doneKeyPrefab;
  }

  @property({
    type: Prefab,
    tooltip: "The prefab used when empty keypad is shown",
  })
  get emptyContentPrefab() {
    return this._emptyContentPrefab;
  }

  get showEmpty() {
    return this._showEmpty;
  }

  get keysLayout() {
    return this._keysLayout;
  }

  set keysContainer(value) {
    this._keysContainer = value;
  }

  set arrow(value) {
    this._arrow = value;
  }

  set keyPrefab(value) {
    this._keyPrefab = value;
  }

  set deleteKeyPrefab(value) {
    this._deleteKeyPrefab = value;
  }

  set doneKeyPrefab(value) {
    this._doneKeyPrefab = value;
  }

  set emptyContentPrefab(value) {
    this._emptyContentPrefab = value;
  }

  set showEmpty(value: boolean) {
    this._showEmpty = value;
  }

  set keysLayout(value: KeysLayout) {
    this._keysLayout = value;
  }

  awake() {
    if (
      !this.keysContainer ||
      !this.arrow ||
      !this.keyPrefab ||
      !this.deleteKeyPrefab ||
      !this.doneKeyPrefab ||
      !this.emptyContentPrefab
    ) {
      error("Required properties not set in SoftKeypad!");
      return;
    }

    this._uiTransform = this.getComponent(UITransform);
    // Get the parent UITransform which should be that of the editbox.
    if (this.node.parent == null) {
      error("The parent node cannot null.");
      return;
    }
    this._editBoxUITransform = this.node.parent.getComponent(UITransform);

    const arrowUITransform = this.arrow.getComponent(UITransform);
    if (arrowUITransform == null) {
      error("The arrow node must have a UITransform.");
      return;
    }
    this._arrowSize = arrowUITransform.contentSize;
    this._keysContainerUI = this.keysContainer.getComponent(UITransform);

    super.awake();

    this.node.on(UIPopup.EventType.HIDE_COMPLETE, this._destroyKeys, this);
    this.node.on(
      UIPopup.EventType.ABOUT_TO_SHOW,
      () => {
        this._destroyKeys();
        this._createKeys();
        director.once(Director.EVENT_AFTER_UPDATE, this._updatePopupPosition, this);
      },
      this,
    );
  }

  private _calculatePopupSize() {
    if (this.keysContainer == null || this._keysContainerUI == null) return size();
    this.keysContainer.updateLayout(true);
    let width = this.keysContainer.paddingLeft + this.keysContainer.paddingRight;
    let height = this.keysContainer.paddingBottom + this.keysContainer.paddingTop;

    if (this.showEmpty) {
      // Get the empty content node added.
      const emptyNode = this.keysContainer.node.children[0];
      const emptyNodeSize = emptyNode._uiProps.uiTransformComp!.contentSize;
      width += emptyNodeSize.width;
      height += emptyNodeSize.height;
      return size(width, height);
    }
    const baseSize = this.keysLayout.keys.reduce((acc, key) => {
      if (key.size.width > acc.width) acc.width = key.size.width;
      if (key.size.height > acc.height) acc.height = key.size.height;
      return acc;
    }, size(0, 0));
    const keyCount = this.keysContainer.node.children.length;

    if (keyCount === 0) {
      return size(width, height);
    }

    if (
      this.keysContainer.constraint === Layout.Constraint.FIXED_COL &&
      this.keysContainer.startAxis === Layout.AxisDirection.HORIZONTAL
    ) {
      // Only update the width.
      let numCol = this.keysContainer.constraintNum;
      if (keyCount < numCol) {
        numCol = keyCount;
      }
      width += (numCol - 1) * this.keysContainer.spacingX;
      width += numCol * baseSize.width;
      return size(width, this._keysContainerUI.height);
    }
    if (
      this.keysContainer.constraint === Layout.Constraint.FIXED_ROW &&
      this.keysContainer.startAxis === Layout.AxisDirection.VERTICAL
    ) {
      // Only update height.
      let numRow = this.keysContainer.constraintNum;
      if (keyCount < numRow) {
        numRow = keyCount;
      }

      height += (numRow - 1) * this.keysContainer.spacingY;
      height += numRow * baseSize.height;
      return size(this._keysContainerUI.width, height);
    }

    return this._keysContainerUI.contentSize;
  }

  private _updatePopupPosition() {
    if (
      this._editBoxUITransform == null ||
      this._uiTransform == null ||
      this._keysContainerUI == null ||
      this.arrow == null
    )
      return;
    const editBoxWorldBounds = this._editBoxUITransform.getBoundingBoxToWorld();
    // Resize the keypad based on the layout.
    // Update the layout and background.
    // Get the width needed.
    const popupSize = (this._uiTransform.contentSize = this._calculatePopupSize());
    this._keysContainerUI.contentSize = popupSize;
    const canvasBounds = this._parentCanvas!.node._uiProps.uiTransformComp!.getBoundingBox();

    // Initially set anchor to bottom center.
    let anchorX = 0.5;
    let anchorY = 0.0;

    // Set the position Y as above the edit box bounds.
    let arrowRot = 180;
    let popupWorldPosY = editBoxWorldBounds.yMax + this._arrowSize.height;
    // Check if popupPositionY provides enough room for the entire popup to
    // be visible at the top.
    // If not place below the edit box.
    if (popupWorldPosY + popupSize.height > canvasBounds.yMax - SCREEN_PADDING_Y) {
      // Set the anchor to the top.
      anchorY = 1.0;
      arrowRot = 0;
      popupWorldPosY = editBoxWorldBounds.yMin - this._arrowSize.height;
    }
    // Set the position X as the edit box bounds center X.
    const popupWorldPosX = editBoxWorldBounds.center.x;
    // Check if enough space to the right of the popup. If not move the
    // popup to the left.
    if (popupWorldPosX + 0.5 * popupSize.width > canvasBounds.xMax - SCREEN_PADDING_X) {
      // NOTE: Assuming editbox center is inside screen.
      const widthAvailable = canvasBounds.width - SCREEN_PADDING_X - popupWorldPosX;
      anchorX = 1 - widthAvailable / popupSize.width;
    }
    // Check if enough space to the left of the popup.
    // If not move the popup to the right.
    else if (popupWorldPosX - 0.5 * popupSize.width < SCREEN_PADDING_X) {
      const widthAvailable = popupWorldPosX - SCREEN_PADDING_X;
      anchorX = widthAvailable / popupSize.width;
    }

    this._uiTransform.setAnchorPoint(anchorX, anchorY);
    this._keysContainerUI.setAnchorPoint(anchorX, anchorY);
    this.node.worldPosition = v3(popupWorldPosX, popupWorldPosY);
    this.arrow.angle = -arrowRot;
  }

  private _destroyKeys() {
    if (this.keysContainer == null) return;
    this.keysContainer.node.children.forEach((key) => {
      key.destroy();
    });
  }

  private _createKeys() {
    if (this._showEmpty) {
      if (this.emptyContentPrefab == null) {
        error(`Cannot add empty content. Prefab is null.`);
        return;
      }
      const emptyNode = instantiate(this.emptyContentPrefab);
      this.keysContainer?.node.addChild(emptyNode);
    } else this.keysLayout.keys.forEach(this._addSoftKey, this);
  }

  // Helper functions to setup keys.
  private _addSoftKey(keyData: KeyData) {
    if (this.keysContainer == null) return;
    let keyNode: Node;
    switch (keyData.char) {
      case SoftKeypad.SpecialKeys.DELETE: {
        if (this.deleteKeyPrefab == null) {
          error(`Cannot add key: ${keyData.char}. Prefab is null.`);
          return;
        }
        keyNode = instantiate(this.deleteKeyPrefab);
        break;
      }
      case SoftKeypad.SpecialKeys.DONE: {
        if (this.doneKeyPrefab == null) {
          error(`Cannot add key: ${keyData.char}. Prefab is null.`);
          return;
        }
        keyNode = instantiate(this.doneKeyPrefab);
        break;
      }
      default: {
        if (this.keyPrefab == null) {
          error(`Cannot add key: ${keyData.char}. Prefab is null.`);
          return;
        }
        keyNode = instantiate(this.keyPrefab);
        break;
      }
    }
    const softKey = keyNode.getComponent(SoftKey);
    if (softKey == null) {
      error("The key prefab must have the SoftKey component.");
      return;
    }
    softKey.string = keyData.char;

    keyNode.name = `softKey_${keyData.char}`;
    const keyUITransform = keyNode.getComponent(UITransform);
    if (keyUITransform == null) {
      error("The key prefab must have the UITransform component.");
      return;
    }
    // Set the size of the key.
    keyUITransform.setContentSize(keyData.size);
    // Connect the click event.
    softKey.setClickCallback(keyData.callback, keyData.keyCode);
    this.keysContainer.node.addChild(keyNode);
  }
}
