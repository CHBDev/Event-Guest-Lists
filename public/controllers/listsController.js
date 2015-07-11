controllers

  .controller('ListsController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "lists", editTable:{name: "guests", doNotImport: {}}, fileInput: {} };

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
      if(s.lists[pOrS].currentToolbarButton === "edit"){
        return s.conSec.fileInput.data;
      }

      return s.lists.cache.usersLists;
    };


    // s.List = function(){
    //     this.myGuests = {};
    // };

    // s.List.prototype = s.lp = {};
    // s.lp.newList = function(){

    // };
    // s.lp.removeGuest = function(id){
    //     this.myGuests[id] = false;
    // };
    // s.lp.addGuest = function(id){
    //     this.myGuests[id] = true;
    // };
    // s.lp.cleanupGuests = function(){
    //     for(var key in this.myGuests){
    //         if(this.myGuests[key] === false){
    //             delete this.myGuests[key];
    //         }
    //     }
    // };

    s.editTableToggle = function(thing){
      s.conSec.editTable.doNotImport[thing.email] = s.conSec.editTable.doNotImport[thing.email] ? false : true;
    };

    s.editTableShow = function(thing){
      return !!s.conSec.editTable.doNotImport[thing.email];
    };

    s.listsAsDirtySections = function(listObj){
        s.tellServerDirty[listObj.id] = listObj;
    };

    s.listsAsNewLists = function(listObj){
        s.tellServerNew[listObj.id] = listObj;
    };

    s.newList = function(pOrS){
        var aList = {};
        aList.id = "NEW";
        aList.name = "NEW LIST";
        aList.owner = s.users.primary.currentSelection.id;

            //TODO: once the list is saved we'll add it to the group, events, etc


        s.dispatch[pOrS].currentTab = "lists";
        s.lists[pOrS].currentSelection = aList;
        s.lists[pOrS].currentToolbarButton = 'edit';

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
  })

  .directive('listEditDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/listEdit.html"
    };
  });
