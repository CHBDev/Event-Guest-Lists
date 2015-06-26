services

 .factory('users', function(){
    var r = {};

    //TODO *** unhack
    r.currentUser = {};
    r.currentUser.name = "FAKE.USERNAME@FAKE.COM";
    r.currentUser.id = "123";

    r.primary = {currentToolbarButton: ""};
    r.secondary = {currentToolbarButton: ""};

    r.usersArray = [
                     {name: "USER1", email: "user1@user.com", date: "10/10/10", inGroups: "9"},
                     {name: "USER2", email: "user2@user.com", date: "11/11/11", inGroups: "8"},
                     {name: "USER3", email: "user3@user.com", date: "12/12/12", inGroups: "7"},
                   ];

    return r;
  });
