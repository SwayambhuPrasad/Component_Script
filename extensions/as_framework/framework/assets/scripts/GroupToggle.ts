import { Component, Toggle, _decorator } from "cc";
import { AS } from "./ASComponent";
import { GroupTag } from "./GroupTag";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("GroupToggle")
@requireComponent(Toggle)
export class GroupToggle extends AS(Component) {
  @property tag = "";

  awake() {
    this._updateToggles(this.getComponent(Toggle)!);
    this.node.on(Toggle.EventType.TOGGLE, this._updateToggles, this);
  }

  private _updateToggles(toggle: Toggle) {
    if (!this.tag) return;
    GroupTag.getNodes(this.tag)?.forEach((node) => (node.active = toggle.isChecked));
  }
}
