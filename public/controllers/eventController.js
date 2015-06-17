controllers

  .controller('EventController', function($scope, $http, socket, users, controllerDispatch){
    var s = $scope;
    s.users = users;

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



  })


  .directive('eventsPrimary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/events.html"
  }
})

.directive('eventsSecondary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/events.html"
  }
});
