controllers

  .controller('NavController', function($scope, $http, controllerDispatch){
      var s = $scope;
      controllerDispatch.setServicesToLocalScope(s);

      s.menuIsOpen = false;

      s.toggleMainMenu = function(){
        s.menuIsOpen = s.menuIsOpen ? false : true;
      }


  })

  .controller('PrimaryController', function($scope, controllerDispatch){
    var s = $scope;
    s.pOrS = "primary";
  })

  .controller('SecondaryController', function($scope, controllerDispatch){
    var s = $scope;
    s.pOrS = "secondary";
  })

   .controller('MiddleController', function($scope, controllerDispatch){
    var s = $scope;

  });




