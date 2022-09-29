System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCString, Component, director, Label, _decorator, AS, SimpleEvent, info, indentString, WebFont, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3, _crd, ccclass, property, executeInEditMode, fontsLoadedEvent, FontData, FontManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function getFontsLoadedEvent() {
    return fontsLoadedEvent.expose();
  }

  function loadFonts({
    url,
    families
  }) {
    return new Promise((resolve, _) => {
      let config = {};

      if (url === "typekit") {
        config = {
          typekit: {
            id: families.join(";"),
            //@ts-expect-error
            api: "//use.edgefonts.net"
          }
        };
      } else if (url === "google") {
        config = {
          google: {
            families
          }
        };
      } else {
        config = {
          custom: {
            families,
            urls: [url]
          }
        };
      }

      (_crd && WebFont === void 0 ? (_reportPossibleCrUseOfWebFont({
        error: Error()
      }), WebFont) : WebFont).load({ ...config,
        classes: false,

        active() {
          fontsLoadedEvent.trigger();
        }

      });
      (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
        error: Error()
      }), info) : info)(`Fonts loaded - ${url}:\n${(_crd && indentString === void 0 ? (_reportPossibleCrUseOfindentString({
        error: Error()
      }), indentString) : indentString)(JSON.stringify(families, undefined, 2))}`);
      resolve();
    });
  }

  function loadKatexFonts() {
    return loadFonts({
      url: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.2/katex.min.css",
      families: ["KaTeX_AMS", "KaTeX_Caligraphic:n4,n7", "KaTeX_Fraktur:n4,n7", "KaTeX_Main:n4,n7,i4,i7", "KaTeX_Math:i4,i7", "KaTeX_Script", "KaTeX_SansSerif:n4,n7,i4", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4", "KaTeX_Typewriter"]
    });
  }

  async function loadAllFonts() {
    fontsLoadedEvent.on(() => {
      var _director$getScene;

      const labels = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getComponentsInChildren(Label);

      if (labels) {
        labels.forEach(label => {
          if (label.useSystemFont) {
            label.markForUpdateRenderData(true);
          }
        });
      }
    });
    await loadFonts({
      url: "google",
      families: ["Mulish:n4,i4,n7"]
    });
    const fonts = await (await fetch("./font-data.json")).json();
    await Promise.all(fonts.fontKits.map(font => loadFonts(font)));
    if (fonts.hasLatex) await loadKatexFonts();
    fontsLoadedEvent.trigger();
  }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleEvent(extras) {
    _reporterNs.report("SimpleEvent", "./LiteEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinfo(extras) {
    _reporterNs.report("info", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfindentString(extras) {
    _reporterNs.report("indentString", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebFont(extras) {
    _reporterNs.report("WebFont", "./webfontloader.js", _context.meta, extras);
  }

  _export({
    getFontsLoadedEvent: getFontsLoadedEvent,
    loadFonts: loadFonts
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      CCString = _cc.CCString;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      SimpleEvent = _unresolved_3.SimpleEvent;
    }, function (_unresolved_4) {
      info = _unresolved_4.info;
    }, function (_unresolved_5) {
      indentString = _unresolved_5.indentString;
    }, function (_unresolved_6) {
      WebFont = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbe5foVxg5Ey7ydTcXI4pzv", "FontManager", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);
      fontsLoadedEvent = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
        error: Error()
      }), SimpleEvent) : SimpleEvent)();
      loadAllFonts();

      _export("FontData", FontData = (_dec = ccclass("FontData"), _dec2 = property({
        tooltip: "The url of the css that contains the webfonts."
      }), _dec3 = property({
        type: CCString,
        tooltip: "Array of font families to load"
      }), _dec(_class = (_class2 = class FontData {
        constructor() {
          _initializerDefineProperty(this, "url", _descriptor, this);

          _initializerDefineProperty(this, "families", _descriptor2, this);
        }

        toJson() {
          return {
            url: this.url,
            families: this.families
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "url", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "families", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _export("FontManager", FontManager = (_dec4 = ccclass("FontManager"), _dec5 = property(FontData), _dec4(_class4 = executeInEditMode(_class4 = (_class5 = class FontManager extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fontKits", _descriptor3, this);
        }

        async onLoad() {
          await Promise.all(this.fontKits.map(font => loadFonts(font)));
          fontsLoadedEvent.trigger();
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "fontKits", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba6354dd83b7b6d8221c82f2d681db512ce1c181.js.map