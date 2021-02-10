let connection; //Stores the actice TCP connection object

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
}

const handleUserInput = function (key){
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w'){
    console.log("up")
    connection.write("Move: up")

  } else if (key === 'a'){
    console.log("left")
    connection.write("Move: left")

  } else if (key === 's'){
    console.log("down")
    connection.write("Move: down")

  } else if (key === 'd'){
    console.log("right")
    connection.write("Move: right")

  } else if (key === 'e'){
    console.log("Say: hsss")
    connection.write("Say: hsss")

  } else if (key === 'q'){
    console.log("Say: hi <3")
    connection.write("Say: hi <3")
  }
};

setupInput();


module.exports = { setupInput } 