 services = angular.module("theClient.services", []);


 services

  .factory('socket', function($rootScope){
    var socket = io.connect();

    var r = {};

    r.on = function(eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      };

      r.emit = function(eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      };
      return r;
  })

  .factory('controllerDispatch', function($rootScope){
    var r = {};

    r.changePrimaryTab = function(name){
      $rootScope.$broadcast("primary", {name:name});
      r.currentPrimaryTab = name;
    }
    r.changeSecondaryTab = function(name){
      $rootScope.$broadcast("secondary", {name:name});
      r.currentSecondaryTab = name;
    }

    r.currentPrimaryTab = "events";
    r.currentSecondaryTab = "lists";

    // r.currentPrimaryTabContent = "DEFAULT TAB";
    // r.currentSecondaryTabContent = "DEFAULT TAB";

    return r;
  });
