services

 .factory('events', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentSelection = {};
    r.secondary.currentSelection = {};

    r.primary = {currentToolbarButton: "lists"};
    r.secondary = {currentToolbarButton: "lists"};

    r.cache = {};
    r.cache.headers = [["Event Name","name",5],["Owner", "owner",1], ["Date","date",1],["List Count","listCount",1]];

    r.cache.usersEvents = [
                    {id: "id123", name: "USER EVENTS 1", group:{id: "id123", name: "USERGROUP 1"}, owner: "cory", date: "10/10/10", listCount: 3, guestCount: 900},
                    {id: "id456", name: "USER EVENTS 2", group:{id: "id456", name: "USERGROUP 2"}, owner: "joe", date: "11/11/11", listCount: 7, guestCount: 207},
                    {id: "id789", name: "USER EVENTS 3", group:{id: "id789", name: "USERGROUP 3"}, owner: "ken", date: "12/12/12", listCount: 11, guestCount: 789}
                  ];
    r.cache.groupsEvents = [
                    {id: "id123", name: "GROUP EVENTS 1", group:{id: "id123", name: "USERGROUP 1"}, owner: "cory", date: "10/10/10", listCount: 3, guestCount: 900},
                    {id: "id456", name: "GROUP EVENTS 2", group:{id: "id456", name: "USERGROUP 2"}, owner: "joe", date: "11/11/11", listCount: 7, guestCount: 207},
                    {id: "id789", name: "GROUP EVENTS 3", group:{id: "id789", name: "USERGROUP 3"}, owner: "ken", date: "12/12/12", listCount: 11, guestCount: 789}
                  ];


    return r;
  });
