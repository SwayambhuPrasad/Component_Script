System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, root, networkReplicator, _crd, defaults, configs, trace, debug, log, info, warn, error;

  function applyErrorReporter(logger) {
    if (!logger || !logger.setLevel) {
      throw new TypeError("Argument is not a logger");
    }

    const originalFactory = logger.methodFactory;
    const name = logger.name || "";

    logger.methodFactory = function (methodName, logLevel, loggerName) {
      const originalMethod = originalFactory(methodName, logLevel, loggerName);
      return function (...args) {
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

    const originalFactory = logger.methodFactory;
    const name = logger.name || "";
    const parent = configs[name] || configs[""] || defaults;

    function methodFactory(methodName, logLevel, loggerName) {
      const originalMethod = originalFactory(methodName, logLevel, loggerName);
      const options = configs[loggerName] || configs[""];
      const hasTimestamp = options.template.indexOf("%t") !== -1;
      const hasLevel = options.template.indexOf("%l") !== -1;
      const hasName = options.template.indexOf("%n") !== -1;
      return function (...args) {
        let content = ""; // skip the root method for child loggers to prevent duplicate logic

        if (name || !configs[loggerName]) {
          const date = new Date();
          const timestamp = options.timestampFormatter(date);
          const level = options.levelFormatter(methodName);
          const lname = options.nameFormatter(loggerName == null ? void 0 : loggerName.toString());

          if (options.format) {
            content += options.format(level, lname, date);
          } else {
            content += options.template;

            if (hasTimestamp) {
              content = content.replace(/%t/, timestamp);
            }

            if (hasLevel) content = content.replace(/%l/, level);
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

    function merge(target, ...args) {
      const length = args.length;

      for (let i = 0; i < length; i++) {
        for (const key in args[i]) {
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
        levelFormatter: function (level) {
          return level.toUpperCase();
        },
        nameFormatter: function (name) {
          return name || "root";
        },
        timestampFormatter: function (date) {
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
//# sourceMappingURL=18ebff757566037ada5c2714404aadc0b983966a.js.map