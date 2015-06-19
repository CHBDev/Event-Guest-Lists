controllers

  .controller('GroupController', function($scope, $http, socket, users, groups, events, lists, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.events = events;
    s.groups = groups;
    s.lists = lists;

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

  // .directive('groupPrimary', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: "../templates/group.html"
  //   }
  // })

  .directive('groupDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/group.html"
    }
  });
