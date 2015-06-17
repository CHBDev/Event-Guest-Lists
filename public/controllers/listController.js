controllers

  .controller('ListController', function($scope, $http, socket, users, controllerDispatch){
    var s = $scope;
    s.users = users;

    socket.on('list:update', function(data){

    });

    s.dispatch = controllerDispatch;

    s.$on("primary", function(event, args){
      if(args.name === "lists"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "lists"){

      }
    })

    s.happy = "HAPPY LISTS";


  })

  .directive('listsPrimary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/lists.html"
  }
})

.directive('listsSecondary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/lists.html"
  }
});
