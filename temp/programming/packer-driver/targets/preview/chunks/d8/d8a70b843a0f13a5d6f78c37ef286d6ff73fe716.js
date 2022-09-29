System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VirtualStretchyNode, SvgNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKatexTypes(extras) {
    _reporterNs.report("KatexTypes", "../katex/katex.d", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualStretchyNode(extras) {
    _reporterNs.report("VirtualStretchyNode", "./VirtualStretchyNode", _context.meta, extras);
  }

  _export("SvgNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VirtualStretchyNode = _unresolved_2.VirtualStretchyNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c793c0hCStMGoU8j5xsmdXw", "SvgNode", undefined);

      /**
       * An SvgNode represents an svg element, which gets converted to canvas drawing commands.
       * It's stretchy as it's size is determined by the content surrounding it.
       *
       * Examples include sqrt, overleftarrow.
       */
      _export("SvgNode", SvgNode = class SvgNode extends (_crd && VirtualStretchyNode === void 0 ? (_reportPossibleCrUseOfVirtualStretchyNode({
        error: Error()
      }), VirtualStretchyNode) : VirtualStretchyNode) {
        constructor(virtualHtmlNode, minWidth, classes) {
          super(minWidth, classes);
          this.virtualHtmlNode = void 0;
          this.virtualHtmlNode = virtualHtmlNode;
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return SvgNode.typeId;
        }
        /**
         * Sets the table width for the node and adjusts the Svg attributes
         */


        get listWidth() {
          return this.bounds.width;
        }

        set listWidth(listWidth) {
          this.bounds.width = listWidth;
          this.virtualHtmlNode.attributes.width = listWidth.toString();
        }

      });

      SvgNode.typeId = "SvgNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8a70b843a0f13a5d6f78c37ef286d6ff73fe716.js.map