import { VirtualCanvasNode } from "./VirtualCanvasNode";

/**
 * An HPaddingNode represents an invisible node (not drawn) with a specific width/x.
 *
 */
export class HPaddingNode extends VirtualCanvasNode {
  static readonly typeId = "HPaddingNode";

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return HPaddingNode.typeId;
  }
}
