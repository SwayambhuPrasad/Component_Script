System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Node, Sprite, Color, AS, UIDrag, UIDrop, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SnapToSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
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
      UIDrag = _unresolved_3.UIDrag;
      UIDrop = _unresolved_3.UIDrop;
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

          _initializerDefineProperty(this, "DropSlots", _descriptor, this);

          _initializerDefineProperty(this, "DragOptions", _descriptor2, this);

          _initializerDefineProperty(this, "check", _descriptor3, this);

          _initializerDefineProperty(this, "answer", _descriptor4, this);

          this.correctCount = [];
        }

        awake() {
          this.DragOptions.forEach((dragOption, i) => {
            this.correctCount.push(-1);
            dragOption.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              if (!this.check.active) this.check.active = true;
              this.scheduleOnce(this.afterDrop, 0.05);
            });
          });
          this.check.on(Button.EventType.CLICK, () => {
            this.DropSlots.forEach((dropSlot, i) => {
              if (dropSlot.dragsInside.length == 0) return;else if (dropSlot.dragsInside[0].name == this.DragOptions[this.answer[i]].name) {
                this.correctCount[i] = 1;
                this.DragOptions[this.answer[i]].getComponent(Sprite).color = new Color(24, 186, 24, 255);

                if (this.correctCount.reduce((a, b) => a + b, 0) == this.DragOptions.length) {
                  this.check.active = false;
                }
              } else {
                this.correctCount[i] = -1;
                dropSlot.dragsInside[0].getComponent(Sprite).color = new Color(255, 50, 50, 255);
              }
            });
            this.scheduleOnce(this.afterCheck, 1);
          });
        }

        afterDrop() {
          this.DragOptions.forEach((dragOption, i) => {
            console.log("pos of " + i + " ---" + dragOption.node.worldPosition + "   reset   " + dragOption.resetScreenPoint);

            if (dragOption.validUIDrop == null) {
              dragOption.getComponent(Sprite).color = new Color(255, 255, 255, 255);
            }
          });
        }

        afterCheck() {
          var _this = this;

          for (var i = 0; i < this.correctCount.length; i++) {
            if (this.correctCount[i] == -1 && this.DropSlots[i].dragsInside.length > 0) {
              (function () {
                var nm = _this.DropSlots[i].dragsInside[0].name.toString();

                _this.DragOptions.forEach((dragOption, j) => {
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DropSlots", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DragOptions", [_dec3], {
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
//# sourceMappingURL=ce151c6c10135f15c58020c7c1398549e0f8dff0.js.map