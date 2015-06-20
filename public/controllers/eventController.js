controllers

  .controller('EventController', function($scope, $http, socket, users, events, lists, groups, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.events = events;
    s.groups = groups;
    s.lists = lists;

    s.conSec = {name: "event", fileInput: {} };

    socket.on('event:update', function(data){

    });

    s.dispatch = controllerDispatch;

    s.$on("primary", function(event, args){
      if(args.name === "events"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "events"){

      }
    })


    s.eventsTableSort = 'name';
    s.eventsTableSortReverse = true;
    s.eventsTableOrder = function(prop){
        $scope.eventsTableSortReverse = ($scope.eventsTableSort === prop) ? !$scope.eventsTableSortReverse : false;
        $scope.eventsTableSort = prop;
    };



  })


//   .directive('eventsPrimary', function(){
//   return {
//     restrict: 'E',
//     templateUrl: "../templates/events.html"
//   }
// })

.directive('eventsDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/events.html"
  }
});
