System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VirtualCanvasNode, HPaddingNode, _crd;

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  _export("HPaddingNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VirtualCanvasNode = _unresolved_2.VirtualCanvasNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0931a2Zz4FDo6OENovHHR0f", "HPaddingNode", undefined);

      /**
       * An HPaddingNode represents an invisible node (not drawn) with a specific width/x.
       *
       */
      _export("HPaddingNode", HPaddingNode = class HPaddingNode extends (_crd && VirtualCanvasNode === void 0 ? (_reportPossibleCrUseOfVirtualCanvasNode({
        error: Error()
      }), VirtualCanvasNode) : VirtualCanvasNode) {
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */
        get type() {
          return HPaddingNode.typeId;
        }

      });

      HPaddingNode.typeId = "HPaddingNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fc453ff4c40830f603d8052b2f1b5690ddd96da.js.map