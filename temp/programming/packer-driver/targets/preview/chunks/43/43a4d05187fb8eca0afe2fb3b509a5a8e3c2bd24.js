System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, root, networkReplicator, _crd, defaults, configs, trace, debug, log, info, warn, error;

  function applyErrorReporter(logger) {
    if (!logger || !logger.setLevel) {
      throw new TypeError("Argument is not a logger");
    }

    var originalFactory = logger.methodFactory;
    var name = logger.name || "";

    logger.methodFactory = function (methodName, logLevel, loggerName) {
      var originalMethod = originalFactory(methodName, logLevel, loggerName);
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (logLevel === 4) (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
          error: Error()
        }), networkReplicator) : networkReplicator).sendError(...args);
        originalMethod.apply(undefined, args);
      };
    };

    logger.setLevel(logger.getLevel());
    return logger;
  }

  function applyPrefixer(logger, config) {
    if (!logger || !logger.setLevel) {
      throw new TypeError("Argument is not a logger");
    }

    var originalFactory = logger.methodFactory;
    var name = logger.name || "";
    var parent = configs[name] || configs[""] || defaults;

    function methodFactory(methodName, logLevel, loggerName) {
      var originalMethod = originalFactory(methodName, logLevel, loggerName);
      var options = configs[loggerName] || configs[""];
      var hasTimestamp = options.template.indexOf("%t") !== -1;
      var hasLevel = options.template.indexOf("%l") !== -1;
      var hasName = options.template.indexOf("%n") !== -1;
      return function () {
        var content = ""; // skip the root method for child loggers to prevent duplicate logic

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (name || !configs[loggerName]) {
          var _date = new Date();

          var _timestamp = options.timestampFormatter(_date);

          var _level = options.levelFormatter(methodName);

          var lname = options.nameFormatter(loggerName == null ? void 0 : loggerName.toString());

          if (options.format) {
            content += options.format(_level, lname, _date);
          } else {
            content += options.template;

            if (hasTimestamp) {
              content = content.replace(/%t/, _timestamp);
            }

            if (hasLevel) content = content.replace(/%l/, _level);
            if (hasName) content = content.replace(/%n/, lname);
          }

          if (args.length && typeof args[0] === "string") {
            // concat prefix with first argument to support string substitutions
            args[0] = content + " " + args[0];
          } else {
            args.unshift(content);
          }
        }

        originalMethod.apply(undefined, args);
      };
    }

    if (!configs[name]) {
      logger.methodFactory = methodFactory;
    } // for remove inherited format option if template option preset


    config = config || {};
    if (config.template) config.format = undefined;

    function merge(target) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var length = args.length;

      for (var i = 0; i < length; i++) {
        for (var key in args[i]) {
          if (Object.prototype.hasOwnProperty.call(args[i], key)) {
            target[key] = args[i][key];
          }
        }
      }

      return target;
    }

    configs[name] = merge({}, parent, config);
    logger.setLevel(logger.getLevel());
    return logger;
  }

  function _reportPossibleCrUseOfroot(extras) {
    _reporterNs.report("root", "./loglevel.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./loglevel.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogLevelNumbers(extras) {
    _reporterNs.report("LogLevelNumbers", "./loglevel.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      root = _unresolved_2.default;
    }, function (_unresolved_3) {
      networkReplicator = _unresolved_3.networkReplicator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7bf1+ohSpBu6Z29EKcY1jX", "Logger", undefined);

      defaults = {
        template: "[%t] %l:",
        levelFormatter: function levelFormatter(level) {
          return level.toUpperCase();
        },
        nameFormatter: function nameFormatter(name) {
          return name || "root";
        },
        timestampFormatter: function timestampFormatter(date) {
          return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        },
        format: undefined
      };
      configs = {};
      applyPrefixer(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root);
      applyErrorReporter(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root);

      _export("trace", trace = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).trace.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _export("debug", debug = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).debug.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _export("log", log = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).log.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _export("info", info = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).info.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _export("warn", warn = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).warn.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _export("error", error = (_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root).error.bind(_crd && root === void 0 ? (_reportPossibleCrUseOfroot({
        error: Error()
      }), root) : root));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43a4d05187fb8eca0afe2fb3b509a5a8e3c2bd24.js.map