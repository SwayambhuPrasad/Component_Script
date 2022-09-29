import { SpriteFrame, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass("OptionData")
export class OptionData {
  @property string = "";

  @property(SpriteFrame) spriteFrame: SpriteFrame | null = null;
}
