controllers

  .controller('UserController', function($scope, $http, socket){
    var s = $scope;

    s.currentUsername = null; //or pulled from some token
    s.loginForm = {email: null, password: null, confirm: null};
    s.createUserOpen = false;

    s.toggleLoginCreate = function(){
      s.createUserOpen === false ? s.createUserOpen = true : s.createUserOpen = false;
    }

    s.login = function(form){
      console.log("client login");
      //could do some client side checking
      socket.emit('user:login', form);
    }.bind(s, s.loginForm);

    s.logout = function(){

    };

    s.create = function(form){
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
      }

    })





  });
