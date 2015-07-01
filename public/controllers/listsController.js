controllers

  .controller('ListsController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "lists", fileInput: {} };

    s.socket.on('list:update', function(data){

    });

    s.$on("primary", function(event, args){
      if(args.name === "lists"){
        //somehow tell dispatch what the html content should be
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "lists"){

      }
    });

    s.getArray = function(pOrS){
      //TODO need logic for which list here
      return s.lists.cache.usersLists;
    };

    s.selectButtonClicked = function(pOrS, thing){
      s.lists[pOrS].currentSelection = thing;
      s.dispatch[pOrS].currentTab = "lists";
      // s.groups[pOrS].currentSelection = thing.origEvent;
    };


  })


  .directive('listsDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/lists.html"
    };
  })

  .directive('listDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/list.html"
    };
  });
