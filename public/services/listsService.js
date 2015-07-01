services

 .factory('lists', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentList = null;
    r.secondary.currentList = null;

    r.cache = {};

    r.cache.headers = [["List Name","name",4],["Owner", "owner",2], ["Original Event","origEvent",4],["Guest Count","guestCount",1]];


    r.cache.usersLists = [
                    {name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    r.cache.eventsLists = [
                    {name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    r.cache.groupsLists = [
                    {name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    return r;
  });
