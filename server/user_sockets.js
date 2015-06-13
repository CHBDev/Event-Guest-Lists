var query = require("../app.js").query;

module.exports = function(io, socket){


  var login = function(socket, data){
    console.log("inside login func");
    //do password verification stuff, probably bcrypt on the client
     query.user.login(data, function(err, result){
      console.log("inside final cb to client for login");
      socket.emit("user:login:result", {err: err, result: result});
    });
  };

  socket.on("user:create", function(data){
    query.user.create(data, function(err, result){
      socket.emit("user:create:result", {err:err, result:result});
      //auto log in here, maybe only notify client on error
      //and on success just trigger login
      login(socket, data);
    });
  });

  socket.on("user:modify", function(data){
    query.user.modify(data);
  });

  socket.on("user:remove", function(data){
    query.user.remove(data);
  });

  socket.on("user:login", function(data){
    console.log("user trying to log in");
    login(socket, data);

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
