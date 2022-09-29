System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, standardizeColor, VirtualCanvasNode, VerticalLineNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstandardizeColor(extras) {
    _reporterNs.report("standardizeColor", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  _export("VerticalLineNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      standardizeColor = _unresolved_2.standardizeColor;
    }, function (_unresolved_3) {
      VirtualCanvasNode = _unresolved_3.VirtualCanvasNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5928f2Q6n9BQaF/ykn0Vbah", "VerticalLineNode", undefined);

      /**
       * A VerticalLineNode represents a vertical line with a configurable color.
       *
       * Examples include \begin{array}{|l|}...\end{array}
       */
      _export("VerticalLineNode", VerticalLineNode = class VerticalLineNode extends (_crd && VirtualCanvasNode === void 0 ? (_reportPossibleCrUseOfVirtualCanvasNode({
        error: Error()
      }), VirtualCanvasNode) : VirtualCanvasNode) {
        constructor(color, classes) {
          super(classes);
          this.color = void 0;
          this.color = (_crd && standardizeColor === void 0 ? (_reportPossibleCrUseOfstandardizeColor({
            error: Error()
          }), standardizeColor) : standardizeColor)(color);
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return VerticalLineNode.typeId;
        }

      });

      VerticalLineNode.typeId = "VerticalLineNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77ec31c8781ae8d5ce86886e7446dbf88dc65122.js.map