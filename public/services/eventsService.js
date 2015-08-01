services

 .factory('events', function(){
    var r = {};

    r.primary = {currentToolbarButton: "lists"};
    r.secondary = {currentToolbarButton: "lists"};

     r.primary.currentSelection = {};
    r.secondary.currentSelection = {};


    r.cache = {};
    r.cache.headers = [["Event Name","name",5],["Owner", "owner",1], ["Date","date",1],["List Count","listCount",1]];

    r.cache.usersEvents = [

                    {id: "id12366", name: "Williamson Wedding", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/11/15", listCount: 3, guestCount: 900},
                    {id: "id45677", name: "Ford Beach House Unveiling",group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "7/5/15", listCount: 3, guestCount: 900},
                    {id: "id78988", name: "William & Sonoma Gala", group:{id: "id123", name: "USERGROUP 1"}, owner: "Group", date: "8/19/15", listCount: 15, guestCount: 900},
                    {id: "id12399", name: "Rotary Club Parade", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "6/12/15", listCount: 2, guestCount: 900},
                    {id: "id45611", name: "Twitter's Secret Project Launch", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/24/15", listCount: 3, guestCount: 900},
                    {id: "id78922", name: "Wedding in the Woods", group:{id: "id123", name: "USERGROUP 1"}, owner: "Ken", date: "4/6/15", listCount: 15, guestCount: 900},
                    {id: "id12333", name: "Ken's Birthday 2016", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "5/24/16", listCount: 3, guestCount: 900},
                    {id: "id45644", name: "Cory's Wedding", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "8/6/15", listCount: 4, guestCount: 900},
                    {id: "id78955", name: "Day on the Green", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/28/15", listCount: 3, guestCount: 900},
                    {id: "id12312", name: "Jacobson Barmitsvah", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "4/12/15", listCount: 1, guestCount: 900},
                    {id: "id45612", name: "SPCA Adoption Block Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "5/21/15", listCount: 7, guestCount: 900},
                    {id: "id78913", name: "Cocktails, Jeans & Diamonds", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/15/14", listCount: 3, guestCount: 900},
                    {id: "id12313", name: "Elite at the Standard",  group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M.", date: "5/24/15", listCount: 5, guestCount: 900},
                    {id: "id45614", name: "Company Christmas Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "5/12/15", listCount: 1, guestCount: 900},
                    {id: "id78914", name: "Blues at the Bistro", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "5/1/15", listCount: 3, guestCount: 900},
                    {id: "id12315", name: "Bowling in Heels", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "4/7/15", listCount: 2, guestCount: 900},
                    {id: "id45616", name: "Beach House / Virgin Islands", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/2/15", listCount: 3, guestCount: 900},
                    {id: "id78923", name: "Costume Party #54", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "8/12/15", listCount: 3, guestCount: 900},
                    {id: "id12324", name: "80s Tv Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Ken", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id45625", name: "Smithsonian Black Tie", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/6/15", listCount: 3, guestCount: 900},
                    {id: "id78926", name: "Heads of State Dinner", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M", date: "5/15/14", listCount: 4, guestCount: 900},
                    {id: "id12327", name: "Ford Showcase", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id45634", name: "Marie Claire - Dinner in the Stars", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike B", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id78935", name: "Celebrity look-a-like party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M", date: "5/9/15", listCount: 1, guestCount: 900},
                    {id: "id12336", name: "Cocktails on the Ceiling", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "4/15/15", listCount: 3, guestCount: 900},
                    {id: "id45637", name: "A Night of Cards", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "4/9/15", listCount: 5, guestCount: 900},
                    {id: "id78945", name: "Spring Forward Celebration", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/3/15", listCount: 3, guestCount: 900},
                    {id: "id12346", name: "Fall Back Celebration", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/5/15", listCount: 2, guestCount: 900},
                    {id: "id45647", name: "Remembering the '90s", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "8/9/15", listCount: 1, guestCount: 900},
                    {id: "id78948", name: "Cory's Secret Elite Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike B", date: "4/4/15", listCount: 2, guestCount: 900},
                  ];

    r.cache.groupsEvents = [

                    {id: "id12366", name: "Williamson Wedding", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/11/15", listCount: 3, guestCount: 900},
                    {id: "id45677", name: "Ford Beach House Unveiling",group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "7/5/15", listCount: 3, guestCount: 900},
                    {id: "id78988", name: "William & Sonoma Gala", group:{id: "id123", name: "USERGROUP 1"}, owner: "Group", date: "8/19/15", listCount: 15, guestCount: 900},
                    {id: "id12399", name: "Rotary Club Parade", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "6/12/15", listCount: 2, guestCount: 900},
                    {id: "id45611", name: "Twitter's Secret Project Launch", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/24/15", listCount: 3, guestCount: 900},
                    {id: "id78922", name: "Wedding in the Woods", group:{id: "id123", name: "USERGROUP 1"}, owner: "Ken", date: "4/6/15", listCount: 15, guestCount: 900},
                    {id: "id12333", name: "Ken's Birthday 2016", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "5/24/16", listCount: 3, guestCount: 900},
                    {id: "id45644", name: "Cory's Wedding", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "8/6/15", listCount: 4, guestCount: 900},
                    {id: "id78955", name: "Day on the Green", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/28/15", listCount: 3, guestCount: 900},
                    {id: "id12312", name: "Jacobson Barmitsvah", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "4/12/15", listCount: 1, guestCount: 900},
                    {id: "id45612", name: "SPCA Adoption Block Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "5/21/15", listCount: 7, guestCount: 900},
                    {id: "id78913", name: "Cocktails, Jeans & Diamonds", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/15/14", listCount: 3, guestCount: 900},
                    {id: "id12313", name: "Elite at the Standard",  group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M.", date: "5/24/15", listCount: 5, guestCount: 900},
                    {id: "id45614", name: "Company Christmas Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "5/12/15", listCount: 1, guestCount: 900},
                    {id: "id78914", name: "Blues at the Bistro", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "5/1/15", listCount: 3, guestCount: 900},
                    {id: "id12315", name: "Bowling in Heels", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "4/7/15", listCount: 2, guestCount: 900},
                    {id: "id45616", name: "Beach House / Virgin Islands", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/2/15", listCount: 3, guestCount: 900},
                    {id: "id78923", name: "Costume Party #54", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joe", date: "8/12/15", listCount: 3, guestCount: 900},
                    {id: "id12324", name: "80s Tv Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Ken", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id45625", name: "Smithsonian Black Tie", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/6/15", listCount: 3, guestCount: 900},
                    {id: "id78926", name: "Heads of State Dinner", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M", date: "5/15/14", listCount: 4, guestCount: 900},
                    {id: "id12327", name: "Ford Showcase", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id45634", name: "Marie Claire - Dinner in the Stars", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike B", date: "5/9/15", listCount: 3, guestCount: 900},
                    {id: "id78935", name: "Celebrity look-a-like party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike M", date: "5/9/15", listCount: 1, guestCount: 900},
                    {id: "id12336", name: "Cocktails on the Ceiling", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "4/15/15", listCount: 3, guestCount: 900},
                    {id: "id45637", name: "A Night of Cards", group:{id: "id123", name: "USERGROUP 1"}, owner: "Joel", date: "4/9/15", listCount: 5, guestCount: 900},
                    {id: "id78945", name: "Spring Forward Celebration", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "8/3/15", listCount: 3, guestCount: 900},
                    {id: "id12346", name: "Fall Back Celebration", group:{id: "id123", name: "USERGROUP 1"}, owner: "Cory", date: "5/5/15", listCount: 2, guestCount: 900},
                    {id: "id45647", name: "Remembering the '90s", group:{id: "id123", name: "USERGROUP 1"}, owner: "Carol", date: "8/9/15", listCount: 1, guestCount: 900},
                    {id: "id78948", name: "Cory's Secret Elite Party", group:{id: "id123", name: "USERGROUP 1"}, owner: "Mike B", date: "4/4/15", listCount: 2, guestCount: 900},
                  ];


    return r;
  });
