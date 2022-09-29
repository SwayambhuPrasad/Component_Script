System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VirtualCanvasNode, VirtualContainerNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "./VirtualCanvasNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./VirtualCanvasNode", _context.meta, extras);
  }

  _export("VirtualContainerNode", void 0);

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

      _cclegacy._RF.push({}, "d42b1dyH35C/rbn6n2WZ3H8", "VirtualContainerNode", undefined);

      /**
       * A ContainerNode represents the container of child nodes
       * When this position is updated, so are the children's position.
       *
       * @abstract
       */
      _export("VirtualContainerNode", VirtualContainerNode = class VirtualContainerNode extends (_crd && VirtualCanvasNode === void 0 ? (_reportPossibleCrUseOfVirtualCanvasNode({
        error: Error()
      }), VirtualCanvasNode) : VirtualCanvasNode) {
        constructor(classes) {
          super(classes);
          this.nodes = void 0;
          this.nodes = [];
        }
        /**
         * Adds a child node to the Container
         * @param {VirtualCanvasNode} node
         */


        addNode(node) {
          this.nodes.push(node);
        }
        /**
         * Gets the last node in the container
         * @return {VirtualCanvasNode | null}
         */


        last() {
          return this.nodes[this.nodes.length - 1];
        }
        /**
         * Moves the x position of the VirtualCanvasNode and shift the children
         */


        setPosition(x, y) {
          super.setPosition(x, y);
          const bounds = this.getBounds();
          const delta = x - bounds.x;
          this.nodes.forEach(child => {
            const newX = child.bounds.x + delta;
            child.setPosition(newX, child.bounds.y);
          });
        }
        /**
         * Gets the absolute bounds of this node relative to (0, 0)
         * @return {Bounds}
         */


        getBounds() {
          this.nodes.forEach((child, i) => {
            const childBounds = child.getBounds();

            if (i === 0) {
              this.bounds = childBounds.clone();
            } else {
              this.bounds.extend(childBounds);
            }
          });
          return this.bounds;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ea8f89c1fef0a7aa309cbd68dee7f65b6d88ade.js.map