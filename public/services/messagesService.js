services

 .factory('messages', function(){
    var r = {};

    r.primary = {};
    r.secondary = {};

    r.primary.currentMessage = null;
    r.secondary.currentMessage = null;

    r.messagesArray = [
                    {name: "Joe", title: "do this", message: "hi there", time:9889689594},
                    {name: "Dave", title: "do this also", message: "hi there", time:9889689594}
                  ];

    return r;
  });
