System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Node, Sprite, Color, AS, ReplicatedButton, UIDrag, UIDrop, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SnapToSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts/ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts/", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "db://as_framework/scripts/", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      ReplicatedButton = _unresolved_3.ReplicatedButton;
    }, function (_unresolved_4) {
      UIDrag = _unresolved_4.UIDrag;
      UIDrop = _unresolved_4.UIDrop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f97aPmfOVOaLHGl8b4CsZN", "SnapToSlot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SnapToSlot", SnapToSlot = (_dec = ccclass('SnapToSlot'), _dec2 = property(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
        error: Error()
      }), UIDrop) : UIDrop), _dec3 = property(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec4 = property(Node), _dec(_class = (_class2 = class SnapToSlot extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "dropSlots", _descriptor, this);

          _initializerDefineProperty(this, "dragOptions", _descriptor2, this);

          _initializerDefineProperty(this, "check", _descriptor3, this);

          _initializerDefineProperty(this, "answer", _descriptor4, this);

          this._correctCount = [];
        }

        awake() {
          this.check.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
            error: Error()
          }), ReplicatedButton) : ReplicatedButton);
          this.dragOptions.forEach((dragOption, i) => {
            this._correctCount.push(-1);

            dragOption.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              if (!this.check.active) this.check.active = true;
              this.scheduleOnce(this._afterDrop, 0.05);
            });
          });
          this.check.on(Button.EventType.CLICK, () => {
            this._check();
          }, this);
        }

        _afterDrop() {
          this.dragOptions.forEach((dragOption, i) => {
            if (dragOption.validUIDrop == null) {
              dragOption.getComponent(Sprite).color = new Color(255, 255, 255, 255);
            }
          });
        }

        _check() {
          this.dropSlots.forEach((dropSlot, i) => {
            if (dropSlot.dragsInside.length == 0) return;else if (dropSlot.dragsInside[0].name == this.dragOptions[this.answer[i]].name) {
              this._correctCount[i] = 1;
              this.dragOptions[this.answer[i]].getComponent(Sprite).color = new Color(24, 186, 24, 255);

              if (this._correctCount.reduce((a, b) => a + b, 0) == this.dragOptions.length) {
                this.check.active = false;
              }
            } else {
              this._correctCount[i] = -1;
              dropSlot.dragsInside[0].getComponent(Sprite).color = new Color(255, 50, 50, 255);
            }
          });
          this.scheduleOnce(this._afterCheck, 1);
        }

        _afterCheck() {
          var _this = this;

          for (var i = 0; i < this._correctCount.length; i++) {
            if (this._correctCount[i] == -1 && this.dropSlots[i].dragsInside.length > 0) {
              (function () {
                var nm = _this.dropSlots[i].dragsInside[0].name.toString();

                _this.dragOptions.forEach((dragOption, j) => {
                  if (nm == dragOption.name.toString()) {
                    dragOption.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                    dragOption.reset();
                    _this.check.active = true;
                  }
                });
              })();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dropSlots", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dragOptions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "answer", [property], {
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
//# sourceMappingURL=0702ab50748a370c25ca818d1a094ad15e59dc81.js.map