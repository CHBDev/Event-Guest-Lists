controllers

  .controller('HomeController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "home", fileInput: {} };

    s.loginFormData = {};
    s.createUserOpen = false;
    s.createUserButtonTitle = "New Account";
    s.loginButtonTitle = "Login";
    s.errorBoxText = "";

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
    s.reg = {};
    s.reg.emailLength = /^[^ ]{5,}$/;
    s.reg.emailChars1 = /[@]/;
    s.reg.emailChars2 = /[\.]/;
    s.reg.passwordLength = /^.{7,36}$/;
    s.reg.passwordSpecial = /[\W]{1}/;
    s.reg.passwordLetter = /[a-zA-Z]/;
    s.reg.passwordNumber = /[0-9]/;

    s.updateErrorBox = function(){
      s.errorBoxText = s.errorBoxTextEmail || s.errorBoxTextPassword || s.errorBoxTextPasswordConfirm;
    };

    s.usernameUpdate = function(){
      if(!s.loginFormData.email){
        return;
      }

      if(!s.reg.emailLength.test(s.loginFormData.email)) {
        s.errorBoxTextEmail = "Not a Valid Email";
      }else if(!s.loginFormData.email.match(s.reg.emailChars1)){
        s.errorBoxTextEmail = "Not a Valid Email";
      }else if(!s.loginFormData.email.match(s.reg.emailChars2)){
        s.errorBoxTextEmail = "Not a Valid Email";
      }else{
        s.errorBoxTextEmail = "";
      }
      s.updateErrorBox();
    };

    s.passwordUpdate = function(){
      if(!s.loginFormData.password){
        return;
      }
      if(!s.loginFormData.password.match(s.reg.passwordLength)){
        s.errorBoxTextPassword = "Password must be between 8 and 36";
      }else if(!s.loginFormData.password.match(s.reg.passwordSpecial)){
        s.errorBoxTextPassword = "Password must contain a special char";
      }else if(!s.loginFormData.password.match(s.reg.passwordLetter)){
        s.errorBoxTextPassword = "Password must contain a letter";
      }else if(!s.loginFormData.password.match(s.reg.passwordNumber)){
        s.errorBoxTextPassword = "Password must contain a number";
      }else{
        s.errorBoxTextPassword = "";
      }
      s.updateErrorBox();
    }

    s.passwordConfirmUpdate = function(){
      if(!s.loginFormData.confirm){
        return;
      }
      if(s.loginFormData.password != s.loginFormData.confirm){
        s.errorBoxTextPasswordConfirm = "Passwords do not match";
      }else{
        s.errorBoxTextPasswordConfirm = "";
      }
      s.updateErrorBox();
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


