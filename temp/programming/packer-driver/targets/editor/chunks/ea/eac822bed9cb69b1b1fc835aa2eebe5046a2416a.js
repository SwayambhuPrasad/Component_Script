System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, EventHandler, Layout, _decorator, AS, UIPopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _crd, ccclass, property, MenuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReplicatedEvent(extras) {
    _reporterNs.report("IReplicatedEvent", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "./UIPopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Layout = _cc.Layout;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIPopup = _unresolved_3.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7df95VGmk1ItbmeppnmashS", "MenuController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuController", MenuController = (_dec = ccclass("MenuController"), _dec2 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when menu popup is shown.",
        displayOrder: 30
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when menu popup is closed.",
        displayOrder: 31
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when home button is clicked.",
        displayOrder: 32
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when reset button is clicked.",
        displayOrder: 33
      }), _dec6 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when a question button is clicked.",
        displayOrder: 34
      }), _dec7 = property({
        type: Button,
        tooltip: "The button to show the menu popup node."
      }), _dec8 = property({
        type: Button,
        tooltip: "The button to move the start screen."
      }), _dec9 = property({
        type: Button,
        tooltip: "The button to reset the current screen."
      }), _dec10 = property({
        type: Button,
        tooltip: "The button to hide the menu popup node."
      }), _dec11 = property({
        type: _crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
          error: Error()
        }), UIPopup) : UIPopup,
        tooltip: "The menu popup component."
      }), _dec12 = property({
        type: Layout,
        tooltip: "The layout component whose child buttons are used to move to a question screen."
      }), _dec(_class = (_class2 = (_class3 = class MenuController extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "menuOpenEvents", _descriptor, this);

          _initializerDefineProperty(this, "menuCloseEvents", _descriptor2, this);

          _initializerDefineProperty(this, "menuHomeEvents", _descriptor3, this);

          _initializerDefineProperty(this, "menuResetEvents", _descriptor4, this);

          _initializerDefineProperty(this, "menuQuestionEvents", _descriptor5, this);

          _initializerDefineProperty(this, "_menuButton", _descriptor6, this);

          _initializerDefineProperty(this, "_homeButton", _descriptor7, this);

          _initializerDefineProperty(this, "_resetButton", _descriptor8, this);

          _initializerDefineProperty(this, "_crossButton", _descriptor9, this);

          _initializerDefineProperty(this, "_popup", _descriptor10, this);

          _initializerDefineProperty(this, "_questionButtonsContainer", _descriptor11, this);

          this._isOpen = false;
        }

        get menuButton() {
          return this._menuButton;
        }

        get homeButton() {
          return this._homeButton;
        }

        get resetButton() {
          return this._resetButton;
        }

        get crossButton() {
          return this._crossButton;
        }

        get popup() {
          return this._popup;
        }

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

        set isOpen(value) {
          if (this._isOpen === value) return;
          this._isOpen = value;

          if (this._isOpen) {
            this.showMenu();
          } else {
            this.hideMenu();
          }
        }

        hideMenu() {
          var _this$popup;

          (_this$popup = this.popup) == null ? void 0 : _this$popup.hide();
        }

        showMenu() {
          var _this$popup2;

          (_this$popup2 = this.popup) == null ? void 0 : _this$popup2.show();
        }

        onEnable() {
          var _this$menuButton, _this$crossButton, _this$homeButton, _this$resetButton, _this$questionButtons, _this$popup3, _this$popup4;

          (_this$menuButton = this.menuButton) == null ? void 0 : _this$menuButton.node.on(Button.EventType.CLICK, this._onMenuButtonClicked, this);
          (_this$crossButton = this.crossButton) == null ? void 0 : _this$crossButton.node.on(Button.EventType.CLICK, this._onCrossButtonClicked, this);
          (_this$homeButton = this.homeButton) == null ? void 0 : _this$homeButton.node.on(Button.EventType.CLICK, this._onHomeButtonClicked, this);
          (_this$resetButton = this.resetButton) == null ? void 0 : _this$resetButton.node.on(Button.EventType.CLICK, this._onResetButtonClicked, this);
          (_this$questionButtons = this.questionButtonsContainer) == null ? void 0 : _this$questionButtons.node.children.forEach(button => {
            button.on(Button.EventType.CLICK, this._onQuestionButtonClicked, this);
          });
          (_this$popup3 = this.popup) == null ? void 0 : _this$popup3.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._onPopupHide, this);
          (_this$popup4 = this.popup) == null ? void 0 : _this$popup4.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE, this._onPopupShow, this);
        }

        onDisable() {
          var _this$menuButton2, _this$crossButton2, _this$homeButton2, _this$resetButton2, _this$questionButtons2, _this$popup5, _this$popup6;

          (_this$menuButton2 = this.menuButton) == null ? void 0 : _this$menuButton2.node.off(Button.EventType.CLICK, this._onMenuButtonClicked, this);
          (_this$crossButton2 = this.crossButton) == null ? void 0 : _this$crossButton2.node.off(Button.EventType.CLICK, this._onCrossButtonClicked, this);
          (_this$homeButton2 = this.homeButton) == null ? void 0 : _this$homeButton2.node.off(Button.EventType.CLICK, this._onHomeButtonClicked, this);
          (_this$resetButton2 = this.resetButton) == null ? void 0 : _this$resetButton2.node.off(Button.EventType.CLICK, this._onResetButtonClicked, this);
          (_this$questionButtons2 = this.questionButtonsContainer) == null ? void 0 : _this$questionButtons2.node.children.forEach(button => {
            button.off(Button.EventType.CLICK, this._onQuestionButtonClicked, this);
          });
          (_this$popup5 = this.popup) == null ? void 0 : _this$popup5.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._onPopupHide, this);
          (_this$popup6 = this.popup) == null ? void 0 : _this$popup6.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE, this._onPopupShow, this);
          this.hideMenu();
        }

        getStateData() {
          return this._isOpen;
        }

        updateStateData(data) {
          if (data) this.showMenu();else this.hideMenu();
        }

        _onMenuButtonClicked() {
          this.showMenu();
          EventHandler.emitEvents(this.menuOpenEvents, this);
          this.node.emit(MenuController.EventType.MENU_OPEN, this);
        }

        _onCrossButtonClicked() {
          this.hideMenu();
          EventHandler.emitEvents(this.menuCloseEvents, this);
          this.node.emit(MenuController.EventType.MENU_CLOSE, this);
        }

        _onHomeButtonClicked() {
          this.hideMenu();
          EventHandler.emitEvents(this.menuHomeEvents, this);
          this.node.emit(MenuController.EventType.MENU_HOME, this);
        }

        _onResetButtonClicked() {
          this.hideMenu();
          EventHandler.emitEvents(this.menuResetEvents, this);
          this.node.emit(MenuController.EventType.MENU_RESET, this);
        }

        _onQuestionButtonClicked(button) {
          this.hideMenu();
          const index = button.node.getSiblingIndex();
          EventHandler.emitEvents(this.menuQuestionEvents, index + 1);
          this.node.emit(MenuController.EventType.MENU_QUESTION, index + 1);
        }

        _onPopupHide() {
          this._isOpen = false;
          if (this.menuButton) this.menuButton.node.active = true;
        }

        _onPopupShow() {
          this._isOpen = true;
          if (this.menuButton) this.menuButton.node.active = false;
        }

      }, _class3.EventType = {
        MENU_OPEN: "menu-open",
        MENU_CLOSE: "menu-close",
        MENU_HOME: "menu-home",
        MENU_RESET: "menu-reset",
        MENU_QUESTION: "menu-question"
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuOpenEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "menuCloseEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menuHomeEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "menuResetEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "menuQuestionEvents", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_menuButton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_homeButton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_resetButton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_crossButton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_popup", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_questionButtonsContainer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "menuButton", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "menuButton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "homeButton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetButton", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "resetButton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "crossButton", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "crossButton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "popup"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "questionButtonsContainer", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "questionButtonsContainer"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eac822bed9cb69b1b1fc835aa2eebe5046a2416a.js.map