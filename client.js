const net = require('net');
const { IP, PORT } = require('./constants.js');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8'); 

  conn.on("data", (data) => {console.log(data)})

  conn.on("connect", () => {
    console.log("Connection established. Connected to server")
  });
  
  conn.on('connect', () => {
    conn.write('Name: MSC');
  });

  conn.on('connect', () => {
    //setInterval(function(){conn.write("Move: up");}, 50)
    //setInterval((conn.write('Move: up')),50)
    //conn.write('Move: up');
  });
  
  return conn;
};

module.exports = { connect } 