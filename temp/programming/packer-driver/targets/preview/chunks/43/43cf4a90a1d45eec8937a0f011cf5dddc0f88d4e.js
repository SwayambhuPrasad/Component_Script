System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VirtualContainerNode, VerticalListRow, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "./VirtualCanvasNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualContainerNode(extras) {
    _reporterNs.report("VirtualContainerNode", "./VirtualContainerNode", _context.meta, extras);
  }

  _export("VerticalListRow", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VirtualContainerNode = _unresolved_2.VirtualContainerNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1e63rpdMpN+pv5q0myxejW", "VerticalListRow", undefined);

      _export("VerticalListRow", VerticalListRow = class VerticalListRow extends (_crd && VirtualContainerNode === void 0 ? (_reportPossibleCrUseOfVirtualContainerNode({
        error: Error()
      }), VirtualContainerNode) : VirtualContainerNode) {
        constructor(classes) {
          super(classes);
          this.strutBounds = void 0;
          this.strutBounds = null;
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return VerticalListRow.typeId;
        }

        addBaseStrut(padNode) {
          if (!this.strutBounds) {
            this.strutBounds = padNode.getBounds().clone();
          } else {
            this.strutBounds.extend(padNode.getBounds());
          }
        }

        leftAlign(tableLeft) {
          this.setPosition(tableLeft, this.bounds.y);
        }

        centerAlign(tableCenter) {
          var width = this.getBounds().width;
          var center = tableCenter - width / 2;
          this.setPosition(center, this.bounds.y);
        }

        rightAlign(tableRight) {
          var width = this.getBounds().width;
          var right = tableRight - width;
          this.setPosition(right, this.bounds.y);
        }

      });

      VerticalListRow.typeId = "VerticalListRow";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43cf4a90a1d45eec8937a0f011cf5dddc0f88d4e.js.map