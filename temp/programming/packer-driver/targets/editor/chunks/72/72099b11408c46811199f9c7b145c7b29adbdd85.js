System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Node, _decorator, AS, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AppletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d515uawZBFmbTTPR129Tb0", "AppletController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AppletController", AppletController = (_dec = ccclass('AppletController'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = class AppletController extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Screens", _descriptor, this);

          _initializerDefineProperty(this, "next", _descriptor2, this);

          _initializerDefineProperty(this, "back", _descriptor3, this);

          this.q = 0;
        }

        awake() {
          this._updateVisibility();

          this.next.node.on(Button.EventType.CLICK, this._next, this);
          this.back.node.on(Button.EventType.CLICK, this._back, this);
        }

        _next() {
          this.Screens[this.q].active = false;
          this.q++;

          this._updateVisibility();
        }

        _back() {
          this.Screens[this.q].active = false;
          this.q--;

          this._updateVisibility();
        }

        _updateVisibility() {
          this.Screens[this.q].active = true;
          if (this.q == 0) this.back.node.active = false;else this.back.node.active = true;
          if (this.q == this.Screens.length - 1) this.next.node.active = false;else this.next.node.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Screens", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "next", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "back", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72099b11408c46811199f9c7b145c7b29adbdd85.js.map