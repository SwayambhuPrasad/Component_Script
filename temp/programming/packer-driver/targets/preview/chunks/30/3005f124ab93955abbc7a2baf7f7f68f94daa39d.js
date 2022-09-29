System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         *
         *
         * @format
         */

        var Yoga = require("./entry-common");

        var nbind = require("./nbind.js");

        var ran = false;
        var ret = null;
        nbind({}, function (err, result) {
          if (ran) {
            return;
          }

          ran = true;

          if (err) {
            throw err;
          }

          ret = result;
        });

        if (!ran) {
          throw new Error("Failed to load the yoga module - it needed to be loaded synchronously, but didn't");
        } // $FlowFixMe ret will not be null here


        module.exports = Yoga(ret.bind, ret.lib); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './entry-common': _req,
        './nbind.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=3005f124ab93955abbc7a2baf7f7f68f94daa39d.js.map