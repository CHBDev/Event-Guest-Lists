var query = require("../server.js").query;

module.exports = function(io, socket){


  var login = function(socket, data){
    //do password verification stuff, probably bcrypt on the client
     query.user.login(data, function(err, result){
      socket.emit("user:login:result", {err: err, result: result});
    });
  };

  socket.on("user:create", function(data){
    query.user.create(data, function(err, result){
      socket.emit("user:create:result", {err:err, result:result});

      if(!err){
        login(socket, data);
      }

    });
  });

  socket.on("user:modify", function(data){
    query.user.modify(data);
  });

  socket.on("user:remove", function(data){
    query.user.remove(data);
  });

  socket.on("user:login", function(data){
    login(socket, data);

  });
};


//NAMESPACE
// var nsp = io.of('/my-namespace');
// nsp.on('connection', function(socket){
//   console.log('someone connected'):
// });
// nsp.emit('hi', 'everyone!');

//on client for namespace:
//var socket = io('/my-namespace');
