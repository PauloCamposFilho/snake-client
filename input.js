let connection;
let currentIntervalID;
let intervalMilliseconds = 50;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const initiateInterval = (action, intervalMilliseconds) => {
  currentIntervalID = setInterval(() => {
    connection.write(action);
  }, intervalMilliseconds);
};

const stopInterval = (intervalID) => {
  clearInterval(intervalID);
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
  case 'w': {
    stopInterval(currentIntervalID);
    initiateInterval("Move: up", intervalMilliseconds);
    break;
  }
  case 's': {
    stopInterval(currentIntervalID);
    initiateInterval("Move: down", intervalMilliseconds);
    break;
  }
  case 'a': {
    stopInterval(currentIntervalID);
    initiateInterval("Move: left", intervalMilliseconds);
    break;
  }
  case 'd': {
    stopInterval(currentIntervalID);
    initiateInterval("Move: right", intervalMilliseconds);
    break;
  }
  default: {
    console.log("Invalid key!", key);
  }
  }
};

module.exports = { setupInput };