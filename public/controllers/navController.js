controllers

  .controller('NavController', function($scope, $http, socket, users, groups, lists, controllerDispatch){
      var s = $scope;
      s.users = users;
      s.dispatch = controllerDispatch;
      s.groups = groups;
      s.lists = lists;

      s.menuIsOpen = false;

      s.toggleMainMenu = function(){
        s.menuIsOpen = s.menuIsOpen ? false : true;
      }




  })

  .controller('PrimaryController', function($scope, socket, users, groups, lists, controllerDispatch){
    var s = $scope;
    s.pOrS = "primary";
  })

  .controller('SecondaryController', function($scope, socket, users, groups, lists, controllerDispatch){
    var s = $scope;
    s.pOrS = "secondary";
  });




