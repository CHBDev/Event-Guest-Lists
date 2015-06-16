controllers

  .controller('NavController', function($scope, $http, socket, users){
      var s = $scope;
      s.users = users;

      s.menuIsOpen = false;

      s.toggleMainMenu = function(){
        s.menuIsOpen = s.menuIsOpen ? false : true;
      }


  });
