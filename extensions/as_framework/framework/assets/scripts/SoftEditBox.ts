import {
  Button,
  Component,
  Enum,
  EventHandler,
  KeyCode,
  Label,
  Node,
  Size,
  size,
  UITransform,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { KeyData, SoftKeypad } from "./SoftKeypad";
import { UIPopup } from "./UIPopup";

const { ccclass, property, requireComponent } = _decorator;

enum KeypadType {
  NUMERIC_FLOAT,
  NUMERIC_INT,
  NUMERIC_INT_SIGNED,
  NUMERIC_FLOAT_SIGNED,
  ALPHABET,
  ALPHA_NUMERIC,
}

@ccclass("SoftEditBox")
@requireComponent(UITransform)
@requireComponent(Button)
export class SoftEditBox extends AS(Component) {
  static readonly EventType = {
    EDITING_DID_BEGAN: "editing-did-began",
    EDITING_DID_ENDED: "editing-did-ended",
    TEXT_CHANGED: "text-changed",
  };

  static readonly KeypadType = KeypadType;

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when editing begins.",
    displayOrder: 30,
  })
  editingDidBeganEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when editing ends.",
    displayOrder: 31,
  })
  editingDidEndedEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when text changes.",
    displayOrder: 32,
  })
  textChangedEvents = new Array<EventHandler>();

  @property private _keypadType = 0;

  @property private _keySize = size(50, 50);

  @property private _textLabel: Label | null = null;

  @property private _maxLength = 4;

  @property private _keypadPopup: SoftKeypad | null = null;

  // TODO: Handle interactable.
  @property({
    type: Enum(KeypadType),
    tooltip: "The type of keypad input to use.",
  })
  get keypadType() {
    return this._keypadType;
  }

  @property({
    tooltip: `The size of each key element.`,
  })
  get keySize(): Size {
    return this._keySize;
  }

  @property
  get string() {
    return this.textLabel?.string ?? "";
  }

  @property({
    type: Label,
    tooltip: "The Label component attached to the node for the SoftEditBox's input text label.",
  })
  get textLabel() {
    return this._textLabel;
  }

  @property({
    tooltip: "The maximum number of text characters.",
  })
  get maxLength() {
    return this._maxLength;
  }

  @property({
    type: SoftKeypad,
    tooltip: "The keypad popup.",
  })
  get keypadPopup(): SoftKeypad | null {
    return this._keypadPopup;
  }

  get isKeypadVisible() {
    return this.keypadPopup?.isVisible ?? false;
  }

  get isKeypadEmpty() {
    return this.keypadPopup?.showEmpty ?? true;
  }

  set keypadType(value) {
    this._keypadType = value;
  }

  set keySize(value: Size) {
    this._keySize = value;
  }

  set string(value) {
    if (this.textLabel) this.textLabel.string = value;
  }

  set textLabel(value) {
    this._textLabel = value;
    this._updateTextLabel();
  }

  set maxLength(value) {
    this._maxLength = value;
  }

  set keypadPopup(value: SoftKeypad | null) {
    this._keypadPopup = value;
  }

  /**
   * The edit box string as a `number`.
   * @returns A `number` if the edit box string is a valid number string.
   */
  value() {
    return Number(this.string);
  }

  hideKeypad() {
    if (this.keypadPopup == null) return;
    if (!this.node.active || !this.keypadPopup.isVisible) return;
    this.keypadPopup.hide();
  }

  showKeypad() {
    if (this.keypadPopup == null) return;
    this.keypadPopup.exclusive = false;
    this.keypadPopup.showEmpty = false;
    this.keypadPopup.show();
  }

  showEmptyKeypad() {
    if (this.keypadPopup == null) return;
    this.keypadPopup.exclusive = true;
    this.keypadPopup.showEmpty = true;
    this.keypadPopup.show();
  }

  onLoad() {
    if (this.keypadPopup == null) {
      error("The keypad popup cannot be null.");
      return;
    }
    if (this.textLabel == null) {
      error("The text label cannot be null.");
      return;
    }
    this._initKeypadLayout();
    this.keypadPopup.node.on(UIPopup.EventType.HIDE_COMPLETE, this._onKeypadHidden, this);
  }

  onEnable() {
    this.node.on(Button.EventType.CLICK, this._onClick, this);
  }

  onDisable() {
    this.node.off(Button.EventType.CLICK, this._onClick, this);
  }

  private _updateTextLabel() {
    let textLabel = this._textLabel;
    // If textLabel doesn't exist, create one.
    if (!textLabel) {
      let node = this.node.getChildByName("TEXT_LABEL");
      if (!node) {
        node = new Node("TEXT_LABEL");
        node.layer = this.node.layer;
      }
      textLabel = node.getComponent(Label);
      if (!textLabel) {
        textLabel = node.addComponent(Label);
      }
      node.parent = this.node;
      this._textLabel = textLabel;
    }
  }

  // private _update

  private _initKeypadLayout() {
    if (this.keypadPopup == null) return;
    const keys: KeyData[] = [];
    switch (this.keypadType) {
      case KeypadType.NUMERIC_INT: {
        this._addIntegerKeys(keys);
        break;
      }
      case KeypadType.NUMERIC_INT_SIGNED: {
        this._addIntegerKeys(keys);
        // add - key.
        keys.push({
          char: "-",
          size: this.keySize,
          keyCode: [KeyCode.NUM_SUBTRACT, KeyCode.DASH],
          callback: this._addChar.bind(this, "-"),
        });
        break;
      }
      case KeypadType.NUMERIC_FLOAT: {
        this._addFloatKeys(keys);
        break;
      }
      case KeypadType.NUMERIC_FLOAT_SIGNED: {
        this._addFloatKeys(keys);
        // add - key.
        keys.push({
          char: "-",
          size: this.keySize,
          keyCode: [KeyCode.NUM_SUBTRACT, KeyCode.DASH],
          callback: this._addChar.bind(this, "-"),
        });
        break;
      }
      case KeypadType.ALPHABET:
      case KeypadType.ALPHA_NUMERIC:
        error("Alphanumeric Keypad not implemented!!");
      default:
        break;
    }

    keys.push({
      char: SoftKeypad.SpecialKeys.DELETE,
      size: this.keySize,
      keyCode: [KeyCode.BACKSPACE, KeyCode.DELETE],
      callback: this._onDeleteKeyClicked.bind(this),
    });

    keys.push({
      char: SoftKeypad.SpecialKeys.DONE,
      size: this.keySize,
      keyCode: [KeyCode.ENTER, KeyCode.NUM_ENTER],
      callback: this._onDoneKeyClicked.bind(this),
    });

    this.keypadPopup.keysLayout = { keys };
  }

  private _addFloatKeys(outKeys: Array<KeyData>) {
    this._addIntegerKeys(outKeys);
    // add `.` key.
    outKeys.push({
      char: ".",
      size: this.keySize,
      keyCode: [KeyCode.NUM_DECIMAL, KeyCode.PERIOD],
      callback: this._addChar.bind(this, "."),
    });
  }

  private _addIntegerKeys(outKeys: Array<KeyData>) {
    for (let i = 1; i < 10; i++) {
      // Add keys 1-9
      outKeys.push({
        char: i.toString(),
        size: this.keySize,
        keyCode: [KeyCode.NUM_0 + i, KeyCode.DIGIT_0 + i],
        callback: this._addChar.bind(this, i.toString()),
      });
    }
    // add 0 key.
    outKeys.push({
      char: "0",
      size: this.keySize,
      keyCode: [KeyCode.NUM_0, KeyCode.DIGIT_0],
      callback: this._addChar.bind(this, "0"),
    });
  }

  private _addChar(char: string) {
    if (this.string.length >= this.maxLength) return;
    if (this.keypadType === KeypadType.NUMERIC_FLOAT && isNaN(+(this.string + char))) return;
    this.string += char;
    EventHandler.emitEvents(this.textChangedEvents, this);
    this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this);
  }

  private _deleteChar() {
    this.string = this.string.slice(0, -1);
    EventHandler.emitEvents(this.textChangedEvents, this);
    this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this);
  }

  private _onClick() {
    this.showKeypad();
    EventHandler.emitEvents(this.editingDidBeganEvents, this);
    this.node.emit(SoftEditBox.EventType.EDITING_DID_BEGAN, this);
  }

  private _onDoneKeyClicked() {
    this.hideKeypad();
  }

  private _onKeypadHidden() {
    EventHandler.emitEvents(this.editingDidEndedEvents, this);
    this.node.emit(
      SoftEditBox.EventType.EDITING_DID_ENDED,
      this,
      this.isKeypadEmpty, // HACK: to handle replicated end.
    );
  }

  private _onDeleteKeyClicked() {
    this._deleteChar();
  }
}
