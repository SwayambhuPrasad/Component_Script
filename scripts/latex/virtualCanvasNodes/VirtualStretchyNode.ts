import { ClassList } from ".";
import { VirtualCanvasNode } from "./VirtualCanvasNode";

/**
 * A StretchyNode represents the interface for a node who's size is dynamic.
 * A stretchy nodes' size is determined by the content within or surrounding it.
 * It gets set by the VerticalList.
 *
 * @abstract
 */
export abstract class VirtualStretchyNode extends VirtualCanvasNode {
  minWidth: number;

  constructor(minWidth: number, classes: ClassList) {
    super(classes);
    this.minWidth = minWidth ?? 0;
  }

  get listWidth() {
    return this.bounds.width;
  }

  set listWidth(listWidth) {
    this.bounds.width = listWidth + this.minWidth;
  }
}
