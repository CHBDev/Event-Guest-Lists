var userSockets = require("./user_sockets.js");
var groupSockets = require("./group_sockets.js");
var eventSockets = require("./event_sockets.js");
var listSockets = require("./list_sockets.js");

module.exports = function(io, socket){

  userSockets(io, socket);
  groupSockets(io, socket);
  eventSockets(io, socket);
  listSockets(io, socket);

};




