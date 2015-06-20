var wrapper = require("./wrapper_loader.js");
var me = {};

me.user = {};
me.group = {};
me.event = {};
me.list = {};
me.guest = {};
me.wrapper = wrapper;
me.query = function(str, arrOrCb, cb){
  if(Array.isArray(arrOrCb) === false){
    me.wrapper.db.query(str, arrOrCb);
  }else{
    me.wrapper.db.query(str, arrOrCb, cb);
  }
};

var dbUser = require("../database/user.js")(me);
var dbGroup = require("../database/group.js")(me);
var dbEvent = require("../database/event.js")(me);
var dbList = require("../database/list.js")(me);
var dbGuest = require("../database/guest.js")(me);

me.user.create = function(data, cb){
  dbUser.create(data, cb);
};
me.user.modify = function(data,cb){
  dbUser.modify(data, cb);
};
me.user.remove = function(data,cb){
  dbUser.remove(data, cb);
};

me.user.login = function(data,cb){
  dbUser.login(data, cb);
};

me.group.create = function(data,cb){
  dbGroup.create(data, cb);
};
me.group.modify = function(data,cb){
  dbGroup.modify(data, cb);
};
me.group.remove = function(data,cb){
  dbGroup.remove(data, cb);
};

me.event.create = function(data,cb){
  dbEvent.create(data, cb);
};
me.event.modify = function(data,cb){
  dbEvent.modify(data, cb);
};
me.event.remove = function(data,cb){
  dbEvent.remove(data, cb);
};

me.list.create = function(data,cb){
  dbList.create(data, cb);
};
me.list.modify = function(data,cb){
  dbList.modify(data, cb);
};
me.list.remove = function(data,cb){
  dbList.remove(data, cb);
};

me.guest.create = function(data,cb){
  dbGuest.create(data, cb);
};
me.guest.modify = function(data,cb){
  dbGuest.modify(data, cb);
};
me.guest.remove = function(data,cb){
  dbGuest.remove(data, cb);
};


module.exports = me;

