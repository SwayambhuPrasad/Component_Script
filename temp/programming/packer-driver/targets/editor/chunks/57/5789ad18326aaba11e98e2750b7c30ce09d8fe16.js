System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, standardizeColor, VirtualStretchyNode, HorizontalLineNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstandardizeColor(extras) {
    _reporterNs.report("standardizeColor", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualStretchyNode(extras) {
    _reporterNs.report("VirtualStretchyNode", "./VirtualStretchyNode", _context.meta, extras);
  }

  _export("HorizontalLineNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      standardizeColor = _unresolved_2.standardizeColor;
    }, function (_unresolved_3) {
      VirtualStretchyNode = _unresolved_3.VirtualStretchyNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67464d0hD5MKZaG8tBsm3/k", "HorizontalLineNode", undefined);

      /**
       * A HorizontalLineNode represents a line with a configurable color.
       * It's stretchy as it's size is determined by the content surrounding it.
       *
       * Examples include frac, hline.
       */
      _export("HorizontalLineNode", HorizontalLineNode = class HorizontalLineNode extends (_crd && VirtualStretchyNode === void 0 ? (_reportPossibleCrUseOfVirtualStretchyNode({
        error: Error()
      }), VirtualStretchyNode) : VirtualStretchyNode) {
        constructor(color, minWidth, classes) {
          super(minWidth, classes);
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
          return HorizontalLineNode.typeId;
        }

      });

      HorizontalLineNode.typeId = "HorizontalLineNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5789ad18326aaba11e98e2750b7c30ce09d8fe16.js.map