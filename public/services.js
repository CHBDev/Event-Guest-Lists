angular.module("theClient.services", []).

  factory('socket', function($rootScope){
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
  });
