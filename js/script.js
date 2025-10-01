const Logger = (function () {
  let instance;

  function createInstance() {
    const logs = [];

    return {
      log: function (message) {
        const timestamp = new Date().toISOString();
        logs.push(`[${timestamp}] ${message}`);
        console.log(`[LOG]: ${message}`);
      },
      getLogs: function () {
        return logs;
      },
      count: function () {
        return logs.length;
      }
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("App started");
logger2.log("User logged in");

console.log(logger1 === logger2);
console.log("Log count:", logger1.count());
console.log("All logs:", logger1.getLogs());