System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, instantiate, Layout, AS, UIDrag, UIDragSwap, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Rearrange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts/ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "db://as_framework/scripts/UIDrag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDragSwap(extras) {
    _reporterNs.report("UIDragSwap", "db://as_framework/scripts/UIDragSwap", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
    }, function (_unresolved_4) {
      UIDragSwap = _unresolved_4.UIDragSwap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa079W8DlVAFr+kWrHC5nC0", "Rearrange", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Rearrange", Rearrange = (_dec = ccclass('Rearrange'), _dec2 = property(Node), _dec3 = property(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec(_class = (_class2 = class Rearrange extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dragContainer", _descriptor, this);

          _initializerDefineProperty(this, "dragOptions", _descriptor2, this);

          this._dragContainerUItranform = void 0;
        }

        awake() {
          this._dragContainerUItranform = this.dragContainer.getComponent(UITransform);
          this.dragOptions.forEach((dragOption, i) => {
            dragOption.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
              this._dragOptionEnd(dragOption, i);
            });
            dragOption.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, () => {// this._dragOptionStart(dragOption,i);
            });
          });
        }

        _dragOptionStart(dragOption, i) {
          console.log("drag starts" + i);
        }

        _dragOptionEnd(dragOption, i) {
          if (dragOption.node.position.x <= this.dragContainer.position.x + this._dragContainerUItranform.width / 2 && dragOption.node.position.x >= this.dragContainer.position.x - this._dragContainerUItranform.width / 2 && dragOption.node.position.y <= this.dragContainer.position.y + this._dragContainerUItranform.height / 2 && dragOption.node.position.y >= this.dragContainer.position.y - this._dragContainerUItranform.height / 2) {
            let newOption = instantiate(dragOption.node);
            const position = newOption.getPosition();
            newOption.removeComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);
            newOption.parent = this.dragContainer;
            newOption.name = dragOption.name;
            this.dragContainer.getComponent(Layout).updateLayout();
            newOption.addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag);

            this._addEventListeners(newOption);

            this.dragContainer.getComponent(_crd && UIDragSwap === void 0 ? (_reportPossibleCrUseOfUIDragSwap({
              error: Error()
            }), UIDragSwap) : UIDragSwap).onEnable();
            dragOption.node.active = false; //  let swap =false;

            for (let childPos = 0; childPos < this.dragContainer.children.length; childPos++) {
              const child = this.dragContainer.children[childPos];
              const otherDrag = child.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag);

              if (otherDrag && otherDrag !== newOption.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                error: Error()
              }), UIDrag) : UIDrag)) {
                const otherDragUITransform = otherDrag.getComponent(UITransform);

                if (position.x <= otherDrag.node.position.x + otherDragUITransform.width / 2 && position.x >= otherDrag.node.position.x - otherDragUITransform.width / 2 && position.y <= otherDrag.node.position.y + otherDragUITransform.height / 2 && position.y >= otherDrag.node.position.y - otherDragUITransform.height / 2) {
                  console.log("inside"); //  swap = true;

                  this.dragContainer.children.forEach((d, k) => {
                    console.log("drag" + k + "--" + d.name);
                  });
                  let draggedOption = this.dragContainer.children[this.dragContainer.children.length - 1];
                  let temp = [];

                  for (let p = this.dragContainer.children.length - 1; p > childPos; p--) this.dragContainer.children[p] = this.dragContainer.children[p - 1];

                  this.dragContainer.children[childPos] = draggedOption;
                  this.dragContainer.children.forEach((d, k) => {
                    console.log("aftdrag" + k + "--" + d.name);
                    /* let  te  = instantiate(d)
                    //te.removeComponent(UIDrag)
                    te.name = d.name;
                    temp.push(te)*/
                  });
                  /*  this.dragContainer.removeAllChildren()
                    temp.forEach((drag,k)=>{
                        drag.removeComponent(UIDrag)
                       drag.parent = this.dragContainer;
                       this.dragContainer.getComponent(Layout).updateLayout()
                       drag.addComponent(UIDrag);
                       this._addEventListeners(drag)
                       console.log("drag elem"+k+"--"+this.dragContainer.children[k].position)
                        this.dragContainer.getComponent(UIDragSwap).onEnable()
                   })
                  */

                  break;
                }
              }
            } // if(!swap)
            // {newOption.removeComponent(UIDrag);
            // newOption.parent = this.dragContainer;
            // newOption.name = dragOption.name;
            // this.dragContainer.getComponent(Layout).updateLayout()
            // newOption.addComponent(UIDrag);
            // this._addEventListeners(newOption)
            // this.dragContainer.getComponent(UIDragSwap).onEnable()
            // dragOption.node.active = false;}

          }
        }

        _containerDragEnd(drag) {
          if (!(drag.position.x <= this.dragContainer.position.x + this._dragContainerUItranform.width / 2 && drag.position.x >= this.dragContainer.position.x - this._dragContainerUItranform.width / 2 && drag.position.y <= this.dragContainer.position.y + this._dragContainerUItranform.height / 2 && drag.position.y >= this.dragContainer.position.y - this._dragContainerUItranform.height / 2)) {
            for (let i = 0; i < this.dragOptions.length; i++) {
              if (this.dragOptions[i].name == drag.name) {
                this.dragOptions[i].node.active = true;
                drag.destroy();
                this.dragContainer.children.forEach((dragOption, i) => {
                  dragOption.removeComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                    error: Error()
                  }), UIDrag) : UIDrag);
                  this.dragContainer.getComponent(Layout).updateLayout();
                  dragOption.addComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                    error: Error()
                  }), UIDrag) : UIDrag);
                });
                break;
              }
            }
          }
        }

        _addEventListeners(drag) {
          drag.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_DID_END, () => {
            this._containerDragEnd(drag);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dragContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dragOptions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de95a83ff12227993b2edea86d38933d05b73517.js.map