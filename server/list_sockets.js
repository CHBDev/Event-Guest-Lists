module.exports = function(io, socket){
  socket.on("list:create", function(data){
    query.list.create(data);
  });
  socket.on("list:modify", function(data){
    query.list.modify(data);
  });
  socket.on("list:remove", function(data){
    query.list.remove(data);
  });
}
