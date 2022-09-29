System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VirtualCanvasNode, VirtualStretchyNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  _export("VirtualStretchyNode", void 0);

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

      _cclegacy._RF.push({}, "3f8fesb3+JC94yj+X0nr5vV", "VirtualStretchyNode", undefined);

      /**
       * A StretchyNode represents the interface for a node who's size is dynamic.
       * A stretchy nodes' size is determined by the content within or surrounding it.
       * It gets set by the VerticalList.
       *
       * @abstract
       */
      _export("VirtualStretchyNode", VirtualStretchyNode = class VirtualStretchyNode extends (_crd && VirtualCanvasNode === void 0 ? (_reportPossibleCrUseOfVirtualCanvasNode({
        error: Error()
      }), VirtualCanvasNode) : VirtualCanvasNode) {
        constructor(minWidth, classes) {
          super(classes);
          this.minWidth = void 0;
          this.minWidth = minWidth != null ? minWidth : 0;
        }

        get listWidth() {
          return this.bounds.width;
        }

        set listWidth(listWidth) {
          this.bounds.width = listWidth + this.minWidth;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6c08d35eaf2c195725cd4d10e94e7b609452206.js.map