import { Button, Component, Label, Sprite, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";

const { ccclass, property, requireComponent } = _decorator;

type ClickCallbackFunction = (button?: Button) => void;

@ccclass("OptionItem")
@requireComponent(Button)
export class OptionItem extends AS(Component) {
  @property private _label: Label | null = null;

  @property private _sprite: Sprite | null = null;

  private _button: Button | null = null;

  @property(Label) get label() {
    return this._label;
  }

  @property(Sprite) get sprite() {
    return this._sprite;
  }

  get button() {
    return this._button;
  }

  set label(value) {
    this._label = value;
  }

  set sprite(value) {
    this._sprite = value;
  }

  setClickCallback(fn: ClickCallbackFunction) {
    this._onClickCallback = fn;
    this.node.on(Button.EventType.CLICK, this._onClickCallback);
  }

  onEnable() {
    this.node.on(Button.EventType.CLICK, this._onClickCallback);
  }

  onDisable() {
    this.node.off(Button.EventType.CLICK, this._onClickCallback);
  }

  awake() {
    this._button = this.getComponent(Button);
    if (this._button == null) {
      error("Option item button cannot be null.");
    }
  }

  private _onClickCallback: ClickCallbackFunction = () => {};
}
