const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost', // for now
    port: 50541
  });
  // set correct encoding
  conn.setEncoding('utf-8');
  conn.on('data', (data) => {
    console.log('data:', data);
  });
  return conn;
};

console.log("Connecting...");
connect();