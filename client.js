const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost', // for now
    port: 50541
  });
  // set correct encoding
  conn.setEncoding('utf-8');
  
  // handle data received from server
  conn.on('data', (data) => {
    console.log('data:', data);
  });

  conn.on('connect', () => {
    conn.write("Name: PCF");
  })
  return conn;
};

module.exports = { connect };