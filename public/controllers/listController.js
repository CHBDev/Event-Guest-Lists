controllers

  .controller('ListController', function($scope, $http, socket, users, lists, groups, events, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.lists = lists;
    s.groups = groups;
    s.events = events;
    s.dispatch = controllerDispatch;

    socket.on('list:update', function(data){

    });



    s.$on("primary", function(event, args){
      if(args.name === "lists"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "lists"){

      }
    })

    s.listsTableSort = 'name';
    s.listsTableSortReverse = true;
    s.listsTableOrder = function(prop){
        $scope.listsTableSortReverse = ($scope.listsTableSort === prop) ? !$scope.listsTableSortReverse : false;
        $scope.listsTableSort = prop;
    };


  })

//   .directive('listsPrimary', function(){
//   return {
//     restrict: 'E',
//     templateUrl: "../templates/lists.html"
//   }
// })

.directive('listsDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/lists.html"
  }
});
