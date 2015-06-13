var wrapper = require("./wrapper_loader.js");
var q = {};
var db = wrapper.db;
var query = db.query;

var dbUser = require("../database/user.js");
var dbGroup = require("../database/group.js");
var dbEvent = require("../database/event.js");
var dbList = require("../database/list.js");

q.user = {};
q.group = {};
q.event = {};
q.list = {};

q.user.create = function(data){
  dbUser.create(data, function(resp){

  });
};
q.user.modify = function(data){
  dbUser.modify(data, function(resp){

  });
};
q.user.remove = function(data){
  dbUser.remove(data, function(resp){

  });
};

q.group.create = function(data){
  dbGroup.create(data, function(resp){

  });
};
q.group.modify = function(data){
  dbGroup.modify(data, function(resp){

  });
};
q.group.remove = function(data){
  dbGroup.remove(data, function(resp){

  });
};

q.event.create = function(data){
  dbEvent.create(data, function(resp){

  });
};
q.event.modify = function(data){
  dbEvent.modify(data, function(resp){

  });
};
q.event.remove = function(data){
  dbEvent.remove(data, function(resp){

  });
};

q.list.create = function(data){
  dbList.create(data, function(resp){

  });
};
q.list.modify = function(data){
  dbList.modify(data, function(resp){

  });
};
q.list.remove = function(data){
  dbList.remove(data, function(resp){

  });
};








module.exports = q;

