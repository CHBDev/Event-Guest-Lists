var app = require('express')();
var http = require('http').Server(app);
var io - require('socket.io')(http);

app.get('/', function(req, res){
  res.send('./public/index.html');
});

io.on('connection', function(socket){
  //this socket is a single user

  socket.on('disconnect', function(){
    //this user disconnected
  });

  socket.on('show list', function(listName){

  });

  socket.on('message', function(msg){
    io.emit('message', msg);
    //socket.broadcast.emit(msg) //doesn't go to sender
  });





});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
