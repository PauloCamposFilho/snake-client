const IP = "165.227.47.243";
const PORT = 50541;
const MOVEMENT_KEYS = {
  UP: {
    Key: "w",
    Output: "Move: up"
  },
  DOWN: {
    Key: "s",
    Output: "Move: down"
  },
  LEFT: {
    Key: "a",
    Output: "Move: left"
  },
  RIGHT: {
    Key: "d",
    Output: "Move: right"},
  STOP: {
    Key: "x",
    Output: "Move: stop"
  } // specific to my implementation
};

const CANNED_MESSAGES = {
  prefix: "Say: ",
  h: "Hello!",
  n: "NOMNOM!",
  p: "Heya"
};

const PLAYER_NAME = "Name: PCF";
const ENCODING = "utf-8";

module.exports = { IP, PORT, MOVEMENT_KEYS, CANNED_MESSAGES, ENCODING, PLAYER_NAME };