System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Button, Label, Sprite, Prefab, Layout, Color, AS, ReplicatedButton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, GuessTheWord;

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
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1b74YtFQ5A6q0z5Ms8QA8I", "GuessTheWord", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuessTheWord", GuessTheWord = (_dec = ccclass('GuessTheWord'), _dec2 = property(Layout), _dec3 = property(Layout), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = class GuessTheWord extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "blankContainer", _descriptor, this);

          _initializerDefineProperty(this, "optionContainer", _descriptor2, this);

          _initializerDefineProperty(this, "blank", _descriptor3, this);

          _initializerDefineProperty(this, "option", _descriptor4, this);

          _initializerDefineProperty(this, "check", _descriptor5, this);

          _initializerDefineProperty(this, "clear", _descriptor6, this);

          _initializerDefineProperty(this, "correctWord", _descriptor7, this);

          _initializerDefineProperty(this, "jumbledWord", _descriptor8, this);

          this._iterator = 0;
          this._blanks = [];
          this._options = [];
        }

        awake() {
          this.check.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.clear.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);

          for (var i = 0; i < this.correctWord.length; i++) {
            var newBlank = instantiate(this.blank);
            newBlank.parent = this.blankContainer.node;

            this._blanks.push(newBlank);
          }

          for (var _i = 0; _i < this.jumbledWord.length; _i++) {
            var newOption = instantiate(this.option);
            newOption.parent = this.optionContainer.node;
            newOption.getComponentInChildren(Label).string = this.jumbledWord[_i];
            newOption.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);

            this._options.push(newOption);
          }

          this._options.forEach((btn, i) => {
            btn.on(Button.EventType.CLICK, () => {
              this._select(btn);
            }, this);
          });

          this.clear.node.on(Button.EventType.CLICK, this._clear, this);
          this.check.node.on(Button.EventType.CLICK, this._check, this);
        }

        _select(btn) {
          if (this._iterator < this.correctWord.length) {
            this._blanks[this._iterator].getComponentInChildren(Label).string = btn.getComponentInChildren(Label).string;
            btn.getComponent(Button).enabled = false;
            btn.getComponent(Sprite).color = new Color(255, 255, 255, 180);
            this._iterator++;
          }
        }

        _clear() {
          if (this._iterator > 0) {
            this._iterator--;

            var temp = this._blanks[this._iterator].getComponentInChildren(Label).string;

            this._blanks[this._iterator].getComponentInChildren(Label).string = '';

            for (var i = 0; i < this._options.length; i++) {
              if (temp == this._options[i].getComponentInChildren(Label).string) {
                this._options[i].getComponent(Button).enabled = true;
                this._options[i].getComponent(Sprite).color = new Color(255, 255, 255, 255);
                break;
              }
            }
          }
        }

        _check() {
          var checkWord = '';

          this._blanks.forEach((blanks, i) => {
            checkWord += blanks.getComponentInChildren(Label).string;
          });

          if (checkWord == this.correctWord) {
            this.check.node.active = false;
            this.clear.enabled = false;
            this.clear.getComponent(Sprite).color = new Color(255, 255, 255, 180);

            this._blanks.forEach((blanks, i) => {
              blanks.getComponent(Sprite).color = new Color(0, 255, 0, 255);
            });

            this._options.forEach((btn, i) => {
              btn.getComponent(Button).enabled = false;
              btn.getComponent(Sprite).color = new Color(255, 255, 255, 180);
            });
          } else {
            this._blanks.forEach((blanks, i) => {
              blanks.getComponent(Sprite).color = new Color(255, 44, 44, 255);
            });

            this.scheduleOnce(this._clearAll, 0.5);
          }
        }

        _clearAll() {
          this._iterator = 0;

          this._options.forEach((btn, i) => {
            btn.getComponent(Button).enabled = true;
            btn.getComponent(Sprite).color = new Color(255, 255, 255, 255);
          });

          this._blanks.forEach((blanks, i) => {
            blanks.getComponentInChildren(Label).string = '';
            blanks.getComponent(Sprite).color = new Color(255, 255, 255, 255);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blankContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blank", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "option", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clear", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "correctWord", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "jumbledWord", [property], {
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
//# sourceMappingURL=af82911da6790d9230e9d7446311f06027316928.js.map