// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.query = require("./database/query.js")
var setupSocket = require('./server/server_socket.js');

//set all files to serve from /public
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
  console.log("request /");
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  //this socket is a single user
  console.log("user connected");
  socket.broadcast.emit("new user connected");

  socket.on('disconnect', function(){
    //this user disconnected
  });
  setupSocket(io, socket);
  socket.emit('init', {stuff:true});

});
var port = process.env.port || 3000;
http.listen( port, function(){
  console.log('listening on port: ' + port);
});

module.exports = app;
