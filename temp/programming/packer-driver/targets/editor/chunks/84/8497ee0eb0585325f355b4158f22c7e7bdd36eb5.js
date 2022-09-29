System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Graphics, Node, _decorator, error, warn, UIDrag, UIDrop, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, requireComponent, MatchTheFollowing;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "./UIDrag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIDrop(extras) {
    _reporterNs.report("UIDrop", "./UIDrop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
      warn = _unresolved_2.warn;
    }, function (_unresolved_3) {
      UIDrag = _unresolved_3.UIDrag;
    }, function (_unresolved_4) {
      UIDrop = _unresolved_4.UIDrop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13679wJum5GE7mLfmLcW2mJ", "MatchTheFollowing", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator); // enum MatchType {
      //   ONE_TO_ONE,
      //   ONE_TO_MANY,
      //   MANY_TO_ONE,
      //   MANY_TO_MANY,
      // }

      _export("MatchTheFollowing", MatchTheFollowing = (_dec = ccclass("MatchTheFollowing"), _dec2 = requireComponent(Graphics), _dec3 = property(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec4 = property(_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
        error: Error()
      }), UIDrop) : UIDrop), _dec(_class = _dec2(_class = (_class2 = class MatchTheFollowing extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lineDragHandles", _descriptor, this);

          _initializerDefineProperty(this, "dropSlots", _descriptor2, this);

          _initializerDefineProperty(this, "_gfx", _descriptor3, this);

          this._tempGfx = null;
        }

        onLoad() {
          this._gfx = this.getComponent(Graphics);

          if (this._gfx === null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("MatchTheFollowing: Graphics component is null.");
            return;
          }

          if (this.lineDragHandles.length !== this.dropSlots.length) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("MatchTheFollowing: The drag handles count is not same as the slots count.");
            return;
          }

          this.dropSlots.forEach(drop => drop.behaviour = (_crd && UIDrop === void 0 ? (_reportPossibleCrUseOfUIDrop({
            error: Error()
          }), UIDrop) : UIDrop).DropBehaviour.ALLOW_SINGLE);
          this.lineDragHandles.forEach(drag => {
            drag.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._onDragMove, this);
            drag.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._updateDraw, this);
          });
          const temp = new Node("TempDraw");
          this.node.addChild(temp);
          temp.layer = this.node.layer;
          this._tempGfx = temp.addComponent(Graphics);
          this._tempGfx.lineCap = this._gfx.lineCap;
          this._tempGfx.lineJoin = this._gfx.lineJoin;
          this._tempGfx.lineWidth = this._gfx.lineWidth;
          this._tempGfx.strokeColor = this._gfx.strokeColor;
        }

        checkPairs() {
          if (this.lineDragHandles.length !== this.dropSlots.length) {
            (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
              error: Error()
            }), warn) : warn)("The drag handles count is not same as the slots count.");
            return false;
          }

          for (let index = 0; index < this.lineDragHandles.length; index++) {
            const drag = this.lineDragHandles[index];
            if (drag.validUIDrop !== this.dropSlots[index]) return false;
          }

          return true;
        }

        reset() {
          var _this$_gfx, _this$_tempGfx;

          this.lineDragHandles.forEach(drag => drag.reset());
          (_this$_gfx = this._gfx) == null ? void 0 : _this$_gfx.clear();
          (_this$_tempGfx = this._tempGfx) == null ? void 0 : _this$_tempGfx.clear();
        }

        _updateDraw() {
          this._gfx.clear();

          this._tempGfx.clear();

          this.lineDragHandles.filter(drag => drag.validUIDrop).forEach(drag => {
            const xForm = this.node._uiProps.uiTransformComp;
            const localStart = xForm.convertToNodeSpaceAR(drag.resetScreenPoint);
            const localEnd = xForm.convertToNodeSpaceAR(drag.targetPosition);

            this._gfx.moveTo(localStart.x, localStart.y);

            this._gfx.lineTo(localEnd.x, localEnd.y);

            this._gfx.stroke();
          });
        }

        _onDragMove(drag) {
          const xForm = this.node._uiProps.uiTransformComp;
          const localStart = xForm.convertToNodeSpaceAR(drag.resetScreenPoint);
          const localEnd = xForm.convertToNodeSpaceAR(drag.targetPosition);

          this._updateDraw();

          this._tempGfx.clear();

          this._tempGfx.moveTo(localStart.x, localStart.y);

          this._tempGfx.lineTo(localEnd.x, localEnd.y);

          this._tempGfx.stroke();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineDragHandles", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dropSlots", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_gfx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8497ee0eb0585325f355b4158f22c7e7bdd36eb5.js.map