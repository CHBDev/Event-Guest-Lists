services

 .factory('groups', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentSelection = {};
    r.secondary.currentSelection = {};

    r.cache = {};
    r.cache.headers = [["Group Name","name",5],["User Count", "userCount",1], ["List Count","listCount",1],["Guest Count","guestCount",1]];
    r.cache.usersGroups = [

                    {id: "id123", name: "USERGROUP 1", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id456", name: "USERGROUP 2", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id789", name: "USERGROUP 3", userCount: 66, listCount: 666, guestCount: 6666}
                  ];

    r.cache.eventsGroups = [

                    {id: "id123", name: "EVENTGROUP 1", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id456", name: "EVENTGROUP 2", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id789", name: "EVENTGROUP 3", userCount: 66, listCount: 666, guestCount: 6666}
                  ];

    return r;
  });
