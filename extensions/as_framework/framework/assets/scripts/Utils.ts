import { Canvas, Director, director, gfx, Node, rect, Rect, RenderTexture } from "cc";

export function yieldFrame() {
  return new Promise((resolve) => {
    director.once(Director.EVENT_BEGIN_FRAME, resolve);
  });
}

export function intersectionPercent(rectA: Rect, rectB: Rect) {
  if (!rectA.intersects(rectB)) return 0;
  const intersection = Rect.intersection(rect(), rectA, rectB);
  if (intersection.width === 0 || intersection.height === 0) {
    return 0;
  }

  return (intersection.width * intersection.height) / (rectA.width * rectA.height);
}

// NOTE: only escapes a " if it's not already escaped
export function escapeDoubleQuotes(str: string) {
  return str.replace(/\\([\s\S])|(")/g, '"$1$2');
}

export function encloseDoubleQuotes(str: string) {
  return `"${escapeDoubleQuotes(str)}"`;
}

export function camelToSnake(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function findParentCanvas(node: Node): Canvas | null {
  const canvas = node.getComponent(Canvas);
  if (canvas) return canvas;
  const parent = node.parent;
  if (parent && Node.isNode(parent)) {
    return findParentCanvas(parent);
  }

  return null;
}

export function indentString(
  string: string,
  count = 1,
  options: Partial<{ indent: string; includeEmptyLines: boolean }> = {},
) {
  const { indent = " ", includeEmptyLines = false } = options;

  if (typeof string !== "string") {
    throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof string}\``);
  }

  if (typeof count !== "number") {
    throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
  }

  if (count < 0) {
    throw new RangeError(`Expected \`count\` to be at least 0, got \`${count}\``);
  }

  if (typeof indent !== "string") {
    throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof indent}\``);
  }

  if (count === 0) {
    return string;
  }

  const regex = includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

  return string.replace(regex, indent.repeat(count));
}

// export function extensionMethod(ctor: any): MethodDecorator {
//   let originalFunction: Function;
//   return function (_, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//     if (!descriptor.value) return;
//     originalFunction = descriptor.value;
//     ctor.prototype[propertyKey] = function (...args: any) {
//       return originalFunction(this, ...args);
//     };
//   };
// }

// Hack for 3.x to allow !!!
/**
 * Read pixel buffer from render texture
 * @param x The location on x axis
 * @param y The location on y axis
 * @param width The pixel width
 * @param height The pixel height
 */
export function readPixels(
  this: RenderTexture,
  x = 0,
  y = 0,
  width?: number,
  height?: number,
): Uint8Array | null {
  width = width || this.width;
  height = height || this.height;
  const gfxTexture = this.getGFXTexture();
  if (!gfxTexture) {
    return null;
  }
  const gfxDevice = this._getGFXDevice();

  const bufferViews: ArrayBufferView[] = [];
  const regions = [];

  const region0 = new gfx.BufferTextureCopy();
  region0.texOffset.x = x;
  region0.texOffset.y = y;
  region0.texExtent.width = width;
  region0.texExtent.height = height;
  regions.push(region0);

  const buffer = new Uint8Array(width * height * 4);
  bufferViews.push(buffer);

  gfxDevice?.copyTextureToBuffers(gfxTexture, bufferViews, regions);

  return buffer;
}
