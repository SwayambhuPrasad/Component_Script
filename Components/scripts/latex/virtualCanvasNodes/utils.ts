export function standardizeColor(str: string) {
  if (str === "") return str;
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = str;
  return ctx.fillStyle;
}

export function measureText(text: string, font: string) {
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.font = font;

  // top is critical to the fillText() calculation
  // you can use other positions, but you need to adjust the calculation
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  const metrics = ctx.measureText(text);
  const width = metrics.width;
  const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
  const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  return { width, height };
}
