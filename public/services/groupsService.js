services

 .factory('groups', function(){
    var r = {};

    r.primary = {currentToolbarButton: "events"};
    r.secondary = {currentToolbarButton: "events"};
    r.primary.currentSelection = {};
    r.secondary.currentSelection = {};


    r.cache = {};
    r.cache.headers = [["Folder Name","name",5],["User Count", "userCount",1], ["List Count","listCount",1],["Guest Count","guestCount",1]];
    r.cache.usersGroups = [

                    {id: "id12366", name: "August Weddings", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45677", name: "Inexpensive Cocktails", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78988", name: "Cory's Folder #3", userCount: 66, listCount: 89, guestCount: 872},
                    {id: "id12399", name: "Canceled Events 2014", userCount: 7, listCount: 24, guestCount: 25},
                    {id: "id45611", name: "Guest List Collections", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78922", name: "All Large Events", userCount: 6, listCount: 36, guestCount: 674},
                    {id: "id12333", name: "All Events 2013", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45644", name: "Standard Affairs Dec", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78955", name: "House Warmings Summer", userCount: 66, listCount: 666, guestCount: 1500},
                    {id: "id12312", name: "San Francisco Downtown", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45612", name: "San Francisco Peninsula", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78913", name: "Outdoor Events", userCount: 2, listCount: 666, guestCount: 900},
                    {id: "id12313", name: "4th Floor's Events", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45614", name: "Guest Lists by Importance", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78914", name: "Unconfirmed for July", userCount: 66, listCount: 54, guestCount: 6666},
                    {id: "id12315", name: "Ken's Closest Friends", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45616", name: "Ken's Birthday List", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78923", name: "Cory's Failed Experiments", userCount: 66, listCount: 666, guestCount: 124},
                    {id: "id12324", name: "Aug - Important", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45625", name: "Dec - Important", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78926", name: "Events over Capacity", userCount: 66, listCount: 666, guestCount: 924},
                    {id: "id12327", name: "Cory - Confirmed Lists", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45634", name: "Allstar Events", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78935", name: "Celebrity Invite Lists", userCount: 66, listCount: 666, guestCount: 32},
                    {id: "id12336", name: "Company Invite Lists", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45637", name: "Company Christmas Cards", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78945", name: "Newest Guests", userCount: 66, listCount: 12, guestCount: 562},
                    {id: "id12346", name: "Newest Events", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45647", name: "All lists 2013", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78948", name: "Cory's Folder #4", userCount: 66, listCount: 666, guestCount: 32},
                  ];

    r.cache.eventsGroups = [

                    {id: "id12366", name: "August Weddings", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45677", name: "Inexpensive Cocktails", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78988", name: "Cory's Folder #3", userCount: 66, listCount: 89, guestCount: 872},
                    {id: "id12399", name: "Canceled Events 2014", userCount: 7, listCount: 24, guestCount: 25},
                    {id: "id45611", name: "Guest List Collections", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78922", name: "All Large Events", userCount: 6, listCount: 36, guestCount: 674},
                    {id: "id12333", name: "All Events 2013", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45644", name: "Standard Affairs Dec", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78955", name: "House Warmings Summer", userCount: 66, listCount: 666, guestCount: 1500},
                    {id: "id12312", name: "San Francisco Downtown", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45612", name: "San Francisco Peninsula", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78913", name: "Outdoor Events", userCount: 2, listCount: 666, guestCount: 900},
                    {id: "id12313", name: "4th Floor's Events", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45614", name: "Guest Lists by Importance", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78914", name: "Unconfirmed for July", userCount: 66, listCount: 54, guestCount: 6666},
                    {id: "id12315", name: "Ken's Closest Friends", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45616", name: "Ken's Birthday List", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78923", name: "Cory's Failed Experiments", userCount: 66, listCount: 666, guestCount: 124},
                    {id: "id12324", name: "Aug - Important", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45625", name: "Dec - Important", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78926", name: "Events over Capacity", userCount: 66, listCount: 666, guestCount: 924},
                    {id: "id12327", name: "Cory - Confirmed Lists", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45634", name: "Allstar Events", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78935", name: "Celebrity Invite Lists", userCount: 66, listCount: 666, guestCount: 32},
                    {id: "id12336", name: "Company Invite Lists", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45637", name: "Company Christmas Cards", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78945", name: "Newest Guests", userCount: 66, listCount: 12, guestCount: 562},
                    {id: "id12346", name: "Newest Events", userCount: 7, listCount: 24, guestCount: 345},
                    {id: "id45647", name: "All lists 2013", userCount: 2, listCount: 7, guestCount: 121},
                    {id: "id78948", name: "Cory's Folder #4", userCount: 66, listCount: 666, guestCount: 32},
                  ];

    return r;
  });
