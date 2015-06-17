controllers

  .controller('NavController', function($scope, $http, socket, users, controllerDispatch){
      var s = $scope;
      s.users = users;

      s.menuIsOpen = false;

      s.toggleMainMenu = function(){
        s.menuIsOpen = s.menuIsOpen ? false : true;
      }

      s.dispatch = controllerDispatch;


  });
