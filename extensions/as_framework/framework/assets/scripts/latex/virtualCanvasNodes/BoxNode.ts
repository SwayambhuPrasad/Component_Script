import { ClassList } from ".";
import { standardizeColor } from "./utils";
import { VirtualStretchyNode } from "./VirtualStretchyNode";

/**
 * A BoxNode represents a rectangle with a configurable border/background color.
 * It's stretchy as it's size is determined by the content within.
 *
 * Example include colorbox, boxed, fcolorbox.
 */
export class BoxNode extends VirtualStretchyNode {
  static readonly typeId = "BoxNode";

  backgroundColor: string;

  borderColor: string;

  borderWidth: number;

  constructor(
    backgroundColor: string,
    borderColor: string,
    borderWidth: number,
    minWidth: number,
    classes: ClassList,
  ) {
    super(minWidth, classes);
    this.backgroundColor = standardizeColor(backgroundColor);
    this.borderColor = standardizeColor(borderColor);
    this.borderWidth = borderWidth;
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return BoxNode.typeId;
  }
}
