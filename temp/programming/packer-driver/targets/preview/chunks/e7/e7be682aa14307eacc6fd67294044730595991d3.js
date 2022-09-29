System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Color, Component, Node, Sprite, SpriteFrame, _decorator, AS, UIDrag, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, requireComponent, MCQ;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02be9kFlBdOUqJSxOx180YD", "Swap", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("MCQ", MCQ = (_dec = ccclass("Swap"), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Number
      }), _dec(_class = (_class2 = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "parentImage", _descriptor, this);

          _initializerDefineProperty(this, "dragImage", _descriptor2, this);

          _initializerDefineProperty(this, "DragContainer", _descriptor3, this);

          _initializerDefineProperty(this, "ParentImageContainer", _descriptor4, this);

          _initializerDefineProperty(this, "check", _descriptor5, this);

          _initializerDefineProperty(this, "Answer", _descriptor6, this);
        }

        awake() {
          this._updateComponent();

          this.check.addComponent(Button);
          this.check.on(Button.EventType.CLICK, this._check, this);
        }

        _updateComponent() {
          for (var i = 0; i < this.parentImage.length; i++) {
            this.DragContainer.children[i].addComponent(Sprite).spriteFrame = this.dragImage[i];
            this.DragContainer.children[i].addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);
            this.ParentImageContainer.children[i].addComponent(Sprite).spriteFrame = this.parentImage[i];
          }
        }

        _check() {
          var _dragables = this.DragContainer.getComponentsInChildren(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag);

          var _position = this.DragContainer.children[0].getPosition().x;
          console.log(_position);

          _dragables.forEach((dragable, i) => {
            console.log(this.Answer[i].toString(), "comp", this.DragContainer.children[i].name);

            if (this.Answer[i].toString() == this.DragContainer.children[i].name) {
              console.log("right ans" + i);
              dragable.getComponent(Sprite).color = new Color(0, 255, 0, 255);
            } else {
              console.log(dragable.getComponent(Sprite).color);
              console.log(new Color(255, 0, 0, 255));
              dragable.getComponent(Sprite).color = new Color(255, 0, 0, 255);
            }
          });
        }

        _feedback(feedtype, dragable) {
          console.log("in feedback", feedtype); // const colorarray = [new Color(0,255,0,255),new Color(255,0,0,255)];

          dragable.node.getComponent(Sprite).color = new Color(0, 255, 0, 255);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "parentImage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dragImage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ParentImageContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "check", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Answer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7be682aa14307eacc6fd67294044730595991d3.js.map