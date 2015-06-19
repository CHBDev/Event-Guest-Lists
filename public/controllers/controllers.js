controllers = angular.module("theClient.controllers", []);

controllers.

  controller('ClientController', function($scope, $http, socket, users, groups, lists, events, controllerDispatch){

    var s = $scope;
    s.groups = groups;
    s.lists = lists;
    s.users = users;
    s.events = events;
    s.dispatch = controllerDispatch;

    socket.on('init', function(data){
      console.log("INIT: ", data.stuff);
    });

    socket.on('user:join', function(data){

    });

    socket.on('user:left', function(data){

    });

    socket.on('list:update', function(data){

    });

    socket.on('event:update', function(data){

    });





    s.changePrimaryTab = function(tabName){
        console.log("CHANGE PRIMARY TAB");
      s.dispatch.changePrimaryTab(tabName);
    }

    s.changeSecondaryTab = function(tabName){
      s.dispatch.changeSecondaryTab(tabName);
    }


  })

  .directive('tabsView', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/tabs.html"
  }
});
