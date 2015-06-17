controllers = angular.module("theClient.controllers", []);

controllers.

  controller('ClientController', function($scope, $http, socket, controllerDispatch){

    var s = $scope;

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



    s.dispatch = controllerDispatch;

    s.changePrimaryTab = function(tabName){
      s.dispatch.changePrimaryTab(tabName);
    }

    s.changeSecondaryTab = function(tabName){
      s.dispatch.changeSecondaryTab(tabName);
    }


  });
