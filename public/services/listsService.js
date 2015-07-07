services

 .factory('lists', function(){
    var r = {};

    r.primary = {makeNewIsOpen: false};
    r.secondary = {makeNewIsOpen: false};

    r.primary.currentSelection = {};
    r.secondary.currentSelection = {};

    r.cache = {};
    r.tellServerDirty = {};
    r.tellServerNew = {};

    r.cache.headers = [["List Name","name",4],["Owner", "owner",2], ["Original Event","origEvent",4],["Guest Count","guestCount",1]];
    r.cache.keys = ["name", "owner","guests"  ];


    r.cache.usersLists = [
                    {id: '1', name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {id: '2', name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {id: '3', name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    r.cache.eventsLists = [
                    {id: '1', name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {id: '2', name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {id: '3', name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    r.cache.groupsLists = [
                    {id: '1', name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {id: '2', name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {id: '3', name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];



    return r;
  })

 // .factory('List', function(lists){
 //    var List = function()
 // })
