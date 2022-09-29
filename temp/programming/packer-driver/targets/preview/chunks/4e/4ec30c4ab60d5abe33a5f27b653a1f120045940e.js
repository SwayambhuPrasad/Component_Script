System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Button, Sprite, Prefab, Layout, Color, SpriteFrame, AS, ReplicatedButton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, MatchTheFollowing;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts/ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      Color = _cc.Color;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64053ZcslJNLY5DWRLagFce", "MatchTheFollowing", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MatchTheFollowing", MatchTheFollowing = (_dec = ccclass('MatchTheFollowing'), _dec2 = property(Layout), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec(_class = (_class2 = class MatchTheFollowing extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "objectContainer", _descriptor, this);

          _initializerDefineProperty(this, "matchOption", _descriptor2, this);

          _initializerDefineProperty(this, "check", _descriptor3, this);

          _initializerDefineProperty(this, "reset", _descriptor4, this);

          _initializerDefineProperty(this, "next", _descriptor5, this);

          _initializerDefineProperty(this, "thatsRight", _descriptor6, this);

          _initializerDefineProperty(this, "options", _descriptor7, this);

          _initializerDefineProperty(this, "hil", _descriptor8, this);

          _initializerDefineProperty(this, "answer", _descriptor9, this);

          this._correctAns = [];
          this._options = [];
          this._store = [];
          this._completedSet = [];
          this._greenColor = new Color(107, 207, 107, 255);
          this._redColor = new Color(250, 75, 75, 255);
          this._whiteColor = new Color(255, 255, 255, 255);
          this._transparent = new Color(255, 255, 255, 0);
          this._completedMatches = 0;
        }

        awake() {
          this.check.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.reset.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.next.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);

          for (var i = 0; i < this.answer.length; i++) {
            this._correctAns[i] = this.answer.charAt(i);
            console.log(this._correctAns[i]);
            var newOption = instantiate(this.matchOption);
            newOption.getComponent(Sprite).spriteFrame = this.options[i];
            newOption.children[0].getComponent(Sprite).spriteFrame = this.hil;
            newOption.parent = this.objectContainer.node;
            newOption.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);

            this._options.push(newOption);
          }

          for (var _i = 0; _i < this._correctAns.length / 2; _i++) {
            this._completedSet.push(false);
          }

          this._options.forEach((btn, i) => {
            btn.on(Button.EventType.CLICK, () => {
              this._optionSelect(btn, i);
            }, this);
          });

          this.check.on(Button.EventType.CLICK, () => {
            this._check();
          }, this);
          this.next.on(Button.EventType.CLICK, () => {
            this._matchNext();
          }, this);
          this.reset.on(Button.EventType.CLICK, () => {
            this._reset();
          }, this);
        }

        _optionSelect(btn, i) {
          this._hilight(btn, true);

          switch (this._store.length) {
            case 0:
              this._store.push(i);

              break;

            case 1:
              if (i != this._store[0]) {
                this._store.push(i);

                this.check.active = true;
              }

              break;

            case 2:
              if (i != this._store[0] && i != this._store[1]) {
                this._hilight(this._options[this._store[0]], false);

                this._hilight(this._options[this._store[1]], false);

                this._store = [];
                this.check.active = false;

                this._store.push(i);
              }

              break;
          }
        }

        _hilight(btn, state) {
          btn.children[0].active = state;
        }

        _check() {
          var correctCheck = false;

          for (var i = 0; i < this._correctAns.length; i = i + 2) {
            if ((this._store[0] == this._correctAns[i] || this._store[0] == this._correctAns[i + 1]) && (this._store[1] == this._correctAns[i] || this._store[1] == this._correctAns[i + 1])) {
              this._completedSet[i / 2] = true;

              this._correctMatch();

              correctCheck = true;
              break;
            }
          }

          if (!correctCheck) {
            this._colorFeedback(this._options[this._store[0]], this._redColor);

            this._colorFeedback(this._options[this._store[1]], this._redColor);

            this.scheduleOnce(this._resetToNormal, 1);
          }
        }

        _resetToNormal() {
          if (this._store.length > 0) {
            this._colorFeedback(this._options[this._store[0]], this._whiteColor);

            this._colorFeedback(this._options[this._store[1]], this._whiteColor);
          }
        }

        _correctMatch() {
          this._options.forEach((btn, i) => {
            btn.getComponent(Button).interactable = false;
          });

          this._colorFeedback(this._options[this._store[0]], this._greenColor);

          this._colorFeedback(this._options[this._store[1]], this._greenColor);

          this._hilight(this._options[this._store[0]], false);

          this._hilight(this._options[this._store[1]], false);

          this._store = [];
          this._completedMatches++;
          this.check.active = false;
          this.thatsRight.active = true;
          if (this._completedMatches < this._correctAns.length / 2) this.next.active = true;
        }

        _colorFeedback(btn, color) {
          btn.getComponent(Sprite).color = color;
        }

        _matchNext() {
          this._options.forEach((btn, i) => {
            btn.getComponent(Button).interactable = true;
          });

          this.next.active = false;
          this.thatsRight.active = false;

          for (var i = 0; i < this._correctAns.length; i = i + 2) {
            if (this._completedSet[i / 2]) {
              this._options[this._correctAns[i]].getComponent(Button).interactable = false;
              this._options[this._correctAns[i + 1]].getComponent(Button).interactable = false;

              this._colorFeedback(this._options[this._correctAns[i]], this._transparent);

              this._colorFeedback(this._options[this._correctAns[i + 1]], this._transparent);
            }
          }
        }

        _reset() {
          this._options.forEach((btn, i) => {
            btn.getComponent(Button).interactable = true;

            this._hilight(btn, false);

            this._colorFeedback(btn, this._whiteColor);
          });

          this._completedMatches = 0;
          this._store = [];
          this.next.active = false;
          this.check.active = false;
          this.thatsRight.active = false;

          for (var i = 0; i < this._correctAns.length / 2; i++) {
            this._completedSet[i] = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matchOption", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "next", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "thatsRight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "options", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hil", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "answer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ec30c4ab60d5abe33a5f27b653a1f120045940e.js.map