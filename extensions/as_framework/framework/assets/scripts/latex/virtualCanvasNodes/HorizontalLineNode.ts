import { ClassList } from ".";
import { standardizeColor } from "./utils";
import { VirtualStretchyNode } from "./VirtualStretchyNode";

/**
 * A HorizontalLineNode represents a line with a configurable color.
 * It's stretchy as it's size is determined by the content surrounding it.
 *
 * Examples include frac, hline.
 */
export class HorizontalLineNode extends VirtualStretchyNode {
  static readonly typeId = "HorizontalLineNode";

  color: string;

  constructor(color: string, minWidth: number, classes: ClassList) {
    super(minWidth, classes);
    this.color = standardizeColor(color);
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return HorizontalLineNode.typeId;
  }
}
