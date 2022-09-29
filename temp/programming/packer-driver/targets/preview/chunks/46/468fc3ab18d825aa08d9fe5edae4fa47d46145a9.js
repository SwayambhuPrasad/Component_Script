System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Node, Vec3, _decorator, AS, UIDrag, UIDrop, UIPopup, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, StoryPanel;

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

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "../../extensions/as_framework/framework/assets/scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
      UIDrop = _unresolved_3.UIDrop;
      UIPopup = _unresolved_3.UIPopup;
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
        type: _crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
          error: Error()
        }), UIPopup) : UIPopup
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
          this._dragOptions = [];
          this._pageNumber = 0;
        }

        awake() {
          this._arrangeDraggable();

          this._addComponent();
        }

        _addComponent() {
          for (var i = 0; i < this.panel.children.length; i++) {
            this.panel.children[i].addComponent(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
              error: Error()
            }), UIDrop) : UIDrop);
          }

          this.panel.addComponent(Button);
          this.panel.on(Button.EventType.CLICK, this._onButtonClick, this);

          for (var _i = 0; _i < this.DragContainer.children.length; _i++) {
            this.DragContainer.children[_i].addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            this._dragOptions.push(this.DragContainer.children[_i]);
          }

          var Arrows = this.popup.node.getComponentsInChildren(Button);
          Arrows.forEach((Arrow, i) => {
            Arrow.node.on(Button.EventType.CLICK, () => {
              this._arrowNavigator(i);
            }, this);
          });
          this.popup.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE, this._onpopuphide, this);
        }

        _arrangeDraggable() {
          var gridPositions = [[[-150, 80], [150, 80], [-150, -120], [150, -120]], [[-150, 0], [150, 0]]];
          var gridSelector;
          if (this.numberOfElementPerpage == 2) gridSelector = 1;else if (this.numberOfElementPerpage == 4) gridSelector = 0;

          for (var i = 0; i < this.DragContainer.children.length; i++) {
            this.DragContainer.children[i].position = new Vec3(gridPositions[gridSelector][i % this.numberOfElementPerpage][0], gridPositions[gridSelector][i % this.numberOfElementPerpage][1], 0);
          }
        }

        _onButtonClick() {
          this.popup.show();

          this._pageNavigation(0);
        }

        _onpopuphide() {
          var validDrop = [];

          this._dragOptions.forEach((draggable, i) => {
            validDrop.push(draggable.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).validUIDrop);
          });
        }

        _pageNavigation(pageNumber) {
          var pageGrouping = [[]];
          var j = 0;

          for (var i = 0; i < this._dragOptions.length; i++) {
            if (i % this.numberOfElementPerpage == 0 && i != 0) {
              j++;
              pageGrouping[j] = [];
            }

            pageGrouping[j].push(this._dragOptions[i]);
          }

          for (var _i2 = 0; _i2 < pageGrouping.length; _i2++) {
            for (var _j = 0; _j < pageGrouping[_i2].length; _j++) {
              if (_i2 == pageNumber) {
                pageGrouping[_i2][_j].active = true;
                console.log(_i2);
              } else pageGrouping[_i2][_j].active = false;
            }
          }
        }

        _arrowNavigator(direction) {
          if (direction == 1 && this._dragOptions.length != (this._pageNumber + 1) * this.numberOfElementPerpage) this._pageNumber++;else if (direction == 0 && this._pageNumber != 0) this._pageNumber--;

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
//# sourceMappingURL=468fc3ab18d825aa08d9fe5edae4fa47d46145a9.js.map