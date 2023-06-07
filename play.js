const { connect } = require("./client");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const stdin = setupInput();
stdin.on("data", handleUserInput);

console.log("Connecting...");
connect();