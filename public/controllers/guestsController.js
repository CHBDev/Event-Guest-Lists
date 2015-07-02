controllers

  .controller('GuestsController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "guests", fileInput: {} };

    s.socket.on('guest:update', function(data){

    });



    s.$on("primary", function(event, args){
      if(args.name === "group"){

      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "group"){

      }
    });

     s.getArray = function(pOrS){
      //TODO need logic for which list here
      return s.guests.cache.guestsArray;
    };

  })

  // .directive('groupPrimary', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: "../templates/group.html"
  //   }
  // })

  .directive('guestsDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/guests.html"
    };
  })

   .directive('guestDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/guest.html"
    };
  });
