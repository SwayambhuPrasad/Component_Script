System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, instantiate, Node, Vec3, _decorator, AS, UIDrag, UIDrop, UIView, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, StoryPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "db://as_framework/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      UIDrag = _unresolved_2.UIDrag;
      UIDrop = _unresolved_2.UIDrop;
      UIView = _unresolved_2.UIView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddf66W0F/ZMVpHB4oX0FG2C", "StoryPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StoryPanel", StoryPanel = (_dec = ccclass("StoryPanel"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
          error: Error()
        }), UIView) : UIView
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class StoryPanel extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "panel", _descriptor, this);

          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "DragContainer", _descriptor3, this);

          _initializerDefineProperty(this, "numberOfElementPerpage", _descriptor4, this);

          this._filled = [];
          this._dragNodes = [];
          this._pageNumber = 0;
          this._draggables = [];
        }

        awake() {
          this._arrangeDraggable();

          this._addComponent();
        }

        update() {// this._draggables.forEach(drag=>drag.interactable = ())
        }

        _addComponent() {
          for (let i = 0; i < this.panel.children.length; i++) {
            this.panel.children[i].addComponent(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
              error: Error()
            }), UIDrop) : UIDrop);
          }

          this.panel.addComponent(Button);
          this.panel.on(Button.EventType.CLICK, this._onButtonClick, this);

          for (let i = 0; i < this.DragContainer.children.length; i++) {
            const drag = this.DragContainer.children[i].addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);
            drag.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              this._DragEnd(drag);
            });
            drag.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, () => {
              this._DragBegin(drag);
            });

            this._dragNodes.push(this.DragContainer.children[i]);

            this._draggables.push(drag);
          }

          let Arrows = this.popup.node.getComponentsInChildren(Button);
          Arrows.forEach((Arrow, i) => {
            Arrow.node.on(Button.EventType.CLICK, () => {
              this._arrowNavigator(i);
            }, this);
          });

          this._dragNodes.forEach(n => n.active = false);

          this.popup.node.on((_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView).EventType.SHOW_COMPLETE, () => {
            this._dragNodes.forEach(n => n.active = true);

            this._pageNavigation(0);
          });
          this.popup.node.on((_crd && UIView === void 0 ? (_reportPossibleCrUseOfUIView({
            error: Error()
          }), UIView) : UIView).EventType.ABOUT_TO_HIDE, this._onpopuphide, this);
        }

        _DragEnd(drag) {
          if (drag.validUIDrop == null) return;
          const slot = drag.validUIDrop;
          slot.node.destroyAllChildren();
          drag.parent = slot.node;
          drag.worldPosition = slot.node.worldPosition; //     const dragCopy = instantiate(drag.node);
          //     dragCopy.getComponent(UIDrag).destroy();
          //     dragCopy.parent = slot.node;
          //     dragCopy.worldPosition = slot.node.worldPosition;
          //     drag.interactable = false;
        }

        _DragBegin(drag) {
          drag.active = false;
          const dragCopy = instantiate(drag.node);
          dragCopy.parent = drag.parent;
        }

        _arrangeDraggable() {
          let offsetx = this.panel.position.x - this.popup.node.position.x;
          let offsety = this.panel.position.y - this.popup.node.position.y;
          console.log("offset", offsetx, offsety);
          let gridPositions = [[[-150 - offsetx, 80 - offsety], [150 - offsetx, 80 - offsety], [-150 - offsetx, -120 - offsety], [150 - offsetx, -120 - offsety]], [[-150 - offsetx, 0 - offsety], [150 - offsetx, 0 - offsety]], [[0 - offsetx, 0 - offsety]]];
          let gridSelector;
          if (this.numberOfElementPerpage == 2) gridSelector = 1;else if (this.numberOfElementPerpage == 4) gridSelector = 0;else if (this.numberOfElementPerpage == 1) gridSelector = 2;

          for (let i = 0; i < this.DragContainer.children.length; i++) {
            this.DragContainer.children[i].position = new Vec3(gridPositions[gridSelector][i % this.numberOfElementPerpage][0], gridPositions[gridSelector][i % this.numberOfElementPerpage][1], 0);
          }
        }

        _onButtonClick() {
          this.panel.position = new Vec3(0, 300, 0);
          this.popup.show();
        }

        _onpopuphide() {
          this._draggables.forEach((draggable, i) => {
            draggable.node.active = false;
          });
        }

        _pageNavigation(pageNumber) {
          let pageGrouping = [[]];
          let j = 0;

          for (let i = 0; i < this._dragNodes.length; i++) {
            if (i % this.numberOfElementPerpage == 0 && i != 0) {
              j++;
              pageGrouping[j] = [];
            }

            pageGrouping[j].push(this._dragNodes[i]);
          }

          for (let i = 0; i < pageGrouping.length; i++) for (let j = 0; j < pageGrouping[i].length; j++) {
            if (i == pageNumber) {
              pageGrouping[i][j].active = true;
              console.log(i);
            } else pageGrouping[i][j].active = false;
          }
        }

        _arrowNavigator(direction) {
          if (direction == 1 && this._dragNodes.length != (this._pageNumber + 1) * this.numberOfElementPerpage) this._pageNumber++;else if (direction == 0 && this._pageNumber != 0) this._pageNumber--;

          this._pageNavigation(this._pageNumber);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numberOfElementPerpage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5411169d2863c00f23993f23506043966b6e4d7f.js.map