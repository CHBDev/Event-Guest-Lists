controllers = angular.module("theClient.controllers", []);

controllers.

  controller('ClientController', function($scope, $http, socket){
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

  });
