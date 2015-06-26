module.exports = function(io, socket){
  socket.on("group:create", function(data){
    query.group.create(data);
  });
  socket.on("group:modify", function(data){
    query.group.modify(data);
  });
  socket.on("group:remove", function(data){
    query.group.remove(data);
  });
};
