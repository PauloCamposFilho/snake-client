const net = require('net');
const { IP, PORT, PLAYER_NAME } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // set correct encoding
  conn.setEncoding('utf-8');
  
  // handle data received from server
  conn.on('data', (data) => {
    console.log('data:', data);
  });

  conn.on('connect', () => {
    conn.write(PLAYER_NAME);
  });

  return conn;
};

module.exports = { connect };