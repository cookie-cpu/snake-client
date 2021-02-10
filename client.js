const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  
  conn.setEncoding('utf8'); 

  conn.on("data", (data) => {console.log(data)})

  conn.on("connect", () => {
    console.log("Connection established. Connected to server")
  });
  conn.on('connect', () => {
    conn.write('Name: MSC');
  });
  
  return conn;
};

module.exports = { connect } 