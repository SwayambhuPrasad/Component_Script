import {
  Button,
  Component,
  EventKeyboard,
  KeyCode,
  Label,
  systemEvent,
  SystemEvent,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";

const { ccclass, property, requireComponent } = _decorator;

export type KeyCallback = () => void;

@ccclass("SoftKey")
@requireComponent(Button)
export class SoftKey extends AS(Component) {
  @property private _keyLabel: Label | null = null;

  private _keyCodes = new Array<KeyCode>();

  @property(Label)
  get keyLabel() {
    return this._keyLabel;
  }

  @property
  get string(): string {
    return this.keyLabel?.string ?? "";
  }

  get button() {
    return this.getComponent(Button);
  }

  set keyLabel(value) {
    this._keyLabel = value;
  }

  set string(value: string) {
    if (this.keyLabel) this.keyLabel.string = value;
  }

  setClickCallback(fn: KeyCallback, keyCode?: KeyCode | KeyCode[]) {
    this._clickCallback = fn;
    if (keyCode) this._keyCodes = this._keyCodes.concat(keyCode);
    this.node.on(Button.EventType.CLICK, this._clickCallback);
  }

  onEnable() {
    this.node.on(Button.EventType.CLICK, this._clickCallback);
    if (this._keyCodes.length > 0) {
      systemEvent.on(SystemEvent.EventType.KEY_DOWN, this._onSystemKeyDown, this);
    }
  }

  onDisable() {
    this.node.off(Button.EventType.CLICK, this._clickCallback);
    if (this._keyCodes.length > 0) {
      systemEvent.off(SystemEvent.EventType.KEY_DOWN, this._onSystemKeyDown, this);
    }
  }

  private _clickCallback: KeyCallback = () => {};

  private _onSystemKeyDown(event: EventKeyboard) {
    if (this._keyCodes.indexOf(event.keyCode) !== -1) {
      this._clickCallback();
    }
  }
}
