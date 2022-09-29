import { Component, Sprite, SpriteFrame, _decorator } from "cc";
import { EDITOR } from "cc/env";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { i18n } from "./Translations";

const { ccclass, property, requireComponent } = _decorator;

@ccclass("LanguageSpriteFrame")
class LanguageSpriteFrame {
  @property language = "US";

  @property({
    type: SpriteFrame,
  })
  spriteFrame: SpriteFrame | null = null;
}

@ccclass("TranslatedSprite")
@requireComponent(Sprite)
export class TranslatedSprite extends AS(Component) {
  @property private _key = "";

  @property private spriteList = new Array<LanguageSpriteFrame>();

  private _sprite: Sprite | null = null;

  private _spriteMap: { [lang: string]: SpriteFrame | null } = {};

  @property({
    tooltip: `The key used to get the translated string.`,
  })
  get key() {
    return this._key;
  }

  get spriteFrame() {
    return this._sprite?.spriteFrame;
  }

  set key(value: string) {
    if (EDITOR) {
      this._key = value;
    } else {
      error(`Cannot set key outside the editor!`);
    }
  }

  set spriteFrame(value) {
    if (this._sprite == null || value == null) return;
    this._sprite.spriteFrame = value;
  }

  async onLoad() {
    this._sprite = this.getComponent(Sprite);
    this.spriteList.forEach((langSprite) => {
      this._spriteMap[langSprite.language] = langSprite.spriteFrame;
    });
    this.updateTranslation();
  }

  updateTranslation() {
    if (!i18n.enabled) return;
    this.spriteFrame = this._spriteMap[i18n.currentLanguage];
  }
}
