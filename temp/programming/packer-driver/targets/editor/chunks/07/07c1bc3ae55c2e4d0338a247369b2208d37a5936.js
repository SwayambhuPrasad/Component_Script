System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Director, director, instantiate, Layout, Node, Prefab, size, UITransform, v3, _decorator, error, SoftKey, UIPopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, SpecialKeys, SCREEN_PADDING_X, SCREEN_PADDING_Y, SoftKeypad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyCallback(extras) {
    _reporterNs.report("KeyCallback", "./SoftKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoftKey(extras) {
    _reporterNs.report("SoftKey", "./SoftKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "./UIPopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      size = _cc.size;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }, function (_unresolved_3) {
      SoftKey = _unresolved_3.SoftKey;
    }, function (_unresolved_4) {
      UIPopup = _unresolved_4.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b8f89nfRRNLqbWafPIBAQc", "SoftKeypad", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (SpecialKeys) {
        SpecialKeys["DONE"] = "DONE";
        SpecialKeys["DELETE"] = "DELETE";
      })(SpecialKeys || (SpecialKeys = {}));

      SCREEN_PADDING_X = 10;
      SCREEN_PADDING_Y = 10;

      _export("SoftKeypad", SoftKeypad = (_dec = ccclass("SoftKeypad"), _dec2 = property({
        type: Layout,
        tooltip: "The layout node that is used to hold the keys."
      }), _dec3 = property({
        type: Node,
        tooltip: "The node with the arrow sprite."
      }), _dec4 = property({
        type: Prefab,
        tooltip: "The prefab used to instantiate keys."
      }), _dec5 = property({
        type: Prefab,
        tooltip: "The prefab used to instantiate delete key."
      }), _dec6 = property({
        type: Prefab,
        tooltip: "The prefab used to instantiate done key."
      }), _dec7 = property({
        type: Prefab,
        tooltip: "The prefab used when empty keypad is shown"
      }), _dec(_class = (_class2 = (_class3 = class SoftKeypad extends (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_keysContainer", _descriptor, this);

          _initializerDefineProperty(this, "_arrow", _descriptor2, this);

          _initializerDefineProperty(this, "_keyPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "_deleteKeyPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "_doneKeyPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "_emptyContentPrefab", _descriptor6, this);

          this._uiTransform = null;
          this._editBoxUITransform = null;
          this._keysContainerUI = null;
          this._arrowSize = size();
          this._showEmpty = false;
          this._keysLayout = {
            keys: []
          };
        }

        get keysContainer() {
          return this._keysContainer;
        }

        get arrow() {
          return this._arrow;
        }

        get keyPrefab() {
          return this._keyPrefab;
        }

        get deleteKeyPrefab() {
          return this._deleteKeyPrefab;
        }

        get doneKeyPrefab() {
          return this._doneKeyPrefab;
        }

        get emptyContentPrefab() {
          return this._emptyContentPrefab;
        }

        get showEmpty() {
          return this._showEmpty;
        }

        get keysLayout() {
          return this._keysLayout;
        }

        set keysContainer(value) {
          this._keysContainer = value;
        }

        set arrow(value) {
          this._arrow = value;
        }

        set keyPrefab(value) {
          this._keyPrefab = value;
        }

        set deleteKeyPrefab(value) {
          this._deleteKeyPrefab = value;
        }

        set doneKeyPrefab(value) {
          this._doneKeyPrefab = value;
        }

        set emptyContentPrefab(value) {
          this._emptyContentPrefab = value;
        }

        set showEmpty(value) {
          this._showEmpty = value;
        }

        set keysLayout(value) {
          this._keysLayout = value;
        }

        awake() {
          if (!this.keysContainer || !this.arrow || !this.keyPrefab || !this.deleteKeyPrefab || !this.doneKeyPrefab || !this.emptyContentPrefab) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Required properties not set in SoftKeypad!");
            return;
          }

          this._uiTransform = this.getComponent(UITransform); // Get the parent UITransform which should be that of the editbox.

          if (this.node.parent == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The parent node cannot null.");
            return;
          }

          this._editBoxUITransform = this.node.parent.getComponent(UITransform);
          const arrowUITransform = this.arrow.getComponent(UITransform);

          if (arrowUITransform == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The arrow node must have a UITransform.");
            return;
          }

          this._arrowSize = arrowUITransform.contentSize;
          this._keysContainerUI = this.keysContainer.getComponent(UITransform);
          super.awake();
          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._destroyKeys, this);
          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW, () => {
            this._destroyKeys();

            this._createKeys();

            director.once(Director.EVENT_AFTER_UPDATE, this._updatePopupPosition, this);
          }, this);
        }

        _calculatePopupSize() {
          if (this.keysContainer == null || this._keysContainerUI == null) return size();
          this.keysContainer.updateLayout(true);
          let width = this.keysContainer.paddingLeft + this.keysContainer.paddingRight;
          let height = this.keysContainer.paddingBottom + this.keysContainer.paddingTop;

          if (this.showEmpty) {
            // Get the empty content node added.
            const emptyNode = this.keysContainer.node.children[0];
            const emptyNodeSize = emptyNode._uiProps.uiTransformComp.contentSize;
            width += emptyNodeSize.width;
            height += emptyNodeSize.height;
            return size(width, height);
          }

          const baseSize = this.keysLayout.keys.reduce((acc, key) => {
            if (key.size.width > acc.width) acc.width = key.size.width;
            if (key.size.height > acc.height) acc.height = key.size.height;
            return acc;
          }, size(0, 0));
          const keyCount = this.keysContainer.node.children.length;

          if (keyCount === 0) {
            return size(width, height);
          }

          if (this.keysContainer.constraint === Layout.Constraint.FIXED_COL && this.keysContainer.startAxis === Layout.AxisDirection.HORIZONTAL) {
            // Only update the width.
            let numCol = this.keysContainer.constraintNum;

            if (keyCount < numCol) {
              numCol = keyCount;
            }

            width += (numCol - 1) * this.keysContainer.spacingX;
            width += numCol * baseSize.width;
            return size(width, this._keysContainerUI.height);
          }

          if (this.keysContainer.constraint === Layout.Constraint.FIXED_ROW && this.keysContainer.startAxis === Layout.AxisDirection.VERTICAL) {
            // Only update height.
            let numRow = this.keysContainer.constraintNum;

            if (keyCount < numRow) {
              numRow = keyCount;
            }

            height += (numRow - 1) * this.keysContainer.spacingY;
            height += numRow * baseSize.height;
            return size(this._keysContainerUI.width, height);
          }

          return this._keysContainerUI.contentSize;
        }

        _updatePopupPosition() {
          if (this._editBoxUITransform == null || this._uiTransform == null || this._keysContainerUI == null || this.arrow == null) return;

          const editBoxWorldBounds = this._editBoxUITransform.getBoundingBoxToWorld(); // Resize the keypad based on the layout.
          // Update the layout and background.
          // Get the width needed.


          const popupSize = this._uiTransform.contentSize = this._calculatePopupSize();

          this._keysContainerUI.contentSize = popupSize;

          const canvasBounds = this._parentCanvas.node._uiProps.uiTransformComp.getBoundingBox(); // Initially set anchor to bottom center.


          let anchorX = 0.5;
          let anchorY = 0.0; // Set the position Y as above the edit box bounds.

          let arrowRot = 180;
          let popupWorldPosY = editBoxWorldBounds.yMax + this._arrowSize.height; // Check if popupPositionY provides enough room for the entire popup to
          // be visible at the top.
          // If not place below the edit box.

          if (popupWorldPosY + popupSize.height > canvasBounds.yMax - SCREEN_PADDING_Y) {
            // Set the anchor to the top.
            anchorY = 1.0;
            arrowRot = 0;
            popupWorldPosY = editBoxWorldBounds.yMin - this._arrowSize.height;
          } // Set the position X as the edit box bounds center X.


          const popupWorldPosX = editBoxWorldBounds.center.x; // Check if enough space to the right of the popup. If not move the
          // popup to the left.

          if (popupWorldPosX + 0.5 * popupSize.width > canvasBounds.xMax - SCREEN_PADDING_X) {
            // NOTE: Assuming editbox center is inside screen.
            const widthAvailable = canvasBounds.width - SCREEN_PADDING_X - popupWorldPosX;
            anchorX = 1 - widthAvailable / popupSize.width;
          } // Check if enough space to the left of the popup.
          // If not move the popup to the right.
          else if (popupWorldPosX - 0.5 * popupSize.width < SCREEN_PADDING_X) {
            const widthAvailable = popupWorldPosX - SCREEN_PADDING_X;
            anchorX = widthAvailable / popupSize.width;
          }

          this._uiTransform.setAnchorPoint(anchorX, anchorY);

          this._keysContainerUI.setAnchorPoint(anchorX, anchorY);

          this.node.worldPosition = v3(popupWorldPosX, popupWorldPosY);
          this.arrow.angle = -arrowRot;
        }

        _destroyKeys() {
          if (this.keysContainer == null) return;
          this.keysContainer.node.children.forEach(key => {
            key.destroy();
          });
        }

        _createKeys() {
          if (this._showEmpty) {
            var _this$keysContainer;

            if (this.emptyContentPrefab == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)(`Cannot add empty content. Prefab is null.`);
              return;
            }

            const emptyNode = instantiate(this.emptyContentPrefab);
            (_this$keysContainer = this.keysContainer) == null ? void 0 : _this$keysContainer.node.addChild(emptyNode);
          } else this.keysLayout.keys.forEach(this._addSoftKey, this);
        } // Helper functions to setup keys.


        _addSoftKey(keyData) {
          if (this.keysContainer == null) return;
          let keyNode;

          switch (keyData.char) {
            case SoftKeypad.SpecialKeys.DELETE:
              {
                if (this.deleteKeyPrefab == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)(`Cannot add key: ${keyData.char}. Prefab is null.`);
                  return;
                }

                keyNode = instantiate(this.deleteKeyPrefab);
                break;
              }

            case SoftKeypad.SpecialKeys.DONE:
              {
                if (this.doneKeyPrefab == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)(`Cannot add key: ${keyData.char}. Prefab is null.`);
                  return;
                }

                keyNode = instantiate(this.doneKeyPrefab);
                break;
              }

            default:
              {
                if (this.keyPrefab == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)(`Cannot add key: ${keyData.char}. Prefab is null.`);
                  return;
                }

                keyNode = instantiate(this.keyPrefab);
                break;
              }
          }

          const softKey = keyNode.getComponent(_crd && SoftKey === void 0 ? (_reportPossibleCrUseOfSoftKey({
            error: Error()
          }), SoftKey) : SoftKey);

          if (softKey == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The key prefab must have the SoftKey component.");
            return;
          }

          softKey.string = keyData.char;
          keyNode.name = `softKey_${keyData.char}`;
          const keyUITransform = keyNode.getComponent(UITransform);

          if (keyUITransform == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The key prefab must have the UITransform component.");
            return;
          } // Set the size of the key.


          keyUITransform.setContentSize(keyData.size); // Connect the click event.

          softKey.setClickCallback(keyData.callback, keyData.keyCode);
          this.keysContainer.node.addChild(keyNode);
        }

      }, _class3.SpecialKeys = SpecialKeys, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_keysContainer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_arrow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_keyPrefab", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_deleteKeyPrefab", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_doneKeyPrefab", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_emptyContentPrefab", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "keysContainer", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "keysContainer"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "arrow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "keyPrefab", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "keyPrefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deleteKeyPrefab", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteKeyPrefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "doneKeyPrefab", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "doneKeyPrefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "emptyContentPrefab", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "emptyContentPrefab"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07c1bc3ae55c2e4d0338a247369b2208d37a5936.js.map