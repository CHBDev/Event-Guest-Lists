controllers = angular.module("theClient.controllers", []);

controllers.

  controller('ClientController', function($scope, $http, controllerDispatch){

    var s = $scope;
    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: null, fileInput: {} };

    s.socket.on('init', function(data){
      console.log("INIT: ", data.stuff);
    });

    s.socket.on('user:join', function(data){

    });

    s.socket.on('user:left', function(data){

    });

    s.socket.on('list:update', function(data){

    });

    s.socket.on('event:update', function(data){

    });

    s.changePrimaryTab = function(tabName){

      s.dispatch.changePrimaryTab(tabName);
    };

    s.changeSecondaryTab = function(tabName){
      s.dispatch.changeSecondaryTab(tabName);
    };


  })

  .directive('btn', function(){
    return {
      restrict: 'E',

    };
  })

  .directive('tabsView', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/tabs.html"
    };
  })

  .directive('makeNew', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/makeNew.html"
    }
  })
