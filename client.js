const net = require('net');

let host = '165.227.47.243'; // LHL Server

const connect = () => {
  const conn = net.createConnection({
    //host: 'localhost', // for now
    host: host,
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
  });

  return conn;
};

module.exports = { connect };