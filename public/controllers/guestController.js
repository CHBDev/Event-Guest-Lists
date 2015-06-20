controllers

  .controller('GuestController', function($scope, $http, socket, users, groups, events, lists, guests, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.events = events;
    s.groups = groups;
    s.lists = lists;
    s.guests = guests;
    s.dispatch = controllerDispatch;

    s.conSec = {name: "guest", fileInput: {} };

    socket.on('guest:update', function(data){

    });



    s.$on("primary", function(event, args){
      if(args.name === "group"){

      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "group"){

      }
    })


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
    }
  });
