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
        });
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

    r.pOrSOpposite = function(pOrS){
      return pOrS === "primary" ? "secondary" : "primary";
    };

    r.currentSelectedToolbar = function(pOrS){
      var selectedTab = r[pOrS].currentTab;
      console.log(pOrS + " selectedTab: " + selectedTab);
      console.log("current toolbar: " + r[selectedTab][pOrS].currentToolbarButton);
      return r[selectedTab][pOrS].currentToolbarButton;
    }

    r.currentSelectedTabName = function(pOrS, useOpp){
      if(useOpp === true){
        pOrS = r.pOrSOpposite(pOrS);
      }
      var name = r[pOrS].currentTab;
      if(r[name].currentSelection){
        if(r[name].currentSelection.name){
          return r[name].currentSelection.name;
        }else{
          console.log("ERROR: selection has no name");
          return null;
        }
      }else{
        return null;
        console.log("WARNING: no current selection");
      }
    }

    r.primary = {currentTab: null};
    r.secondary = {currentTab: null};

    r.changePrimaryTab = function(name){
      $rootScope.$broadcast("primary", {name:name});
      r.primary.currentTab = name;

    };
    r.changeSecondaryTab = function(name){
      $rootScope.$broadcast("secondary", {name:name});
      r.secondary.currentTab = name;
    };

    r.primary.currentTab = 'users'; //sets default tabs
    r.secondary.currentTab = 'users'; //sets default tabs

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

    r.names = {user: "User", users: "Users", group: "Group", groups: "Groups", event: "Events", events: "Events", list: "List", lists: "Lists", guest: "Guest", guests: "Guests", message: "Note", messages: "Notes", edit: "Edit", "new": "New"};

    return r;
  });
