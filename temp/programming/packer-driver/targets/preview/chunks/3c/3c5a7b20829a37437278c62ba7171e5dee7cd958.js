System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, instantiate, Node, UIOpacity, Vec3, _decorator, AS, UIDrag, UIView, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, StoryPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts", _context.meta, extras);
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
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
      UIDrag = _unresolved_2.UIDrag;
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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "panel", _descriptor, this);

          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "DragContainer", _descriptor3, this);

          _initializerDefineProperty(this, "numberOfElementPerpage", _descriptor4, this);

          this._filled = [];
          this._dragNodes = [];
          this._pageNumber = 0;
          this._draggables = [];
          this._stateManager = [];
          this._panelPosition = null;
        }

        awake() {
          this._arrangeDraggable();

          this._addComponent();
        }

        stateManager() {
          this._dragNodes.forEach(d => {
            this._stateManager.push(d.active);
          });
        }

        _addComponent() {
          var _this = this;

          // for (let i = 0; i < this.panel.children.length - 1; i++) {
          //   this.panel.children[i].addComponent(UIDrop);
          // }
          this.panel.addComponent(Button);
          this.panel.on(Button.EventType.CLICK, this._onButtonClick, this);

          var _loop = function _loop(i) {
            var drag = _this.DragContainer.children[i].addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            _this.DragContainer.children[i].addComponent(UIOpacity);

            drag.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              _this._DragEnd(drag, i);
            });

            _this._dragNodes.push(_this.DragContainer.children[i]);

            _this._draggables.push(drag);
          };

          for (var i = 0; i < this.DragContainer.children.length; i++) {
            _loop(i);
          }

          var Arrows = this.popup.node.getComponentsInChildren(Button);
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

        _DragEnd(drag, Index) {
          var slot = drag.validUIDrop;
          if (slot == null) return;
          slot.node.destroyAllChildren();
          var dragCopy = instantiate(slot.dragsInside[0].node);
          dragCopy.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).destroy();
          dragCopy.parent = slot.node;
          dragCopy.name = slot.node.name;
          dragCopy.worldPosition = slot.node.worldPosition;
          console.log(slot.replacedNode, slot.dragsInside[0], slot); //drag.node.active = false;

          drag.node.getComponent(UIOpacity).opacity = 0;
          drag.interactable = false;

          if (slot.replacedNode.length != 0) {
            //slot.replacedNode[0].node.active = true;
            slot.replacedNode[0].node.getComponent(UIOpacity).opacity = 255;
            slot.replacedNode[0].interactable = true;
          } //drag.node.getComponent(UIDrag).reset();
          //drag.interactable = false;

        }

        close() {
          this.popup.hide();
          this.panel.position = this._panelPosition;

          this._onpopuphide();
        }

        _arrangeDraggable() {
          var offsetx = this.panel.position.x - this.popup.node.position.x;
          var offsety = this.panel.position.y - this.popup.node.position.y;
          console.log("offset", offsetx, offsety);
          var gridPositions = [[[-150 - offsetx, 80 - offsety], [150 - offsetx, 80 - offsety], [-150 - offsetx, -120 - offsety], [150 - offsetx, -120 - offsety]], [[-150 - offsetx, 0 - offsety], [150 - offsetx, 0 - offsety]], [[0 - offsetx, 0 - offsety]]];
          var gridSelector;
          if (this.numberOfElementPerpage == 2) gridSelector = 1;else if (this.numberOfElementPerpage == 4) gridSelector = 0;else if (this.numberOfElementPerpage == 1) gridSelector = 2;

          for (var i = 0; i < this.DragContainer.children.length; i++) {
            this.DragContainer.children[i].position = new Vec3(gridPositions[gridSelector][i % this.numberOfElementPerpage][0], gridPositions[gridSelector][i % this.numberOfElementPerpage][1], 0);
          }
        }

        _onButtonClick() {
          this._panelPosition = this.panel.position;
          this.panel.position = new Vec3(0, 300, 0);
          this.popup.show();
        }

        _onpopuphide() {
          this._draggables.forEach((draggable, i) => {
            draggable.node.active = false;
          });
        }

        _pageNavigation(pageNumber) {
          var pageGrouping = [[]];
          var j = 0;

          for (var i = 0; i < this._dragNodes.length; i++) {
            if (i % this.numberOfElementPerpage == 0 && i != 0) {
              j++;
              pageGrouping[j] = [];
              this._stateManager[j] = [];
            }

            pageGrouping[j].push(this._dragNodes[i]);
          }

          for (var _i = 0; _i < pageGrouping.length; _i++) {
            for (var _j = 0; _j < pageGrouping[_i].length; _j++) {
              if (_i == pageNumber) {
                pageGrouping[_i][_j].active = true; //this._stateManager[i][j].push(true);
              } else {
                pageGrouping[_i][_j].active = false; //this._stateManager[i][j].push(false);
              }
            }
          }

          this.stateManager();
          console.log(this._stateManager);
        }

        _arrowNavigator(direction) {
          if (direction == 1 && this._dragNodes.length != (this._pageNumber + 1) * this.numberOfElementPerpage) this._pageNumber++;else if (direction == 0 && this._pageNumber != 0) this._pageNumber--;

          this._pageNavigation(this._pageNumber);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numberOfElementPerpage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c5a7b20829a37437278c62ba7171e5dee7cd958.js.map