import { ClassList } from ".";
import { Bounds, VirtualCanvasNode } from "./VirtualCanvasNode";

/**
 * A ContainerNode represents the container of child nodes
 * When this position is updated, so are the children's position.
 *
 * @abstract
 */
export abstract class VirtualContainerNode extends VirtualCanvasNode {
  nodes: Array<VirtualCanvasNode>;

  constructor(classes: ClassList) {
    super(classes);
    this.nodes = [];
  }

  /**
   * Adds a child node to the Container
   * @param {VirtualCanvasNode} node
   */
  addNode(node: VirtualCanvasNode) {
    this.nodes.push(node);
  }

  /**
   * Gets the last node in the container
   * @return {VirtualCanvasNode | null}
   */
  last(): VirtualCanvasNode | null {
    return this.nodes[this.nodes.length - 1];
  }

  /**
   * Moves the x position of the VirtualCanvasNode and shift the children
   */
  setPosition(x: number, y: number) {
    super.setPosition(x, y);
    const bounds = this.getBounds();
    const delta = x - bounds.x;
    this.nodes.forEach((child) => {
      const newX = child.bounds.x + delta;
      child.setPosition(newX, child.bounds.y);
    });
  }

  /**
   * Gets the absolute bounds of this node relative to (0, 0)
   * @return {Bounds}
   */
  getBounds(): Bounds {
    this.nodes.forEach((child, i) => {
      const childBounds = child.getBounds();
      if (i === 0) {
        this.bounds = childBounds.clone();
      } else {
        this.bounds.extend(childBounds);
      }
    });
    return this.bounds;
  }
}
