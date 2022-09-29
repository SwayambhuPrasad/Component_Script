import { ClassList } from ".";
import { standardizeColor } from "./utils";
import { VirtualCanvasNode } from "./VirtualCanvasNode";

/**
 * A VerticalLineNode represents a vertical line with a configurable color.
 *
 * Examples include \begin{array}{|l|}...\end{array}
 */
export class VerticalLineNode extends VirtualCanvasNode {
  static readonly typeId = "VerticalLineNode";

  color: string;

  constructor(color: string, classes: ClassList) {
    super(classes);
    this.color = standardizeColor(color);
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return VerticalLineNode.typeId;
  }
}
