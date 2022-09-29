import { Button, Component, EventHandler, Layout, _decorator } from "cc";
import { AS } from "./ASComponent";
import { IReplicatedEvent } from "./NetworkReplicator";
import { UIPopup } from "./UIPopup";

const { ccclass, property } = _decorator;

@ccclass("MenuController")
export class MenuController extends AS(Component) implements IReplicatedEvent {
  static readonly EventType = {
    MENU_OPEN: "menu-open",
    MENU_CLOSE: "menu-close",
    MENU_HOME: "menu-home",
    MENU_RESET: "menu-reset",
    MENU_QUESTION: "menu-question",
  };

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when menu popup is shown.",
    displayOrder: 30,
  })
  menuOpenEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when menu popup is closed.",
    displayOrder: 31,
  })
  menuCloseEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when home button is clicked.",
    displayOrder: 32,
  })
  menuHomeEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when reset button is clicked.",
    displayOrder: 33,
  })
  menuResetEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be triggered when a question button is clicked.",
    displayOrder: 34,
  })
  menuQuestionEvents = new Array<EventHandler>();

  @property protected _menuButton: Button | null = null;

  @property protected _homeButton: Button | null = null;

  @property protected _resetButton: Button | null = null;

  @property protected _crossButton: Button | null = null;

  @property protected _popup: UIPopup | null = null;

  @property protected _questionButtonsContainer: Layout | null = null;

  private _isOpen = false;

  @property({ type: Button, tooltip: "The button to show the menu popup node." })
  get menuButton() {
    return this._menuButton;
  }

  @property({ type: Button, tooltip: "The button to move the start screen." })
  get homeButton() {
    return this._homeButton;
  }

  @property({ type: Button, tooltip: "The button to reset the current screen." })
  get resetButton() {
    return this._resetButton;
  }

  @property({ type: Button, tooltip: "The button to hide the menu popup node." })
  get crossButton() {
    return this._crossButton;
  }

  @property({ type: UIPopup, tooltip: "The menu popup component." }) get popup() {
    return this._popup;
  }

  @property({
    type: Layout,
    tooltip: "The layout component whose child buttons are used to move to a question screen.",
  })
  get questionButtonsContainer() {
    return this._questionButtonsContainer;
  }

  get isOpen() {
    return this._isOpen;
  }

  set menuButton(value) {
    this._menuButton = value;
  }

  set homeButton(value) {
    this._homeButton = value;
  }

  set resetButton(value) {
    this._resetButton = value;
  }

  set crossButton(value) {
    this._crossButton = value;
  }

  set popup(value) {
    this._popup = value;
  }

  set questionButtonsContainer(value) {
    this._questionButtonsContainer = value;
  }

  set isOpen(value: boolean) {
    if (this._isOpen === value) return;
    this._isOpen = value;
    if (this._isOpen) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  hideMenu() {
    this.popup?.hide();
  }

  showMenu() {
    this.popup?.show();
  }

  onEnable() {
    this.menuButton?.node.on(Button.EventType.CLICK, this._onMenuButtonClicked, this);
    this.crossButton?.node.on(Button.EventType.CLICK, this._onCrossButtonClicked, this);
    this.homeButton?.node.on(Button.EventType.CLICK, this._onHomeButtonClicked, this);
    this.resetButton?.node.on(Button.EventType.CLICK, this._onResetButtonClicked, this);
    this.questionButtonsContainer?.node.children.forEach((button) => {
      button.on(Button.EventType.CLICK, this._onQuestionButtonClicked, this);
    });
    this.popup?.node.on(UIPopup.EventType.HIDE_COMPLETE, this._onPopupHide, this);
    this.popup?.node.on(UIPopup.EventType.SHOW_COMPLETE, this._onPopupShow, this);
  }

  onDisable() {
    this.menuButton?.node.off(Button.EventType.CLICK, this._onMenuButtonClicked, this);
    this.crossButton?.node.off(Button.EventType.CLICK, this._onCrossButtonClicked, this);
    this.homeButton?.node.off(Button.EventType.CLICK, this._onHomeButtonClicked, this);
    this.resetButton?.node.off(Button.EventType.CLICK, this._onResetButtonClicked, this);
    this.questionButtonsContainer?.node.children.forEach((button) => {
      button.off(Button.EventType.CLICK, this._onQuestionButtonClicked, this);
    });
    this.popup?.node.on(UIPopup.EventType.HIDE_COMPLETE, this._onPopupHide, this);
    this.popup?.node.on(UIPopup.EventType.SHOW_COMPLETE, this._onPopupShow, this);

    this.hideMenu();
  }

  getStateData() {
    return this._isOpen;
  }

  updateStateData(data: boolean) {
    if (data) this.showMenu();
    else this.hideMenu();
  }

  private _onMenuButtonClicked() {
    this.showMenu();
    EventHandler.emitEvents(this.menuOpenEvents, this);
    this.node.emit(MenuController.EventType.MENU_OPEN, this);
  }

  private _onCrossButtonClicked() {
    this.hideMenu();
    EventHandler.emitEvents(this.menuCloseEvents, this);
    this.node.emit(MenuController.EventType.MENU_CLOSE, this);
  }

  private _onHomeButtonClicked() {
    this.hideMenu();
    EventHandler.emitEvents(this.menuHomeEvents, this);
    this.node.emit(MenuController.EventType.MENU_HOME, this);
  }

  private _onResetButtonClicked() {
    this.hideMenu();
    EventHandler.emitEvents(this.menuResetEvents, this);
    this.node.emit(MenuController.EventType.MENU_RESET, this);
  }

  private _onQuestionButtonClicked(button: Button) {
    this.hideMenu();
    const index = button.node.getSiblingIndex();
    EventHandler.emitEvents(this.menuQuestionEvents, index + 1);
    this.node.emit(MenuController.EventType.MENU_QUESTION, index + 1);
  }

  private _onPopupHide() {
    this._isOpen = false;
    if (this.menuButton) this.menuButton.node.active = true;
  }

  private _onPopupShow() {
    this._isOpen = true;
    if (this.menuButton) this.menuButton.node.active = false;
  }
}
