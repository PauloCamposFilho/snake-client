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
  if (key === MOVEMENT_KEYS.STOP.Key) { // stop moving
    stopInterval(currentIntervalID);
  } 

  if (CANNED_MESSAGES[key]) {
    connection.write(`${CANNED_MESSAGES.prefix}${CANNED_MESSAGES[key]}`);
  }

  switch (key) {
  case MOVEMENT_KEYS.UP.Key: {
    stopInterval();
    initiateInterval(MOVEMENT_KEYS.UP.Output, intervalMilliseconds);
    break;
  }
  case MOVEMENT_KEYS.DOWN.Key: {
    stopInterval();
    initiateInterval(MOVEMENT_KEYS.DOWN.Output, intervalMilliseconds);
    break;
  }
  case MOVEMENT_KEYS.LEFT.Key: {
    stopInterval();
    initiateInterval(MOVEMENT_KEYS.LEFT.Output, intervalMilliseconds);
    break;
  }
  case MOVEMENT_KEYS.RIGHT.Key: {
    stopInterval();
    initiateInterval(MOVEMENT_KEYS.RIGHT.Output, intervalMilliseconds);
    break;
  }
  default: {
    // console.log("Invalid key!", key);
  }
  }
};

module.exports = { setupInput };