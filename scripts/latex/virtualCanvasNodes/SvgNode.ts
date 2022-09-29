import { ClassList } from ".";
import KatexTypes from "../katex/katex.d";
import { VirtualStretchyNode } from "./VirtualStretchyNode";

/**
 * An SvgNode represents an svg element, which gets converted to canvas drawing commands.
 * It's stretchy as it's size is determined by the content surrounding it.
 *
 * Examples include sqrt, overleftarrow.
 */
export class SvgNode extends VirtualStretchyNode {
  static readonly typeId = "SvgNode";

  virtualHtmlNode: KatexTypes.domTree.SvgNode;

  constructor(virtualHtmlNode: KatexTypes.domTree.SvgNode, minWidth: number, classes: ClassList) {
    super(minWidth, classes);
    this.virtualHtmlNode = virtualHtmlNode;
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @return {string}
   */
  get type(): string {
    return SvgNode.typeId;
  }

  /**
   * Sets the table width for the node and adjusts the Svg attributes
   */
  get listWidth() {
    return this.bounds.width;
  }

  set listWidth(listWidth) {
    this.bounds.width = listWidth;
    this.virtualHtmlNode.attributes.width = listWidth.toString();
  }
}
