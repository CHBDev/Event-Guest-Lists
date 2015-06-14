controllers

  .controller('NavController', function($scope, $http, socket){
      var s = $scope;
      s.menuIsOpen = false;

      s.toggleMenu = function(){
        s.menuIsOpen = s.menuIsOpen ? false : true;
      }


  });
