import { ClassList } from ".";
import { measureText, standardizeColor } from "./utils";
import { VirtualCanvasNode } from "./VirtualCanvasNode";

/**
 * A Text Node represents text with configurable text, font, and color.
 *
 * Examples include A, 3, \int, \prod.
 */
export class TextNode extends VirtualCanvasNode {
  static readonly typeId = "TextNode";

  text: string;

  font: string;

  color: string;

  // lineHeight: number;

  constructor(text: string, font: string, color: string, classes: ClassList) {
    super(classes);
    this.text = text;
    this.font = font;
    this.color = standardizeColor(color);

    const size = measureText(text, font);
    this.setSize(size.width, size.height);
    // this.lineHeight = size.baselineHeight;
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return TextNode.typeId;
  }
}
