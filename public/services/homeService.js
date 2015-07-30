services

 .factory('home', function(){
     var r = {};

    r.primary = {currentToolbarButton: "start"};
    r.secondary = {currentToolbarButton: "start"};

    r.primary.currentSelection = {id:"Invite Again", name: "Invite Again"};
    r.secondary.currentSelection = {};


    r.cache = {};

    r.cache.headers = [["Title","title",2],["From", "name",2], ["Date","time",1],["Action Button","",1]];


    r.cache.usersMessages = [
                        {id: "123", name: "Joe", title: "do this1", message: "hi there", time:9889689593, sentTo:{users:["123","456","789"]}},
                        {id: "456", name: "Shmoe", title: "do this2", message: "hi there", time:9889689594, sentTo:{users:["123","456","789"]}},
                        {id: "789", name: "Grow", title: "do this3", message: "hi there", time:9889689595, sentTo:{users:["123","456","789"]}}
                        ];
    r.cache.eventsMessages = [
                        {id: "aaa", name: "Joe", title: "Ado this1", message: "hi there", time:9889689593, sentTo:{events:["123","456","789"]}},
                        {id: "bbb", name: "Shmoe", title: "Ado this2", message: "hi there", time:9889689594, sentTo:{events:["123","456","789"]}},
                        {id: "ccc", name: "Grow", title: "Ado this3", message: "hi there", time:9889689595, sentTo:{events:["123","456","789"]}}
                        ];
    r.cache.listsMessages = [
                        {id: "ddd", name: "Joe", title: "Bdo this1", message: "hi there", time:9889689593, sentTo:{lists:["123","456","789"]}},
                        {id: "eee", name: "Shmoe", title: "Bdo this2", message: "hi there", time:9889689594, sentTo:{lists:["123","456","789"]}},
                        {id: "fff", name: "Grow", title: "Bdo this3", message: "hi there", time:9889689595, sentTo:{lists:["123","456","789"]}}
                        ];
    r.cache.groupsMessages = [
                        {id: "hhh", name: "Joe", title: "Cdo this1", message: "hi there", time:9889689593, sentTo:{groups:["123","456","789"]}},
                        {id: "iii", name: "Shmoe", title: "Cdo this2", message: "hi there", time:9889689594, sentTo:{groups:["123","456","789"]}},
                        {id: "jjj", name: "Grow", title: "Cdo this3", message: "hi there", time:9889689595, sentTo:{groups:["123","456","789"]}}
                        ];

    return r;
  });
