services

 .factory('events', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentEvent = null;
    r.secondary.currentEvent = null;

    r.eventArray = [
                    {name: "Big Wedding", owner: "cory", date: "10/10/10", listCount: 3, guestCount: 900},
                    {name: "GALA DAY", owner: "joe", date: "11/11/11", listCount: 7, guestCount: 207},
                    {name: "Labour Day Party", owner: "ken", date: "12/12/12", listCount: 11, guestCount: 789}
                  ];

    return r;
  });
