import { Component, Label, _decorator } from "cc";
import { EDITOR } from "cc/env";
import { AS } from "./ASComponent";
import { i18n } from "./Translations";

const { ccclass, property, requireComponent } = _decorator;

@ccclass("TranslatedLabel")
@requireComponent(Label)
export class TranslatedLabel extends AS(Component) {
  @property private _key = "";

  private _label: Label | null = null;

  @property({
    tooltip: `The key used to get the translated string.`,
  })
  get key() {
    return this._key;
  }

  get string() {
    if (EDITOR && this._label == null) {
      this._label = this.getComponent(Label);
    }
    return this._label?.string ?? "";
  }

  set key(value: string) {
    this._key = value;
  }

  set string(value: string) {
    // Ignore if string not valid!
    if (!value || this._label == null) return;
    this._label.string = value;
  }

  awake() {
    this._label = this.getComponent(Label);
    this.updateTranslation();
  }

  onEnable() {
    i18n.translationsLoadedEvent.on(this.updateTranslation, this);
  }

  onDisable() {
    i18n.translationsLoadedEvent.off(this.updateTranslation, this);
  }

  updateTranslation() {
    if (!i18n.enabled) return;
    this.string = i18n.t(this.key);
  }
}
