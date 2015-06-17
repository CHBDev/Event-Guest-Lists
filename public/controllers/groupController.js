controllers

  .controller('GroupController', function($scope, $http, socket, users, controllerDispatch){
    var s = $scope;
    s.users = users;

    socket.on('group:update', function(data){

    });

    s.dispatch = controllerDispatch;

    s.$on("primary", function(event, args){
      if(args.name === "group"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "group"){

      }
    })


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
