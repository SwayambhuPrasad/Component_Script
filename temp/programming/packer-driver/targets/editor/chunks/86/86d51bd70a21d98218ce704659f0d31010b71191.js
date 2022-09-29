System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Node, Layout, Sprite, SpriteFrame, instantiate, Prefab, AS, ReplicatedButton, UIView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TapToReveal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Node = _cc.Node;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }, function (_unresolved_4) {
      UIView = _unresolved_4.UIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfe7dBADC9GialQp2yQB/SD", "TapToReveal", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TapToReveal", TapToReveal = (_dec = ccclass('TapToReveal'), _dec2 = property(Layout), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec(_class = (_class2 = class TapToReveal extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttonContainer", _descriptor, this);

          _initializerDefineProperty(this, "revealContainer", _descriptor2, this);

          _initializerDefineProperty(this, "commonTap", _descriptor3, this);

          _initializerDefineProperty(this, "buttonPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "revealPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "tapButtons", _descriptor6, this);

          _initializerDefineProperty(this, "tapButtonsHilight", _descriptor7, this);

          _initializerDefineProperty(this, "revealSprites", _descriptor8, this);

          this._buttons = [];
          this._reveals = [];
        }

        awake() {
          this._addEventListeners(); // this._buttons.push(this.buttonContainer.node.children[0]);
          //this._reveals.push(this.revealContainer.children[0]);
          //instantiate all buttons and nodes


          for (let i = 0; i < this.tapButtons.length; i++) {
            let newButton = instantiate(this.buttonPrefab);
            newButton.parent = this.buttonContainer.node;
            newButton.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);

            this._buttons.push(newButton);

            let newReveal = instantiate(this.revealPrefab);
            newReveal.parent = this.revealContainer;

            this._reveals.push(newReveal);
          } //assign spriteframes


          this._reveals.forEach((rev, i) => {
            rev.getComponent(Sprite).spriteFrame = this.revealSprites[i];
          }); //assign spriteframes to buttons and handle button click


          this._buttons.forEach((btn, i) => {
            btn.getComponent(Sprite).spriteFrame = this.tapButtons[i];
            btn.getChildByName('Hilight').getComponent(Sprite).spriteFrame = this.tapButtonsHilight[i];
            btn.on(Button.EventType.CLICK, () => {
              this._buttons.forEach((btnhl, j) => {
                btnhl.getChildByName('Hilight').active = false;
              });

              btn.getChildByName('Hilight').active = true;
              this.commonTap.getComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
                error: Error()
              }), UIView) : UIView).show();

              this._reveals.forEach((rev, j) => {
                rev.active = false;
              });

              this._reveals[i].active = true;
            });
          });
        }

        _addEventListeners() {
          this.commonTap.on(Button.EventType.CLICK, this._onTapToReveal, this);
        }

        _onTapToReveal() {
          this.commonTap.getComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView).hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "revealContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "commonTap", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "revealPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tapButtons", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tapButtonsHilight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "revealSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86d51bd70a21d98218ce704659f0d31010b71191.js.map