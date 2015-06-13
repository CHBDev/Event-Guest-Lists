

module.exports = function(io, socket){
  socket.on("some request", function(data){

  });

  // socket.on('user:namechange')

  socket.on('list:show', function(listName){

  });

  socket.on('message', function(msg){
    io.emit('message', msg);
    //socket.broadcast.emit(msg) //doesn't go to sender
  });
};




