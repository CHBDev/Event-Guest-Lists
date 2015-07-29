controllers

  .controller('HomeController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "home", fileInput: {} };

    s.loginFormData = {email: null, password: null, confirm: null};
    s.createUserOpen = false;

    s.toggleLoginCreate = function(){
      s.createUserOpen = (s.createUserOpen === false) ? true : false;
    };

    s.passwordsMatch = function(){
      return s.loginFormData.password == s.loginFormData.confirm;
    };

    s.login = function(form){
      console.log("client login");
      s.attemptedName = form.email;
      console.log("AN", s.attemptedName);
      //could do some client side checking
      s.socket.emit('user:login', form);
    }.bind(s, s.loginFormData);

    s.logout = function(){
      s.socket.emit('user:logout', {});
      s.users.currentUsername = null;
    };

    s.create = function(form){
      s.attemptedName = form.email;
      console.log('client create');
      s.socket.emit('user:create', form);
    }.bind(s, s.loginFormData);

})

.directive('homeDir', function(){
   return {
    restrict: 'E',
    templateUrl: '../templates/home.html'
   };
 })

.directive('loginDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/login.html'
  };
});
