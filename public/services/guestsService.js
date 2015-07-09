services

 .factory('guests', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentSelection = {};
    r.secondary.currentSelection = {};

    r.primary = {currentToolbarButton: "messages"};
    r.secondary = {currentToolbarButton: "messages"};

    r.cache = {};

    r.cache.headers = [["Last","name-last",3],["First", "name-first",2], ["Email","email",4],["City","address-city",2]];


    r.cache.guestsArray = [
                      {id: '1', "name-last": "WILLIAMS", "name-first": "SERENA" , email: "guest1@guest.com", "address-number": "123", "address-street": "main st.", "address-city": "San Francisco", "address-state": "CA", "address-zip": "94043", dateAdded: "10/10/10", inLists: "8"},
                      {id: '2', "name-last": "MONGOOSE", "name-first": "WILD" ,email: "guest1@guest.com", "address-number": "123", "address-street": "main st.", "address-city": "San Francisco", "address-state": "CA", "address-zip": "94043", dateAdded: "10/10/10", inLists: "8"},
                      {id: '3', "name-last": "COMPANY", "name-first": "SOME" ,email: "guest1@guest.com", "address-number": "123", "address-street": "main st.", "address-city": "San Francisco", "address-state": "CA", "address-zip": "94043", dateAdded: "10/10/10", inLists: "8"}
                    ];

    return r;
  });


