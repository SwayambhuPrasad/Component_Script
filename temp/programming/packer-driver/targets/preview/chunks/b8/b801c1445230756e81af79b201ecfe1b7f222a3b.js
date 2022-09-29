System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Canvas, gfx, Node, _crd;

  // NOTE: only escapes a " if it's not already escaped
  function escapeDoubleQuotes(str) {
    return str.replace(/\\([\s\S])|(")/g, '"$1$2');
  }

  function encloseDoubleQuotes(str) {
    return "\"" + escapeDoubleQuotes(str) + "\"";
  }

  function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
  }

  function findParentCanvas(node) {
    var canvas = node.getComponent(Canvas);
    if (canvas) return canvas;
    var parent = node.parent;

    if (parent && Node.isNode(parent)) {
      return findParentCanvas(parent);
    }

    return null;
  }

  function indentString(string, count, options) {
    if (count === void 0) {
      count = 1;
    }

    if (options === void 0) {
      options = {};
    }

    var {
      indent = " ",
      includeEmptyLines = false
    } = options;

    if (typeof string !== "string") {
      throw new TypeError("Expected `input` to be a `string`, got `" + typeof string + "`");
    }

    if (typeof count !== "number") {
      throw new TypeError("Expected `count` to be a `number`, got `" + typeof count + "`");
    }

    if (count < 0) {
      throw new RangeError("Expected `count` to be at least 0, got `" + count + "`");
    }

    if (typeof indent !== "string") {
      throw new TypeError("Expected `options.indent` to be a `string`, got `" + typeof indent + "`");
    }

    if (count === 0) {
      return string;
    }

    var regex = includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
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


  function readPixels(x, y, width, height) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    width = width || this.width;
    height = height || this.height;
    var gfxTexture = this.getGFXTexture();

    if (!gfxTexture) {
      return null;
    }

    var gfxDevice = this._getGFXDevice();

    var bufferViews = [];
    var regions = [];
    var region0 = new gfx.BufferTextureCopy();
    region0.texOffset.x = x;
    region0.texOffset.y = y;
    region0.texExtent.width = width;
    region0.texExtent.height = height;
    regions.push(region0);
    var buffer = new Uint8Array(width * height * 4);
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
//# sourceMappingURL=b801c1445230756e81af79b201ecfe1b7f222a3b.js.map