import { Component, Node, _decorator } from "cc";
import { EDITOR } from "cc/env";
import { AS } from "./ASComponent";
import { error } from "./Logger";
const { ccclass, property } = _decorator;

const tagNodes: Record<string, Set<Node> | undefined> = {};

function removeFromGroup(group: string, node: Node) {
  const bin = tagNodes[group];
  if (!bin) {
    error(`Group ${group} does not exist`);
    return;
  }
  if (bin.has(node)) bin.delete(node);
}

function addToGroup(group: string, node: Node) {
  if (!group) return;
  let bin = tagNodes[group];
  if (!bin) {
    bin = tagNodes[group] = new Set();
  }

  if (!bin.has(node)) bin.add(node);
}

@ccclass("GroupTag")
export class GroupTag extends AS(Component) {
  @property protected _tag = "";

  @property get tag() {
    return this._tag;
  }

  set tag(value) {
    if (EDITOR) {
      this._tag = value;
      return;
    }
    if (this._tag === value) return;
    if (this._tag) removeFromGroup(this._tag, this.node);
    this._tag = value;
    if (this._tag) addToGroup(this._tag, this.node);
  }

  static getNodes(tag: string) {
    return tagNodes[tag];
  }

  awake() {
    if (!this.tag) return;
    addToGroup(this.tag, this.node);
  }

  onDestroy() {
    if (!this.tag) return;
    removeFromGroup(this.tag, this.node);
  }
}
