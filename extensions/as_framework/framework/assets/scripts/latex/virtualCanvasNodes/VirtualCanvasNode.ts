import { ClassList } from ".";

export class Bounds {
  x: number;

  y: number;

  width: number;

  height: number;

  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? 0;
    this.height = height ?? 0;
  }

  clone() {
    return new Bounds(this.x, this.y, this.width, this.height);
  }

  /**
   * Extends the current bounds to account for the passed in Rect or Point.
   * @param  {Object} bounds - Object with x and y, with optional width/height
   */
  extend(bounds: Partial<Bounds> & Pick<Bounds, "x" | "y">) {
    const { x, y, width = 0, height = 0 } = bounds;
    if (x < this.x) {
      this.width += this.x - x;
      this.x = x;
    }
    if (y < this.y) {
      this.height += this.y - y;
      this.y = y;
    }
    if (x + width > this.x + this.width) {
      this.width = x + width - this.x;
    }
    if (y + height > this.y + this.height) {
      this.height = y + height - this.y;
    }
  }

  set(other: Partial<Bounds>) {
    this.x = other.x ?? this.x;
    this.y = other.y ?? this.y;
    this.width = other.width ?? this.width;
    this.height = other.height ?? this.height;
  }
}

class Margin {
  left: number;

  right: number;

  constructor() {
    this.left = 0;
    this.right = 0;
  }

  set(other: Partial<Margin>) {
    this.left = other.left ?? this.left;
    this.right = other.right ?? this.right;
  }
}

/**
 * A Virtual Node represents the interface for a all sub Nodes.
 * They are simple models, which allow the data to be translated to most
 * rendering platforms.
 *
 * @abstract
 */
export abstract class VirtualCanvasNode {
  margin: Margin;

  bounds: Bounds;

  classes: ClassList;

  constructor(classes: ClassList) {
    this.margin = new Margin();
    this.bounds = new Bounds();
    this.classes = classes ?? [];
  }

  /**
   * Returns the type of the VirtualCanvasNode
   *
   * @abstract
   * @return {string}
   */
  abstract get type(): string;

  /**
   * Sets the node's x/y position
   */
  setPosition(x: number, y: number) {
    this.bounds.x = x;
    this.bounds.y = y;
  }

  /**
   * Sets the node's size.
   * @param w Width
   * @param h Height
   */
  setSize(w: number, h: number) {
    this.bounds.width = w;
    this.bounds.height = h;
  }

  /**
   * Gets the abolsute bounds of this node relative to (0, 0)
   * @return {Bounds}
   */
  getBounds(): Bounds {
    return this.bounds;
  }
}
