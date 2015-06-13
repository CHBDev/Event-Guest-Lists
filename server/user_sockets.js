var query = require("../app.js").query;

module.exports = function(io, socket){
  socket.on("user:create", function(data){
    query.user.create(data);
  });
  socket.on("user:modify", function(data){
    query.user.modify(data);
  });
  socket.on("user:remove", function(data){
    query.user.remove(data);
  });
}


//NAMESPACE
// var nsp = io.of('/my-namespace');
// nsp.on('connection', function(socket){
//   console.log('someone connected'):
// });
// nsp.emit('hi', 'everyone!');

//on client for namespace:
//var socket = io('/my-namespace');
