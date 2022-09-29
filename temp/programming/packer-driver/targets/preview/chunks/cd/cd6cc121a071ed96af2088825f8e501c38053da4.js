System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Enum, EventHandler, KeyCode, Label, Node, size, UITransform, _decorator, AS, error, SoftKeypad, UIPopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, requireComponent, KeypadType, SoftEditBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyData(extras) {
    _reporterNs.report("KeyData", "./SoftKeypad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoftKeypad(extras) {
    _reporterNs.report("SoftKeypad", "./SoftKeypad", _context.meta, extras);
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
      Enum = _cc.Enum;
      EventHandler = _cc.EventHandler;
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
      Node = _cc.Node;
      size = _cc.size;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      SoftKeypad = _unresolved_4.SoftKeypad;
    }, function (_unresolved_5) {
      UIPopup = _unresolved_5.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dc07IJAIlIXLdNHokXM9uf", "SoftEditBox", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      (function (KeypadType) {
        KeypadType[KeypadType["NUMERIC_FLOAT"] = 0] = "NUMERIC_FLOAT";
        KeypadType[KeypadType["NUMERIC_INT"] = 1] = "NUMERIC_INT";
        KeypadType[KeypadType["NUMERIC_INT_SIGNED"] = 2] = "NUMERIC_INT_SIGNED";
        KeypadType[KeypadType["NUMERIC_FLOAT_SIGNED"] = 3] = "NUMERIC_FLOAT_SIGNED";
        KeypadType[KeypadType["ALPHABET"] = 4] = "ALPHABET";
        KeypadType[KeypadType["ALPHA_NUMERIC"] = 5] = "ALPHA_NUMERIC";
      })(KeypadType || (KeypadType = {}));

      _export("SoftEditBox", SoftEditBox = (_dec = ccclass("SoftEditBox"), _dec2 = requireComponent(UITransform), _dec3 = requireComponent(Button), _dec4 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when editing begins.",
        displayOrder: 30
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when editing ends.",
        displayOrder: 31
      }), _dec6 = property({
        type: [EventHandler],
        tooltip: "The event handler to be triggered when text changes.",
        displayOrder: 32
      }), _dec7 = property({
        type: Enum(KeypadType),
        tooltip: "The type of keypad input to use."
      }), _dec8 = property({
        tooltip: "The size of each key element."
      }), _dec9 = property({
        type: Label,
        tooltip: "The Label component attached to the node for the SoftEditBox's input text label."
      }), _dec10 = property({
        tooltip: "The maximum number of text characters."
      }), _dec11 = property({
        type: _crd && SoftKeypad === void 0 ? (_reportPossibleCrUseOfSoftKeypad({
          error: Error()
        }), SoftKeypad) : SoftKeypad,
        tooltip: "The keypad popup."
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_class3 = class SoftEditBox extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "editingDidBeganEvents", _descriptor, this);

          _initializerDefineProperty(this, "editingDidEndedEvents", _descriptor2, this);

          _initializerDefineProperty(this, "textChangedEvents", _descriptor3, this);

          _initializerDefineProperty(this, "_keypadType", _descriptor4, this);

          _initializerDefineProperty(this, "_keySize", _descriptor5, this);

          _initializerDefineProperty(this, "_textLabel", _descriptor6, this);

          _initializerDefineProperty(this, "_maxLength", _descriptor7, this);

          _initializerDefineProperty(this, "_keypadPopup", _descriptor8, this);
        }

        // TODO: Handle interactable.
        get keypadType() {
          return this._keypadType;
        }

        get keySize() {
          return this._keySize;
        }

        get string() {
          var _this$textLabel$strin, _this$textLabel;

          return (_this$textLabel$strin = (_this$textLabel = this.textLabel) == null ? void 0 : _this$textLabel.string) != null ? _this$textLabel$strin : "";
        }

        get textLabel() {
          return this._textLabel;
        }

        get maxLength() {
          return this._maxLength;
        }

        get keypadPopup() {
          return this._keypadPopup;
        }

        get isKeypadVisible() {
          var _this$keypadPopup$isV, _this$keypadPopup;

          return (_this$keypadPopup$isV = (_this$keypadPopup = this.keypadPopup) == null ? void 0 : _this$keypadPopup.isVisible) != null ? _this$keypadPopup$isV : false;
        }

        get isKeypadEmpty() {
          var _this$keypadPopup$sho, _this$keypadPopup2;

          return (_this$keypadPopup$sho = (_this$keypadPopup2 = this.keypadPopup) == null ? void 0 : _this$keypadPopup2.showEmpty) != null ? _this$keypadPopup$sho : true;
        }

        set keypadType(value) {
          this._keypadType = value;
        }

        set keySize(value) {
          this._keySize = value;
        }

        set string(value) {
          if (this.textLabel) this.textLabel.string = value;
        }

        set textLabel(value) {
          this._textLabel = value;

          this._updateTextLabel();
        }

        set maxLength(value) {
          this._maxLength = value;
        }

        set keypadPopup(value) {
          this._keypadPopup = value;
        }
        /**
         * The edit box string as a `number`.
         * @returns A `number` if the edit box string is a valid number string.
         */


        value() {
          return Number(this.string);
        }

        hideKeypad() {
          if (this.keypadPopup == null) return;
          if (!this.node.active || !this.keypadPopup.isVisible) return;
          this.keypadPopup.hide();
        }

        showKeypad() {
          if (this.keypadPopup == null) return;
          this.keypadPopup.exclusive = false;
          this.keypadPopup.showEmpty = false;
          this.keypadPopup.show();
        }

        showEmptyKeypad() {
          if (this.keypadPopup == null) return;
          this.keypadPopup.exclusive = true;
          this.keypadPopup.showEmpty = true;
          this.keypadPopup.show();
        }

        onLoad() {
          if (this.keypadPopup == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The keypad popup cannot be null.");
            return;
          }

          if (this.textLabel == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The text label cannot be null.");
            return;
          }

          this._initKeypadLayout();

          this.keypadPopup.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._onKeypadHidden, this);
        }

        onEnable() {
          this.node.on(Button.EventType.CLICK, this._onClick, this);
        }

        onDisable() {
          this.node.off(Button.EventType.CLICK, this._onClick, this);
        }

        _updateTextLabel() {
          var textLabel = this._textLabel; // If textLabel doesn't exist, create one.

          if (!textLabel) {
            var node = this.node.getChildByName("TEXT_LABEL");

            if (!node) {
              node = new Node("TEXT_LABEL");
              node.layer = this.node.layer;
            }

            textLabel = node.getComponent(Label);

            if (!textLabel) {
              textLabel = node.addComponent(Label);
            }

            node.parent = this.node;
            this._textLabel = textLabel;
          }
        } // private _update


        _initKeypadLayout() {
          if (this.keypadPopup == null) return;
          var keys = [];

          switch (this.keypadType) {
            case KeypadType.NUMERIC_INT:
              {
                this._addIntegerKeys(keys);

                break;
              }

            case KeypadType.NUMERIC_INT_SIGNED:
              {
                this._addIntegerKeys(keys); // add - key.


                keys.push({
                  char: "-",
                  size: this.keySize,
                  keyCode: [KeyCode.NUM_SUBTRACT, KeyCode.DASH],
                  callback: this._addChar.bind(this, "-")
                });
                break;
              }

            case KeypadType.NUMERIC_FLOAT:
              {
                this._addFloatKeys(keys);

                break;
              }

            case KeypadType.NUMERIC_FLOAT_SIGNED:
              {
                this._addFloatKeys(keys); // add - key.


                keys.push({
                  char: "-",
                  size: this.keySize,
                  keyCode: [KeyCode.NUM_SUBTRACT, KeyCode.DASH],
                  callback: this._addChar.bind(this, "-")
                });
                break;
              }

            case KeypadType.ALPHABET:
            case KeypadType.ALPHA_NUMERIC:
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("Alphanumeric Keypad not implemented!!");

            default:
              break;
          }

          keys.push({
            char: (_crd && SoftKeypad === void 0 ? (_reportPossibleCrUseOfSoftKeypad({
              error: Error()
            }), SoftKeypad) : SoftKeypad).SpecialKeys.DELETE,
            size: this.keySize,
            keyCode: [KeyCode.BACKSPACE, KeyCode.DELETE],
            callback: this._onDeleteKeyClicked.bind(this)
          });
          keys.push({
            char: (_crd && SoftKeypad === void 0 ? (_reportPossibleCrUseOfSoftKeypad({
              error: Error()
            }), SoftKeypad) : SoftKeypad).SpecialKeys.DONE,
            size: this.keySize,
            keyCode: [KeyCode.ENTER, KeyCode.NUM_ENTER],
            callback: this._onDoneKeyClicked.bind(this)
          });
          this.keypadPopup.keysLayout = {
            keys
          };
        }

        _addFloatKeys(outKeys) {
          this._addIntegerKeys(outKeys); // add `.` key.


          outKeys.push({
            char: ".",
            size: this.keySize,
            keyCode: [KeyCode.NUM_DECIMAL, KeyCode.PERIOD],
            callback: this._addChar.bind(this, ".")
          });
        }

        _addIntegerKeys(outKeys) {
          for (var i = 1; i < 10; i++) {
            // Add keys 1-9
            outKeys.push({
              char: i.toString(),
              size: this.keySize,
              keyCode: [KeyCode.NUM_0 + i, KeyCode.DIGIT_0 + i],
              callback: this._addChar.bind(this, i.toString())
            });
          } // add 0 key.


          outKeys.push({
            char: "0",
            size: this.keySize,
            keyCode: [KeyCode.NUM_0, KeyCode.DIGIT_0],
            callback: this._addChar.bind(this, "0")
          });
        }

        _addChar(char) {
          if (this.string.length >= this.maxLength) return;
          if (this.keypadType === KeypadType.NUMERIC_FLOAT && isNaN(+(this.string + char))) return;
          this.string += char;
          EventHandler.emitEvents(this.textChangedEvents, this);
          this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this);
        }

        _deleteChar() {
          this.string = this.string.slice(0, -1);
          EventHandler.emitEvents(this.textChangedEvents, this);
          this.node.emit(SoftEditBox.EventType.TEXT_CHANGED, this);
        }

        _onClick() {
          this.showKeypad();
          EventHandler.emitEvents(this.editingDidBeganEvents, this);
          this.node.emit(SoftEditBox.EventType.EDITING_DID_BEGAN, this);
        }

        _onDoneKeyClicked() {
          this.hideKeypad();
        }

        _onKeypadHidden() {
          EventHandler.emitEvents(this.editingDidEndedEvents, this);
          this.node.emit(SoftEditBox.EventType.EDITING_DID_ENDED, this, this.isKeypadEmpty // HACK: to handle replicated end.
          );
        }

        _onDeleteKeyClicked() {
          this._deleteChar();
        }

      }, _class3.EventType = {
        EDITING_DID_BEGAN: "editing-did-began",
        EDITING_DID_ENDED: "editing-did-ended",
        TEXT_CHANGED: "text-changed"
      }, _class3.KeypadType = KeypadType, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editingDidBeganEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editingDidEndedEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "textChangedEvents", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_keypadType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_keySize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return size(50, 50);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_textLabel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_maxLength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_keypadPopup", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "keypadType", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "keypadType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "keySize", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "keySize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "string", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "textLabel", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "textLabel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxLength", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "maxLength"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "keypadPopup", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "keypadPopup"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd6cc121a071ed96af2088825f8e501c38053da4.js.map