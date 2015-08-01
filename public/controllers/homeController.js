controllers

  .controller('HomeController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "home", fileInput: {} };

    s.loginFormData = {email: null, password: null, confirm: null};
    s.createUserOpen = false;
    s.createUserButtonTitle = "New Account";
    s.loginButtonTitle = "Login";

    s.toggleLoginCreate = function(){

      if(s.createUserOpen === true){
        s.createUserOpen = false;
        s.createUserButtonTitle = "New Account";
        s.loginButtonTitle = "Login";
      }else{
        s.createUserOpen = true;
        s.createUserButtonTitle = "Cancel";
        s.loginButtonTitle = "Create";
      }

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

.directive('accountDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/account.html'
  };
})

.directive('startDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/start.html'
  };
})

.directive('orgDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/org.html'
  };
})

.directive('helpDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/help.html'
  };
})

.directive('titleDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/title.html'
  };
})

.directive('titlewithsubDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/titlewithsub.html'
  };
});


