services

 .factory('messages', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentMessage = null;
    r.secondary.currentMessage = null;

    r.cache = {};

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
