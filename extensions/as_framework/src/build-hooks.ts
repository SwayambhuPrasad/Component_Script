import { writeFileSync } from "fs";
import { join } from "path";
import { BuildHook } from "../@types";

function getFontData() {
  return Editor.Message.request("scene", "execute-scene-script", {
    name: "as_framework",
    method: "getFontData",
    args: [],
  });
}

export const onBeforeCompressSettings: BuildHook.onBeforeCompressSettings = async function (
  options,
  result,
) {
  var fontData = await getFontData();
  if (fontData == null) {
    console.warn("No font data found");
    return;
  }
  console.log("fontData", fontData, result.dest);
  writeFileSync(join(result.dest, "font-data.json"), JSON.stringify(fontData));
};
