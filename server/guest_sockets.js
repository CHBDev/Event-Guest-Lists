module.exports = function(io, socket){
  socket.on("guest:create", function(data){
    query.guest.create(data);
  });
  socket.on("guest:modify", function(data){
    query.guest.modify(data);
  });
  socket.on("guest:remove", function(data){
    query.guest.remove(data);
  });
}
