System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VerticalListRow, VirtualContainerNode, VirtualStretchyNode, VerticalList, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalListRow(extras) {
    _reporterNs.report("VerticalListRow", "./VerticalListRow", _context.meta, extras);
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

  function _reportPossibleCrUseOfVirtualStretchyNode(extras) {
    _reporterNs.report("VirtualStretchyNode", "./VirtualStretchyNode", _context.meta, extras);
  }

  _export("VerticalList", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VerticalListRow = _unresolved_2.VerticalListRow;
    }, function (_unresolved_3) {
      VirtualContainerNode = _unresolved_3.VirtualContainerNode;
    }, function (_unresolved_4) {
      VirtualStretchyNode = _unresolved_4.VirtualStretchyNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35460QP8hdAh57m1R5oAlzY", "VerticalList", undefined);

      /**
       * The VerticalList class represents a 1D array of VerticalListRow's
       * which can be horizontally aligned left, right, or center
       *
       * @type {VerticalList}
       */
      _export("VerticalList", VerticalList = class VerticalList extends (_crd && VirtualContainerNode === void 0 ? (_reportPossibleCrUseOfVirtualContainerNode({
        error: Error()
      }), VirtualContainerNode) : VirtualContainerNode) {
        constructor(alignment, rowStart, classes) {
          super(classes);
          this.alignment = void 0;
          this.rowStart = void 0;
          this.strutBounds = void 0;
          this.alignment = alignment;
          this.rowStart = rowStart;
          this.strutBounds = this.bounds.clone();
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @return {string}
         */


        get type() {
          return VerticalList.typeId;
        }
        /**
         * Returns the x coordinate of the next node to be placed into the List.
         * @return {number}
         */


        getNextNodePlacement() {
          var x = this.rowStart + this.margin.left;
          var lastRow = this.last(); // Assuming this is the first node in the List set x a default.

          if (lastRow == null || !(lastRow instanceof (_crd && VirtualContainerNode === void 0 ? (_reportPossibleCrUseOfVirtualContainerNode({
            error: Error()
          }), VirtualContainerNode) : VirtualContainerNode))) return x;
          var lastNode = lastRow.last();
          if (lastNode == null) return x;
          var bounds = lastNode.getBounds();
          x = bounds.x + bounds.width + lastNode.margin.right;
          return x;
        }
        /**
         * Sets the width of the stretchy nodes contained within.
         */


        setStretchyWidths() {
          var width = this.getBounds().width;
          this.nodes.forEach(rowNode => {
            if (!(rowNode instanceof (_crd && VirtualContainerNode === void 0 ? (_reportPossibleCrUseOfVirtualContainerNode({
              error: Error()
            }), VirtualContainerNode) : VirtualContainerNode))) return;
            rowNode.nodes.forEach(node => {
              if (node instanceof (_crd && VirtualStretchyNode === void 0 ? (_reportPossibleCrUseOfVirtualStretchyNode({
                error: Error()
              }), VirtualStretchyNode) : VirtualStretchyNode)) {
                node.listWidth = width;
              }
            });
          });
        }
        /**
         * Aligns the List based on the specified alignment
         */


        align() {
          switch (this.alignment) {
            case "left":
              this.leftAlign();
              break;

            case "center":
              this.centerAlign();
              break;

            case "right":
              this.rightAlign();
              break;
          }
        }
        /**
         * Adds a row to the List.
         */


        addRow(row) {
          this.addNode(row);
        }
        /**
         * Adds a VirtualCanvasNode to current row
         * @param {VirtualCanvasNode}
         */


        addCell(node) {
          var lastRow = this.last();
          lastRow.addNode(node);
        }

        getStrutBounds() {
          this.nodes.forEach(row => {
            if (!(row instanceof (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
              error: Error()
            }), VerticalListRow) : VerticalListRow))) return;
            if (row.strutBounds) this.strutBounds.extend(row.strutBounds);
          });
          return this.strutBounds;
        }

        centerAlign() {
          var bounds = this.getBounds();
          var center = bounds.x + bounds.width / 2;
          this.nodes.forEach(row => {
            if (!(row instanceof (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
              error: Error()
            }), VerticalListRow) : VerticalListRow))) return;
            row.centerAlign(center);
          });
        }

        rightAlign() {
          var bounds = this.getBounds();
          var right = bounds.x + bounds.width;
          this.nodes.forEach(row => {
            if (!(row instanceof (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
              error: Error()
            }), VerticalListRow) : VerticalListRow))) return;
            row.rightAlign(right);
          });
        }

        leftAlign() {
          var bounds = this.getBounds();
          var left = bounds.x;
          this.nodes.forEach(row => {
            if (!(row instanceof (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
              error: Error()
            }), VerticalListRow) : VerticalListRow))) return;
            row.leftAlign(left);
          });
        }

      });

      VerticalList.typeId = "VerticalList";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c293a6d397943bf3ba6ff7105803c29a7e490ab.js.map