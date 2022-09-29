import { ClassList } from ".";
import { Bounds, VirtualCanvasNode } from "./VirtualCanvasNode";
import { VirtualContainerNode } from "./VirtualContainerNode";

export class VerticalListRow extends VirtualContainerNode {
  static readonly typeId = "VerticalListRow";

  strutBounds: Bounds | null;

  constructor(classes: ClassList) {
    super(classes);
    this.strutBounds = null;
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return VerticalListRow.typeId;
  }

  addBaseStrut(padNode: VirtualCanvasNode) {
    if (!this.strutBounds) {
      this.strutBounds = padNode.getBounds().clone();
    } else {
      this.strutBounds.extend(padNode.getBounds());
    }
  }

  leftAlign(tableLeft: number) {
    this.setPosition(tableLeft, this.bounds.y);
  }

  centerAlign(tableCenter: number) {
    const width = this.getBounds().width;
    const center = tableCenter - width / 2;
    this.setPosition(center, this.bounds.y);
  }

  rightAlign(tableRight: number) {
    const width = this.getBounds().width;
    const right = tableRight - width;
    this.setPosition(right, this.bounds.y);
  }
}
