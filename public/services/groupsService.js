services

 .factory('groups', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentGroup = null;
    r.secondary.currentGroup = null;



    r.cache = {};
    r.cache.usersGroups = [
                    {name: "my special group2", userCount: 7, listCount: 24, guestCount: 345},
                    {name: "ken fulk events2", userCount: 2, listCount: 7, guestCount: 121},
                    {name: "theBestGroup2", userCount: 66, listCount: 666, guestCount: 6666}
                  ];

    r.cache.eventsGroups = [
                    {name: "my special group", userCount: 7, listCount: 24, guestCount: 345},
                    {name: "ken fulk events", userCount: 2, listCount: 7, guestCount: 121},
                    {name: "theBestGroup", userCount: 66, listCount: 666, guestCount: 6666}
                  ];

    return r;
  });
