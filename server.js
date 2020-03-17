// Requires
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require('http');

// Port normalization
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
};

// onError definition
const onError = error => {
  if (error.syscall !== "listen") throw error;

  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;

  switch (error.code) {
      case "EACCES":
          console.error(bind + " requires elevated privileges");
          process.exit(1);
          break;
      case "EADDRINUSE":
          console.error(bind + " is already in use");
          process.exit(1);
          break;
      default:
          throw error;
  }
};

// onListening definition
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
// Options is used if any type of certificate is needed.
options = {

}

const server = http.createServer(options, app);

// FRONTENDs

const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/spectra'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/spectra/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);

// BACKEND
// setting up an http server
// Sets up an https server.

server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
    console.log("Listening...")
});
