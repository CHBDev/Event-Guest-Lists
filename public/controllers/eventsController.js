controllers

  .controller('EventsController', function($scope, $http, controllerDispatch){
    var s = $scope;
    controllerDispatch.setServicesToLocalScope(s);


    s.conSec = {name: "events", fileInput: {} };

    s.socket.on('event:update', function(data){

    });



    s.$on("primary", function(event, args){
      if(args.name === "events"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "events"){

      }
    });


    s.eventsTableSort = 'name';
    s.eventsTableSortReverse = true;
    s.eventsTableOrder = function(prop){
        $scope.eventsTableSortReverse = ($scope.eventsTableSort === prop) ? !$scope.eventsTableSortReverse : false;
        $scope.eventsTableSort = prop;
    };

     s.getEventArray = function(pOrS){
      if(s.dispatch[pOrS].currentTab === 'users'){

        return s.events.cache.usersEvents;
      }else{
        return s.events.cache.groupsEvents;
      }
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
  };
})

.directive('eventDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/event.html"
  };
});
