System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BiDirectionalMap, _crd;

  _export("BiDirectionalMap", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74064H3zUpPIbHWV7O17XLQ", "BiDirectionalMap", undefined);

      _export("BiDirectionalMap", BiDirectionalMap = class BiDirectionalMap {
        constructor(map) {
          this.forwardMap = new Map();
          this.reverseMap = new Map();

          if (map) {
            if (map instanceof Map) {
              map.forEach((value, key) => {
                this.set(key, value);
              });
            } else if (Array.isArray(map)) {
              map.forEach(entry => {
                this.set(entry[0], entry[1]);
              });
            }
          }
        }

        get size() {
          return this.forwardMap.size;
        }

        set(key, value) {
          const existingValue = this.forwardMap.get(key);
          if (existingValue != null) this.reverseMap.delete(existingValue);
          const existingKey = this.reverseMap.get(value);
          if (existingKey != null) this.forwardMap.delete(existingKey);
          this.forwardMap.set(key, value);
          this.reverseMap.set(value, key);
          return this;
        }

        clear() {
          this.forwardMap.clear();
          this.reverseMap.clear();
        }

        getValue(key) {
          return this.forwardMap.get(key);
        }

        getKey(value) {
          return this.reverseMap.get(value);
        }

        deleteKey(key) {
          const value = this.forwardMap.get(key);
          if (value == null) return false;
          this.reverseMap.delete(value);
          return this.forwardMap.delete(key);
        }

        deleteValue(value) {
          const key = this.reverseMap.get(value);
          if (key == null) return false;
          this.forwardMap.delete(key);
          return this.reverseMap.delete(value);
        }

        hasKey(key) {
          return this.forwardMap.has(key);
        }

        hasValue(value) {
          return this.reverseMap.has(value);
        }

        keys() {
          return this.forwardMap.keys();
        }

        values() {
          return this.reverseMap.keys();
        }

        entries() {
          return this.forwardMap.entries();
        }

        forEach(callbackfn, thisArg) {
          return this.forwardMap.forEach(callbackfn, thisArg);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4d8849b4a95693ffe64d33e5b7abd5c67a5abf5.js.map