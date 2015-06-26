module.exports = function(io, socket){
  socket.on("event:create", function(data){
    query.event.create(data);
  });
  socket.on("event:modify", function(data){
    query.event.modify(data);
  });
  socket.on("event:remove", function(data){
    query.event.remove(data);
  });
};
