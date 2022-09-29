System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Node, SpriteFrame, _decorator, AS, UIDrag, UIDrop, UIView, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, StoryPanel;

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

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
      UIDrop = _unresolved_3.UIDrop;
      UIView = _unresolved_3.UIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddf66W0F/ZMVpHB4oX0FG2C", "StoryPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StoryPanel", StoryPanel = (_dec = ccclass("StoryPanel"), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class StoryPanel extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "panelSlots", _descriptor, this);

          _initializerDefineProperty(this, "panel", _descriptor2, this);

          _initializerDefineProperty(this, "pop", _descriptor3, this);

          _initializerDefineProperty(this, "DragContainer", _descriptor4, this);

          this._filled = [];
        }

        awake() {}

        _addComponent() {
          for (var i = 0; i < this.panel.children.length; i++) {
            this.panel.children[i].addComponent(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
              error: Error()
            }), UIDrop) : UIDrop);
          }

          this.pop.addComponent(_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView);

          for (var _i = 0; _i < this.DragContainer.children.length; _i++) {
            this.DragContainer.children[_i].addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelSlots", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pop", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "DragContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a51389c79e5e1512f6c2050356c89ab15687473.js.map