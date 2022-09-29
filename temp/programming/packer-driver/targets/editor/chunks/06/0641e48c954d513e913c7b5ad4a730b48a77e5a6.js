System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, standardizeColor, VirtualStretchyNode, BoxNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstandardizeColor(extras) {
    _reporterNs.report("standardizeColor", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualStretchyNode(extras) {
    _reporterNs.report("VirtualStretchyNode", "./VirtualStretchyNode", _context.meta, extras);
  }

  _export("BoxNode", void 0);

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

      _cclegacy._RF.push({}, "3e241nkh81JTp2jhErw6TwB", "BoxNode", undefined);

      /**
       * A BoxNode represents a rectangle with a configurable border/background color.
       * It's stretchy as it's size is determined by the content within.
       *
       * Example include colorbox, boxed, fcolorbox.
       */
      _export("BoxNode", BoxNode = class BoxNode extends (_crd && VirtualStretchyNode === void 0 ? (_reportPossibleCrUseOfVirtualStretchyNode({
        error: Error()
      }), VirtualStretchyNode) : VirtualStretchyNode) {
        constructor(backgroundColor, borderColor, borderWidth, minWidth, classes) {
          super(minWidth, classes);
          this.backgroundColor = void 0;
          this.borderColor = void 0;
          this.borderWidth = void 0;
          this.backgroundColor = (_crd && standardizeColor === void 0 ? (_reportPossibleCrUseOfstandardizeColor({
            error: Error()
          }), standardizeColor) : standardizeColor)(backgroundColor);
          this.borderColor = (_crd && standardizeColor === void 0 ? (_reportPossibleCrUseOfstandardizeColor({
            error: Error()
          }), standardizeColor) : standardizeColor)(borderColor);
          this.borderWidth = borderWidth;
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return BoxNode.typeId;
        }

      });

      BoxNode.typeId = "BoxNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0641e48c954d513e913c7b5ad4a730b48a77e5a6.js.map