import { Component, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { editorUtils, UIAnimationLibrary } from "./UIAnimLibrary";
const { ccclass, property } = _decorator;

@ccclass("UIView")
export class UIView extends AS(Component) {
  static readonly EventType = {
    ABOUT_TO_SHOW: "about-to-show",
    SHOW_COMPLETE: "show-complete",
    ABOUT_TO_HIDE: "about-to-hide",
    HIDE_COMPLETE: "hide-complete",
  };

  static readonly Animations = editorUtils.enumType;

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger when view about to show.",
    displayOrder: 30,
  })
  aboutToShowEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger when view is shown.",
    displayOrder: 31,
  })
  showCompleteEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger when view about to hide.",
    displayOrder: 32,
  })
  aboutToHideEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to trigger when view is hidden.",
    displayOrder: 33,
  })
  hideCompleteEvents = new Array<EventHandler>();

  @property protected _showAnim: keyof typeof UIAnimationLibrary = "none";

  @property protected _hideAnim: keyof typeof UIAnimationLibrary = "none";

  @property protected _showDuration = 0.4;

  @property protected _hideDuration = 0.4;

  @property({ type: editorUtils.enumType, tooltip: "Choose show animation." }) get showAnim() {
    return editorUtils.enumType[this._showAnim];
  }

  @property get showDuration() {
    return this._showDuration;
  }

  @property({ type: editorUtils.enumType, tooltip: "Choose hide animation." }) get hideAnim() {
    return editorUtils.enumType[this._hideAnim];
  }

  @property get hideDuration() {
    return this._hideDuration;
  }

  get isVisible() {
    return this.node.activeInHierarchy;
  }

  set showAnim(value) {
    this._showAnim = editorUtils.getName(value);
  }

  set showDuration(value) {
    this._showDuration = value;
  }

  set hideAnim(value) {
    this._hideAnim = editorUtils.getName(value);
  }

  set hideDuration(value) {
    this._hideDuration = value;
  }

  async show() {
    if (this.isVisible || this._isAnimating) return;
    EventHandler.emitEvents(this.aboutToShowEvents, this);
    this.node.emit(UIView.EventType.ABOUT_TO_SHOW, this);
    this._isAnimating = true;
    this.node.active = true;
    await UIAnimationLibrary[this._showAnim](this.node, this._showDuration);
    this._isAnimating = false;
    EventHandler.emitEvents(this.showCompleteEvents, this);
    this.node.emit(UIView.EventType.SHOW_COMPLETE, this);
  }

  async hide() {
    if (!this.isVisible || this._isAnimating) return;
    EventHandler.emitEvents(this.aboutToHideEvents, this);
    this.node.emit(UIView.EventType.ABOUT_TO_HIDE, this);
    this._isAnimating = true;
    await UIAnimationLibrary[this._hideAnim](this.node, this._hideDuration);
    this.node.active = false;
    this._isAnimating = false;
    EventHandler.emitEvents(this.hideCompleteEvents, this);
    this.node.emit(UIView.EventType.HIDE_COMPLETE, this);
  }
}
