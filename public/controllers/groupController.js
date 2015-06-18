controllers

  .controller('GroupController', function($scope, $http, socket, users, groups, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.groups = groups;

    socket.on('group:update', function(data){

    });

    s.dispatch = controllerDispatch;

    s.$on("primary", function(event, args){
      if(args.name === "group"){

      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "group"){

      }
    })


    s.groupsTableSort = 'name';
    s.groupsTableSortReverse = true;
    s.groupsTableOrder = function(prop){
        $scope.groupsTableSortReverse = ($scope.groupsTableSort === prop) ? !$scope.groupsTableSortReverse : false;
        $scope.groupsTableSort = prop;
    };


  })

  .directive('groupPrimary', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/group.html"
    }
  })

  .directive('groupSecondary', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/group.html"
    }
  });
