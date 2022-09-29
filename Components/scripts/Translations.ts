import { Director, director } from "cc";
import { EDITOR } from "cc/env";
import { SimpleEvent } from "./LiteEvent";
import { debug, error } from "./Logger";

var Polyglot: any;
var Papa: any;

class Translations {
  private _polyglotInstance: any = null;

  private _languagePhrases: Record<string, Record<string, string>> = {};

  private _currentLanguage = "US";

  private _translationsLoadedEvent = new SimpleEvent<void>();

  private _resourcePath = "./i18n/languagePhrases.csv";

  private _enabled = false;

  private _isInitQueued = false;

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
    if (this._enabled) this._queueInit();
  }

  set resourcePath(value) {
    if (value === this._resourcePath) return;
    this._resourcePath = value;
    if (this._enabled) this._queueInit();
  }

  set enabled(value) {
    if (this._enabled === value) return;
    this._enabled = value;
    if (this._enabled) this._queueInit();
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
  t(key: string, options?: any) {
    if (this._polyglotInstance) {
      return this._polyglotInstance.t(key, options);
    }

    return "";
  }

  private _queueInit() {
    if (EDITOR || this._isInitQueued) return;
    this._isInitQueued = true;
    director.once(Director.EVENT_BEFORE_UPDATE, this._init, this);
  }

  private async _init() {
    try {
      const response = await fetch(this._resourcePath);
      const text = await response.text();
      const phrases = await this._parseLanguagePhrases(text);
      this._languagePhrases = phrases;
      debug("Loaded phrases:", phrases);
      this._initializePolyglot();
    } catch (err) {
      error(err);
      return;
    } finally {
      this._isInitQueued = false;
    }

    this._translationsLoadedEvent.trigger();
  }

  private async _parseLanguagePhrases(text: string) {
    // @ts-ignore
    if (!Papa) Papa = (await import("./papaparse.js")).default;
    const { parse } = Papa;
    const results = parse(text, {
      header: true,
      skipEmptyLines: true,
    });
    if (results.errors.length > 0) {
      let err = "";
      for (const e of results.errors) {
        err += `CSV ${e.type} error at row ${e.row}: ${e.code}\n\t${e.message}`;
        err += "\n";
      }
      throw new Error(err);
    }

    if (results.meta.fields == null) {
      throw new Error("CSV parsing failed!");
    }

    const phrases: Record<string, Record<string, string>> = {};
    const languages = results.meta.fields!.slice(1);
    for (const lang of languages) {
      const langPhrases: Record<string, string> = {};
      for (const entry of results.data) {
        const key = entry.key;
        const phrase = entry[lang];
        langPhrases[key] = phrase;
      }
      phrases[lang] = langPhrases;
    }

    return phrases;
  }

  private async _initializePolyglot() {
    const phrases = this._languagePhrases[this._currentLanguage];
    if (phrases == null) {
      throw new Error("The phrases for the current language is not found.");
    }

    if (this._polyglotInstance) {
      this._polyglotInstance.replace(phrases);
    } else {
      // @ts-ignore
      if (!Polyglot) Polyglot = (await import("./polyglot.js")).default;
      this._polyglotInstance = new Polyglot({
        phrases: phrases,
        locale: this._currentLanguage,
        allowMissing: true,
        onMissingKey: (key: any, _options: any, locale: any) => {
          error(`Missing data for ${key} in ${locale}!`);
          return "";
        },
        // TODO: pluralization rules.
        // pluralRules: {}
      });
    }
  }
}

export const i18n = new Translations();
