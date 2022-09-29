System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EDITOR, SimpleEvent, error, Papa, Polyglot, Translations, _crd, parse, i18n;

  function _reportPossibleCrUseOfSimpleEvent(extras) {
    _reporterNs.report("SimpleEvent", "./LiteEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPapa(extras) {
    _reporterNs.report("Papa", "./papaparse.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPolyglot(extras) {
    _reporterNs.report("Polyglot", "./polyglot.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      SimpleEvent = _unresolved_2.SimpleEvent;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      Papa = _unresolved_4.default;
    }, function (_unresolved_5) {
      Polyglot = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13f627tpoNOIa9EYMs4C4hN", "Translations", undefined);

      ({
        parse
      } = _crd && Papa === void 0 ? (_reportPossibleCrUseOfPapa({
        error: Error()
      }), Papa) : Papa);
      Translations = class Translations {
        constructor() {
          this._polyglotInstance = null;
          this._languagePhrases = {};
          this._currentLanguage = "US";
          this._translationsLoadedEvent = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
            error: Error()
          }), SimpleEvent) : SimpleEvent)();
          this._resourcePath = "./i18n/languagePhrases.csv";
          this._enabled = false;
        }

        /**
         * The currently loaded language id.
         * The value should be the same as in your translations data file.
         */
        get currentLanguage() {
          return this._currentLanguage;
        }

        get translationsLoadedEvent() {
          return this._translationsLoadedEvent.expose();
        }

        get resourcePath() {
          return this._resourcePath;
        }

        get enabled() {
          return this._enabled;
        }

        set currentLanguage(value) {
          if (value === this._currentLanguage) return;
          this._currentLanguage = value;

          if (this._enabled) {
            this._initializePolyglot();

            this._translationsLoadedEvent.trigger();
          }
        }

        set resourcePath(value) {
          if (value === this._resourcePath) return;
          this._resourcePath = value;
          if (this._enabled) this._init();
        }

        set enabled(value) {
          if (this._enabled === value) return;
          this._enabled = value;
          if (this._enabled) this._init();
        }
        /**
         * This method takes a text key as input, and return the localized string
         * Please read https://github.com/airbnb/polyglot.js for details
         * @param key The key string to get the phrase.
         * @param options Interpolation options.
         * @returns The translated phrase in the current language or empty string if failed.
         * @example
         * var myText = i18n.t('MY_TEXT_KEY');
         * // if your data source is defined as
         * // {"hello_name": "Hello, %{name}"}
         * // you can use the following to interpolate the text
         * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
         */


        t(key, options) {
          if (this._polyglotInstance) {
            return this._polyglotInstance.t(key, options);
          }

          return "";
        }

        async _init() {
          if (EDITOR) return;
          const text = await this._loadLanguagePhrases();

          const phrases = this._parseLanguagePhrases(text);

          this._languagePhrases = phrases;

          this._initializePolyglot();

          this._translationsLoadedEvent.trigger(); // TODO: version mismatch handling.

        }

        async _loadLanguagePhrases() {
          const response = await fetch(this._resourcePath);

          if (!response.ok) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`Error on fetching ${this._resourcePath}: ${response.statusText}`);
          }

          return response.text();
        }

        _parseLanguagePhrases(text) {
          const results = parse(text, {
            header: true,
            skipEmptyLines: true
          });

          if (results.errors.length > 0) {
            let err = "";

            for (const e of results.errors) {
              err += `CSV ${e.type} error at row ${e.row}: ${e.code}\n\t${e.message}`;
              err += "\n";
            }

            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(err);
          }

          if (results.meta.fields == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("CSV parsing failed!");
          }

          const phrases = {};
          const languages = results.meta.fields.slice(1);

          for (const lang of languages) {
            const langPhrases = {};

            for (const entry of results.data) {
              const key = entry.key;
              const phrase = entry[lang];
              langPhrases[key] = phrase;
            }

            phrases[lang] = langPhrases;
          }

          return phrases;
        }

        _initializePolyglot() {
          const phrases = this._languagePhrases[this._currentLanguage];

          if (phrases == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`The phrases for '${this._currentLanguage}' is not found.`);
          }

          if (this._polyglotInstance) {
            this._polyglotInstance.replace(phrases);
          } else {
            this._polyglotInstance = new (_crd && Polyglot === void 0 ? (_reportPossibleCrUseOfPolyglot({
              error: Error()
            }), Polyglot) : Polyglot)({
              phrases: phrases,
              locale: this._currentLanguage,
              allowMissing: true,
              onMissingKey: (key, _options, locale) => {
                (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                  error: Error()
                }), error) : error)(`Missing data for ${key} in ${locale}!`);
                return "";
              } // TODO: pluralization rules.
              // pluralRules: {}

            });
          }
        }

      };

      _export("i18n", i18n = new Translations());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b277be1b6e9ad94a2a3b36dcae1161060f53f46c.js.map