angular.module("theClient.controllers", []).

  controller('ClientController', function($scope, $http, socket){
    socket.on('init', function(data){
      console.log("INIT: ", data.stuff);
    });

    socket.on('user:join', function(data){

    });

    socket.on('user:left', function(data){

    });

    socket.on('list:updated', function(data){

    });

  }).

  controller('OTHER', function($scope){

  });
