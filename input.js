const { MOVEMENT_KEYS, CANNED_MESSAGES, ENCODING } = require("./constants");

let connection;
let currentIntervalID;
let intervalMilliseconds = 50;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const initiateInterval = (action, intervalMilliseconds) => {
  currentIntervalID = setInterval(() => {
    connection.write(action);
  }, intervalMilliseconds);
};

const stopInterval = () => {
  clearInterval(currentIntervalID);
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVEMENT_KEYS.STOP) { // stop moving
    stopInterval(currentIntervalID);
  }

  if (MOVEMENT_KEYS[key]) {
    stopInterval();
    initiateInterval(MOVEMENT_KEYS[key], intervalMilliseconds);
  }

  if (CANNED_MESSAGES[key]) {
    connection.write(`${CANNED_MESSAGES.prefix}${CANNED_MESSAGES[key]}`);
  }
};

module.exports = { setupInput };