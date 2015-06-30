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


    s.guestsTableSort = 'name';
    s.guestsTableSortReverse = true;
    s.guestsTableOrder = function(prop){
        $scope.guestsTableSortReverse = ($scope.guestsTableSort === prop) ? !$scope.guestsTableSortReverse : false;
        $scope.guestsTableSort = prop;
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
