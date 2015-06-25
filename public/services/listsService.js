services

 .factory('lists', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentList = null;
    r.secondary.currentList = null;

    r.listsArray = [
                    {name: "important people", owner: "cory", origEvent: "Big Wedding", guestCount: 900},
                    {name: "only lawyers", owner: "joe", origEvent: "GALA DAY", guestCount: 207},
                    {name: "Presidents", owner: "ken", origEvent: "Labour Day Party", guestCount: 789}
                  ];

    return r;
  });
