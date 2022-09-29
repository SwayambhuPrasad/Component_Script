System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Color, Component, Node, Sprite, _decorator, AS, UIDragSort, UIDrag, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, requireComponent, SnapRearrange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDragSort(extras) {
    _reporterNs.report("UIDragSort", "db://as_framework/scripts/UIDragSort", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts/UIDrag", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDragSort = _unresolved_3.UIDragSort;
    }, function (_unresolved_4) {
      UIDrag = _unresolved_4.UIDrag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59e6b5NCBFKW6UQoFanR24r", "SnapRearrange", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("SnapRearrange", SnapRearrange = (_dec = ccclass('SnapRearrange'), _dec2 = property(_crd && UIDragSort === void 0 ? (_reportPossibleCrUseOfUIDragSort({
        error: Error()
      }), UIDragSort) : UIDragSort), _dec3 = property(Node), _dec(_class = (_class2 = class SnapRearrange extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "slot", _descriptor, this);

          _initializerDefineProperty(this, "check", _descriptor2, this);

          _initializerDefineProperty(this, "answer", _descriptor3, this);

          this._container = null;
          this._white = new Color(255, 255, 255, 255);
          this._red = new Color(255, 0, 0, 255);
          this._green = new Color(0, 255, 0, 255);
          this._dragOptions = [];
        }

        awake() {
          this._container = this.slot.container;
          this.slot.node.children.forEach((option, i) => {
            if (i > 0) {
              this._dragOptions.push(option);

              option.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, () => {
                this._dragOptions.forEach((drag, j) => {
                  this._colorHilight(drag, this._white);
                });

                this.check.active = true;
              });
            }
          });
          this.check.on(Button.EventType.CLICK, () => {
            if (this._container.node.children.length == this.slot.node.children.length - 1) {
              this._check();

              console.log("check");
            }
          }, this);
        }

        _check() {
          let correctCount = 0;

          this._container.node.children.forEach((option, i) => {
            if (option.name == this._dragOptions[this.answer[i]].name + "-shadow") {
              this._colorHilight(this._dragOptions[this.answer[i]], this._green);

              correctCount++;
            } else this._colorHilight(this._dragOptions[this.answer[i]], this._red);
          });

          if (correctCount == this._dragOptions.length) this.check.active = false;
        }

        _colorHilight(option, color) {
          option.getComponent(Sprite).color = color;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "answer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc6c237165f07e97ff4d9bde9c2a88e95e430b4c.js.map