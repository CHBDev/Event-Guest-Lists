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

  .factory('controllerDispatch', function($rootScope, socket, users, groups, events, lists, guests, messages, middle, home){
    var r = {};
    r.socket = socket;
    r.users = users;
    r.groups = groups;
    r.events = events;
    r.lists = lists;
    r.guests = guests;
    r.messages = messages;
    r.middle = middle;
    r.home = home;

    r.getToolbarNotEdit = function(pOrS){
      var toolbar = r.currentSelectedToolbar(pOrS);
      if(toolbar === 'edit'){
        return r[pOrS].currentTab;
      }

      return toolbar;
    };

    r.eitherNotesOrEdit = function(pOrS){
      var tab = r.currentSelectedToolbar(pOrS);

      if(tab === "messages" || tab === "edit"){
        return true;
      }

      //Added this in, yeah, the method name now doesn't make much sense
      if(r.primary.currentTab === "home"){
        return true;
      }

      return false;
    };

    r.tableCopyClicked = function(pOrS){
      if(bothToolbarsTheSameType === "toolbars-not-same-type"){
        return;
      }

      //just do this in the data base in one move

      //TODO: this is the whole shebang
      //get all from active toolbar copy into other active toolbar
      //might want to do a confirm click in template first

      var inTab = r[pOrS].currentTab;
      var other = r.pOrSOpposite(pOrS);
      var outTab = r[other].currentTab;
      var tool = r.currentSelectedToolbar(pOrS);
      var outObject = r[outTab][other].currentSelection;
      var inObject = r[inTab][pOrS].currentSelection;
      r.importDataFor(inObject, tool, outTab, outObject );

    };


     r.importDataFor = function(destTab, destObj, toolbar, incTab, incObj){
      //this needs to tell the database to import
      //all of the "toolbar" from incObj into "toolbar" on myObj

    };



    r.pOrSOpposite = function(pOrS){
      return pOrS === "primary" ? "secondary" : "primary";
    };

    r.currentSelectedToolbar = function(pOrS){
      var selectedTab = r[pOrS].currentTab;
      return r[selectedTab][pOrS].currentToolbarButton;
    };

    r.bothToolbarsTheSameType = function(){
      var prim = r.currentSelectedToolbar("primary");
      var sec = r.currentSelectedToolbar("secondary");

      return (prim === sec) ? "toolbars-same-type" : "toolbars-not-same-type" ;
    };

    r.currentSelectedTabName = function(pOrS, useOpp){
      if(useOpp === true){
        pOrS = r.pOrSOpposite(pOrS);
      }
      var tab = r[pOrS].currentTab;
      if(r[tab][pOrS].currentSelection){
        if(r[tab][pOrS].currentSelection.name){
          return r[tab][pOrS].currentSelection.name;
        }else{
          console.log("ERROR: selection has no name");
          return null;
        }
      }else{
        console.log("WARNING: no current selection");
        return null;
      }
    };

    r.primary = {};
    r.secondary = {};
    r.primary.currentTab = 'home'; //sets default tabs
    r.secondary.currentTab = 'users'; //sets default tabs


    r.changePrimaryTab = function(name){
      $rootScope.$broadcast("primary", {name:name});
      r.primary.currentTab = name;

    };
    r.changeSecondaryTab = function(name){
      $rootScope.$broadcast("secondary", {name:name});
      r.secondary.currentTab = name;
    };



    r.setServicesToLocalScope = function(aScope){
      aScope.socket = this.socket;
      aScope.users = this.users;
      aScope.groups = this.groups;
      aScope.events = this.events;
      aScope.lists = this.lists;
      aScope.guests = this.guests;
      aScope.messages = this.messages;
      aScope.dispatch = this;
      aScope.home = this.home;
    }.bind(r);

    r.names = {
      user: "User", users: "Users", group: "Folder", groups: "Folders", "event": "Event",
      events: "Events", list: "List", lists: "Lists", guest: "Guest", guests: "Guests",
      message: "Note", messages: "Notes", edit: "Edit", "new": "New", select: "Select",
      remove: "Remove", home: "Home", login: "Login", logout: "Logout", start: "Start",
      account: "Account", accounts: "Accounts",
      org: "Group", orgs: "Groups", help: "Help",
      appTitle: "✴︎Invite Again", appSubTitle: "events ∙ guests ∙ lists ∙ groups"
    };

    return r;
  });
