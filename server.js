var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

io.on('connection', function(socket){
  //this socket is a single user
  console.log("user connected");

  socket.on('disconnect', function(){
    //this user disconnected
  });

  socket.on('show list', function(listName){

  });

  socket.on('message', function(msg){
    io.emit('message', msg);
    //socket.broadcast.emit(msg) //doesn't go to sender
  });




  socket.emit('init', {stuff:true});





});

http.listen(process.env.port || 3000, function(){
  console.log('listening on *:3000');
});
