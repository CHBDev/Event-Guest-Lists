var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var wrapper = require('./database.js');
var db = wrapper.db;
var setupSocket = require('./server_socket.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.sendfile('./public/index.html');
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

http.listen(process.env.port || 3000, function(){
  console.log('listening on *:3000');
});
