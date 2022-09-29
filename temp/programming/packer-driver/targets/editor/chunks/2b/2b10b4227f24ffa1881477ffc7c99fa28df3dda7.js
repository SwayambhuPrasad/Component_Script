System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function standardizeColor(str) {
    if (str === "") return str;
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  function measureText(text, font) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = font; // top is critical to the fillText() calculation
    // you can use other positions, but you need to adjust the calculation

    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    const metrics = ctx.measureText(text);
    const width = metrics.width;
    const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    return {
      width,
      height
    };
  }

  _export({
    standardizeColor: standardizeColor,
    measureText: measureText
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2c60FZtMlJOLAeavl0MTVd", "utils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b10b4227f24ffa1881477ffc7c99fa28df3dda7.js.map