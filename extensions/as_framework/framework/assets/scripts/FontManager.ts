import { CCString, Component, director, Label, _decorator } from "cc";
import { AS } from "./ASComponent";
import { SimpleEvent } from "./LiteEvent";
import { info } from "./Logger";
import { indentString } from "./Utils";
import WebFont from "./webfontloader.js";
const { ccclass, property, executeInEditMode } = _decorator;

const fontsLoadedEvent = new SimpleEvent<void>();
export function getFontsLoadedEvent() {
  return fontsLoadedEvent.expose();
}

export function loadFonts({ url, families }: IFontKit) {
  return new Promise<void>((resolve, _) => {
    let config: WebFont.Config = {};
    if (url === "typekit") {
      config = {
        typekit: {
          id: families.join(";"),
          //@ts-expect-error
          api: "//use.edgefonts.net",
        },
      };
    } else if (url === "google") {
      config = { google: { families } };
    } else {
      config = {
        custom: {
          families,
          urls: [url],
        },
      };
    }

    WebFont.load({
      ...config,
      classes: false,
      active() {
        fontsLoadedEvent.trigger();
      },
    });

    info(`Fonts loaded - ${url}:\n${indentString(JSON.stringify(families, undefined, 2))}`);
    resolve();
  });
}

function loadKatexFonts() {
  return loadFonts({
    url: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.2/katex.min.css",
    families: [
      "KaTeX_AMS",
      "KaTeX_Caligraphic:n4,n7",
      "KaTeX_Fraktur:n4,n7",
      "KaTeX_Main:n4,n7,i4,i7",
      "KaTeX_Math:i4,i7",
      "KaTeX_Script",
      "KaTeX_SansSerif:n4,n7,i4",
      "KaTeX_Size1",
      "KaTeX_Size2",
      "KaTeX_Size3",
      "KaTeX_Size4",
      "KaTeX_Typewriter",
    ],
  });
}

async function loadAllFonts() {
  fontsLoadedEvent.on(() => {
    const labels = director.getScene()?.getComponentsInChildren(Label);
    if (labels) {
      labels.forEach((label) => {
        if (label.useSystemFont) {
          label.markForUpdateRenderData(true);
        }
      });
    }
  });

  await loadFonts({ url: "google", families: ["Mulish:n4,i4,n7"] });
  const fonts = (await (await fetch("./font-data.json")).json()) as {
    fontKits: FontData[];
    hasLatex: boolean;
  };
  await Promise.all(fonts.fontKits.map((font) => loadFonts(font)));
  if (fonts.hasLatex) await loadKatexFonts();
  fontsLoadedEvent.trigger();
}

loadAllFonts();

export interface IFontKit {
  url: string;
  families: string[];
}

@ccclass("FontData")
export class FontData {
  @property({ tooltip: "The url of the css that contains the webfonts." }) url = "";

  @property({ type: CCString, tooltip: "Array of font families to load" }) families: string[] = [];

  toJson() {
    return {
      url: this.url,
      families: this.families,
    };
  }
}

@ccclass("FontManager")
@executeInEditMode
export class FontManager extends AS(Component) {
  @property(FontData) fontKits: FontData[] = [];

  async onLoad() {
    await Promise.all(this.fontKits.map((font) => loadFonts(font)));
    fontsLoadedEvent.trigger();
  }
}
