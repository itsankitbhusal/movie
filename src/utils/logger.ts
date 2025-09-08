import { typedEnv } from "@/config/env";

interface ILogger {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

const isDev = typedEnv.NODE_ENV === "development";

const logger: ILogger = {
  log: (...args): void => {
    if (isDev) {
      console.log(...args);
    }
  },
  error: (...args): void => {
    if (isDev) {
      console.error(...args);
    }
  },
};

export default logger;
