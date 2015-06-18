controllers

  .controller('ListController', function($scope, $http, socket, users, lists, groups, controllerDispatch){
    var s = $scope;
    s.users = users;
    s.lists = lists;
    s.groups = groups;
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
