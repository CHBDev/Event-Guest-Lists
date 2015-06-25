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

  .factory('controllerDispatch', function($rootScope, socket, users, groups, events, lists, guests, messages, middle){
    var r = {};
    r.socket = socket;
    r.users = users;
    r.groups = groups;
    r.events = events;
    r.lists = lists;
    r.guests = guests;
    r.messages = messages;
    r.middle = middle;

    r.primary = {currentTab: null};
    r.secondary = {currentTab: null};

    r.changePrimaryTab = function(name){
      $rootScope.$broadcast("primary", {name:name});
      r.primary.currentTab = name;

    }
    r.changeSecondaryTab = function(name){
      $rootScope.$broadcast("secondary", {name:name});
      r.secondary.currentTab = name;
    }

    r.primary.currentTab = 'users'; //sets default tabs
    r.secondary.currentTab = 'messages'; //sets default tabs

    // r.currentPrimaryTabContent = "DEFAULT TAB";
    // r.currentSecondaryTabContent = "DEFAULT TAB";

    r.setServicesToLocalScope = function(aScope){
      aScope.socket = this.socket;
      aScope.users = this.users;
      aScope.groups = this.groups;
      aScope.events = this.events;
      aScope.lists = this.lists;
      aScope.guests = this.guests;
      aScope.messages = this.messages;
      aScope.dispatch = this;
    }.bind(r);

    return r;
  });
