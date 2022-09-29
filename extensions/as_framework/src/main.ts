import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";

/**
 * @en Registration method for the main process of Extension
 */
export const methods = {
  createTemplate() {
    const url = `db://assets/AppletController.ts`;
    const content = readFileSync(join(__dirname, "../framework/AppletController.ts"), "utf-8");
    Editor.Message.request("asset-db", "create-asset", url, content);
  },
  async createTranslations() {
    const content = await Editor.Message.request("scene", "execute-scene-script", {
      name: "as_framework",
      method: "generateCSVText",
      args: [],
    });

    const savePaths = await Editor.Dialog.save({
      title: "Select the file path to save the translations template.",
      type: "file",
      extensions: ".csv",
    });

    if (!savePaths.canceled && savePaths.filePath) {
      writeFile(savePaths.filePath, content);
    }
  },
  openCollabDebug() {
    Editor.Panel.open("as_framework.collabDebug");
  },
};
