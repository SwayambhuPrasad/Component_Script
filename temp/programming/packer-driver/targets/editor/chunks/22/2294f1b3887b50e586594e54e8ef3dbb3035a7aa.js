System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, measureText, standardizeColor, VirtualCanvasNode, TextNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmeasureText(extras) {
    _reporterNs.report("measureText", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstandardizeColor(extras) {
    _reporterNs.report("standardizeColor", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  _export("TextNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      measureText = _unresolved_2.measureText;
      standardizeColor = _unresolved_2.standardizeColor;
    }, function (_unresolved_3) {
      VirtualCanvasNode = _unresolved_3.VirtualCanvasNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a4c6jg8IVOfoT3CPWIxGB9", "TextNode", undefined);

      /**
       * A Text Node represents text with configurable text, font, and color.
       *
       * Examples include A, 3, \int, \prod.
       */
      _export("TextNode", TextNode = class TextNode extends (_crd && VirtualCanvasNode === void 0 ? (_reportPossibleCrUseOfVirtualCanvasNode({
        error: Error()
      }), VirtualCanvasNode) : VirtualCanvasNode) {
        // lineHeight: number;
        constructor(text, font, color, classes) {
          super(classes);
          this.text = void 0;
          this.font = void 0;
          this.color = void 0;
          this.text = text;
          this.font = font;
          this.color = (_crd && standardizeColor === void 0 ? (_reportPossibleCrUseOfstandardizeColor({
            error: Error()
          }), standardizeColor) : standardizeColor)(color);
          const size = (_crd && measureText === void 0 ? (_reportPossibleCrUseOfmeasureText({
            error: Error()
          }), measureText) : measureText)(text, font);
          this.setSize(size.width, size.height); // this.lineHeight = size.baselineHeight;
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return TextNode.typeId;
        }

      });

      TextNode.typeId = "TextNode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2294f1b3887b50e586594e54e8ef3dbb3035a7aa.js.map