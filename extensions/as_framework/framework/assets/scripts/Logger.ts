import root, { Logger, LogLevelNumbers } from "./loglevel.js";
import { networkReplicator } from "./NetworkReplicator";

function applyErrorReporter(logger: Logger) {
  if (!logger || !logger.setLevel) {
    throw new TypeError("Argument is not a logger");
  }

  const originalFactory = logger.methodFactory;
  const name: string = (logger as any).name || "";

  logger.methodFactory = function (
    methodName: string,
    logLevel: LogLevelNumbers,
    loggerName: string | symbol,
  ) {
    const originalMethod = originalFactory(methodName, logLevel, loggerName);
    return function (...args: any[]) {
      if (logLevel === 4) networkReplicator.sendError(...args);
      originalMethod.apply(undefined, args);
    };
  };

  logger.setLevel(logger.getLevel());

  return logger;
}

interface LogPrefixOptions {
  template: string;
  levelFormatter: (level: string) => string;
  nameFormatter: (name: string | undefined) => string;
  timestampFormatter: (date: Date) => string;
  format?: (level: string, name: string | undefined, timestamp: Date) => string | undefined;
}

const defaults: LogPrefixOptions = {
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
  format: undefined,
};

const configs: Record<string | symbol, LogPrefixOptions> = {};

function applyPrefixer(logger: Logger, config?: Partial<LogPrefixOptions>) {
  if (!logger || !logger.setLevel) {
    throw new TypeError("Argument is not a logger");
  }

  const originalFactory = logger.methodFactory;
  const name: string = (logger as any).name || "";
  const parent = configs[name] || configs[""] || defaults;

  function methodFactory(
    methodName: string,
    logLevel: LogLevelNumbers,
    loggerName: string | symbol,
  ) {
    const originalMethod = originalFactory(methodName, logLevel, loggerName);
    const options = configs[loggerName] || configs[""];

    const hasTimestamp = options.template.indexOf("%t") !== -1;
    const hasLevel = options.template.indexOf("%l") !== -1;
    const hasName = options.template.indexOf("%n") !== -1;

    return function (...args: any[]) {
      let content = "";

      // skip the root method for child loggers to prevent duplicate logic
      if (name || !configs[loggerName]) {
        const date = new Date();
        const timestamp = options.timestampFormatter(date);
        const level = options.levelFormatter(methodName);
        const lname = options.nameFormatter(loggerName?.toString());

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
  }

  // for remove inherited format option if template option preset
  config = config || {};
  if (config.template) config.format = undefined;

  function merge(target: any, ...args: any[]) {
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

applyPrefixer(root);
applyErrorReporter(root);

const trace = root.trace.bind(root);
const debug = root.debug.bind(root);
const log = root.log.bind(root);
const info = root.info.bind(root);
const warn = root.warn.bind(root);
const error = root.error.bind(root);

export { trace, debug, log, info, warn, error };
