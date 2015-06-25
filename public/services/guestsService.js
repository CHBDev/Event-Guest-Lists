services

 .factory('guests', function(){
    var r = {};

    r.currentGuest = null;

    r.primary = {};
    r.secondary = {};

    r.primary.currentGuest = null;
    r.secondary.currentGuest = null;

    r.guestsArray = [
                      {name: "GUEST1", email: "guest1@guest.com", address: {number: "123", street: "main st.", city: "San Francisco", state: "CA", zip: "94043"}, dateAdded: "10/10/10", inLists: "8"},
                      {name: "GUEST2", email: "guest2@guest.com", address: {number: "123", street: "main st.", city: "San Francisco", state: "CA", zip: "94043"}, dateAdded: "10/10/10", inLists: "8"},
                      {name: "GUEST3", email: "guest2@guest.com", address: {number: "123", street: "main st.", city: "San Francisco", state: "CA", zip: "94043"}, dateAdded: "10/10/10", inLists: "8"}
                    ];

    return r;
  });
