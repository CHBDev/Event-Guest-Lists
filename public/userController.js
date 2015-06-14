controllers

  .controller('UserController', function($scope, $http, socket, users){
    var s = $scope;

    s.users = users;

    s.loginForm = {username: null, password: null, confirm: null};
    s.createUserOpen = false;

    s.toggleLoginCreate = function(){
      s.createUserOpen === false ? s.createUserOpen = true : s.createUserOpen = false;
    }

    s.login = function(form){
      console.log("client login");
      s.attemptedName = form.username;
      //could do some client side checking
      socket.emit('user:login', form);
    }.bind(s, s.loginForm);

    s.logout = function(){
      socket.emit('user:logout', {});
      users.currentUsername = null;
    };

    s.create = function(form){
      s.attemptedName = loginForm.username;
      console.log('client create');
      socket.emit('user:create', form);
    }.bind(s, s.loginForm);


    socket.on('user:update', function(data){

    });

    socket.on('user:login:result', function(data){
      if(data.err){
        console.log("LOGIN FAILED");
      }else{
        console.log("LOGIN SUCCESS");
        users.currentUsername = s.attemptedName;
      }

    });

    socket.on('user:create:result', function(data){
      if(data.err){
        console.log("CREATE FAILED");
      }else{
        console.log("CREATE SUCCESS");
      }
    })





  });
