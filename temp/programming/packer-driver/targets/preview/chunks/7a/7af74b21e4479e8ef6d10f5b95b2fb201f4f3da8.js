System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function standardizeColor(str) {
    if (str === "") return str;
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  function measureText(text, font) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.font = font; // top is critical to the fillText() calculation
    // you can use other positions, but you need to adjust the calculation

    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    var metrics = ctx.measureText(text);
    var width = metrics.width;
    var height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    var actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
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
//# sourceMappingURL=7af74b21e4479e8ef6d10f5b95b2fb201f4f3da8.js.map