controllers

  .controller('GroupsController', function($scope, $http, $interval, controllerDispatch){
    var s = $scope;


    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "groups", fileInput: {} };
    s.interval = $interval;

    s.socket.on('group:update', function(data){

    });

    s.$on("primary", function(event, args){
      if(args.name === "group"){

      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "group"){

      }
    });

    //s.interval(function(arr){arr.push({name: "my special groupTEST", userCount: 7, listCount: 24, guestCount: 345});}.bind(this, s.groups.cache.usersGroups), 5000);


    s.getArray = function(pOrS){
      if(s.dispatch[pOrS].currentTab === 'users'){

        return s.groups.cache.usersGroups;
      }else{
        return s.groups.cache.eventsGroups;
      }
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
    };
  })

   .directive('groupsDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/groups.html"
    };
  });


