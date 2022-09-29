System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Canvas, gfx, Node, _crd;

  // NOTE: only escapes a " if it's not already escaped
  function escapeDoubleQuotes(str) {
    return str.replace(/\\([\s\S])|(")/g, '"$1$2');
  }

  function encloseDoubleQuotes(str) {
    return `"${escapeDoubleQuotes(str)}"`;
  }

  function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  function findParentCanvas(node) {
    const canvas = node.getComponent(Canvas);
    if (canvas) return canvas;
    const parent = node.parent;

    if (parent && Node.isNode(parent)) {
      return findParentCanvas(parent);
    }

    return null;
  }

  function indentString(string, count = 1, options = {}) {
    const {
      indent = " ",
      includeEmptyLines = false
    } = options;

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
  } // export function extensionMethod(ctor: any): MethodDecorator {
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


  function readPixels(x = 0, y = 0, width, height) {
    width = width || this.width;
    height = height || this.height;
    const gfxTexture = this.getGFXTexture();

    if (!gfxTexture) {
      return null;
    }

    const gfxDevice = this._getGFXDevice();

    const bufferViews = [];
    const regions = [];
    const region0 = new gfx.BufferTextureCopy();
    region0.texOffset.x = x;
    region0.texOffset.y = y;
    region0.texExtent.width = width;
    region0.texExtent.height = height;
    regions.push(region0);
    const buffer = new Uint8Array(width * height * 4);
    bufferViews.push(buffer);
    gfxDevice == null ? void 0 : gfxDevice.copyTextureToBuffers(gfxTexture, bufferViews, regions);
    return buffer;
  }

  _export({
    escapeDoubleQuotes: escapeDoubleQuotes,
    encloseDoubleQuotes: encloseDoubleQuotes,
    camelToSnake: camelToSnake,
    findParentCanvas: findParentCanvas,
    indentString: indentString,
    readPixels: readPixels
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Canvas = _cc.Canvas;
      gfx = _cc.gfx;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3365zAdK9B8ouR0ZdgzdPi", "Utils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0e62c75c68e3174f16c208884b85a2d43951574.js.map