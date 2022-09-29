import { Component, _decorator } from "cc";
import { EDITOR } from "cc/env";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { OptionButton } from "./OptionButton";
import { i18n } from "./Translations";

const { ccclass, property, requireComponent } = _decorator;

@ccclass("TranslatedOptionButton")
@requireComponent(OptionButton)
export class TranslatedOptionButton extends AS(Component) {
  @property private _key = "";

  private _optBtn: OptionButton | null = null;

  @property({
    tooltip: `The key used to get the translated string.`,
  })
  get key() {
    return this._key;
  }

  get string() {
    const strs = new Array<string>();
    if (EDITOR && this._optBtn == null) {
      this._optBtn = this.getComponent(OptionButton);
    }
    this._optBtn?.options.forEach((item) => {
      strs.push(item.string);
    });
    return JSON.stringify(strs);
  }

  set key(value: string) {
    if (EDITOR) {
      this._key = value;
    } else {
      error(`Cannot set key outside the editor!`);
    }
  }

  set string(value: string) {
    // Ignore if string not valid!
    if (!value || this._optBtn == null) return;
    const options = this._optBtn.options;
    const strs = JSON.parse(value) as Array<string>;
    if (strs == null || strs.length !== options.length) {
      error("Unable to parse option button strings!");
      return;
    }
    this._optBtn?.options.forEach((item, i) => {
      item.string = strs[i];
    });
  }

  awake() {
    this._optBtn = this.getComponent(OptionButton);
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

  // TODO: Sprites!!
}
