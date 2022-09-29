import { ClassList } from ".";
import { VerticalListRow } from "./VerticalListRow";
import { Bounds, VirtualCanvasNode } from "./VirtualCanvasNode";
import { VirtualContainerNode } from "./VirtualContainerNode";
import { VirtualStretchyNode } from "./VirtualStretchyNode";

type Alignment = "left" | "center" | "right";

/**
 * The VerticalList class represents a 1D array of VerticalListRow's
 * which can be horizontally aligned left, right, or center
 *
 * @type {VerticalList}
 */
export class VerticalList extends VirtualContainerNode {
  static readonly typeId = "VerticalList";

  alignment: Alignment;

  rowStart: number;

  strutBounds: Bounds;

  constructor(alignment: Alignment, rowStart: number, classes: ClassList) {
    super(classes);
    this.alignment = alignment;
    this.rowStart = rowStart;
    this.strutBounds = this.bounds.clone();
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return VerticalList.typeId;
  }

  /**
   * Returns the x coordinate of the next node to be placed into the List.
   * @return {number}
   */
  getNextNodePlacement(): number {
    let x = this.rowStart + this.margin.left;
    const lastRow = this.last();
    // Assuming this is the first node in the List set x a default.
    if (lastRow == null || !(lastRow instanceof VirtualContainerNode)) return x;
    const lastNode = lastRow.last();
    if (lastNode == null) return x;

    const bounds = lastNode.getBounds();
    x = bounds.x + bounds.width + lastNode.margin.right;

    return x;
  }

  /**
   * Sets the width of the stretchy nodes contained within.
   */
  setStretchyWidths() {
    const width = this.getBounds().width;
    this.nodes.forEach((rowNode) => {
      if (!(rowNode instanceof VirtualContainerNode)) return;
      rowNode.nodes.forEach((node) => {
        if (node instanceof VirtualStretchyNode) {
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
  addRow(row: VerticalListRow) {
    this.addNode(row);
  }

  /**
   * Adds a VirtualCanvasNode to current row
   * @param {VirtualCanvasNode}
   */
  addCell(node: VirtualCanvasNode) {
    const lastRow = this.last() as VerticalListRow;
    lastRow.addNode(node);
  }

  getStrutBounds() {
    this.nodes.forEach((row) => {
      if (!(row instanceof VerticalListRow)) return;
      if (row.strutBounds) this.strutBounds.extend(row.strutBounds);
    });
    return this.strutBounds;
  }

  centerAlign() {
    const bounds = this.getBounds();
    const center = bounds.x + bounds.width / 2;
    this.nodes.forEach((row) => {
      if (!(row instanceof VerticalListRow)) return;
      row.centerAlign(center);
    });
  }

  rightAlign() {
    const bounds = this.getBounds();
    const right = bounds.x + bounds.width;
    this.nodes.forEach((row) => {
      if (!(row instanceof VerticalListRow)) return;
      row.rightAlign(right);
    });
  }

  leftAlign() {
    const bounds = this.getBounds();
    const left = bounds.x;
    this.nodes.forEach((row) => {
      if (!(row instanceof VerticalListRow)) return;
      row.leftAlign(left);
    });
  }
}
