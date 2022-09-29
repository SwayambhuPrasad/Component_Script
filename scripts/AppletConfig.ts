import { EDITOR } from "cc/env";
import { IFontKit, loadFonts } from "./FontManager";
import { debug, warn } from "./Logger";
import rootLogger from "./loglevel.js";
import { networkReplicator } from "./NetworkReplicator";
import { i18n } from "./Translations";

const appletConfig = {
  i18n: {
    get enabled() {
      return i18n.enabled;
    },
    set enabled(value) {
      i18n.enabled = value;
    },
    get currentLanguage() {
      return i18n.currentLanguage;
    },
    set currentLanguage(value) {
      i18n.currentLanguage = value;
    },
    get resourcePath() {
      return i18n.resourcePath;
    },
    set resourcePath(value) {
      i18n.resourcePath = value;
    },
  },
  collab: {
    get enabled() {
      return networkReplicator.enabled;
    },
    set enabled(value) {
      networkReplicator.enabled = value;
    },
  },
  fonts: {
    set kits(value: IFontKit[]) {
      for (const kit of value) {
        loadFonts(kit);
      }
    },
  },
  logger: {
    get level() {
      return rootLogger.getLevel();
    },
    set level(value) {
      rootLogger.setLevel(value);
    },
  },
};

function setAppletConfig(config: any) {
  for (const category in config) {
    if (
      Object.prototype.hasOwnProperty.call(config, category) &&
      Object.prototype.hasOwnProperty.call(appletConfig, category)
    ) {
      const categoryConfig = config[category];
      for (const key in categoryConfig) {
        if (
          Object.prototype.hasOwnProperty.call(categoryConfig, key) &&
          Object.prototype.hasOwnProperty.call((appletConfig as any)[category], key)
        ) {
          (appletConfig as any)[category][key] = categoryConfig[key];
        }
      }
    }
  }
}

(async function () {
  if (EDITOR) return;
  const response = await fetch("./applet.json");
  if (response.ok) {
    setAppletConfig(await response.json());
  } else {
    warn("No applet.json found! Using the default config.");
  }

  const params = new URLSearchParams(window.location.search);
  let config = {} as any;
  for (const [key, value] of params.entries()) {
    if (key.startsWith("appletConfig.")) {
      const [, category, k] = key.split(".");
      if (category in config) {
        config[category][k] = value;
      } else {
        config[category] = { [k]: value };
      }
    }
  }

  debug("Applet config from URL:", config);
  setAppletConfig(config);
})();
