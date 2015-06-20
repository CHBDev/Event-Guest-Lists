module.exports = function(wrapper){

  var me = {};
  var query = wrapper.query;

   me.create = function(data, cb){
    query("INSERT INTO users (username, email) VALUES(?,?)",[data.username, data.email], function(err, rows){

      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

   me.modify = function(data, cb){
    // query("INSERT INTO users (username, email) VALUES(?,?)",[data.username, data.email], function(err, rows){

    //   var response = rows; //TODO will do stuff
    //   cb(err, response);

    // });
  };

   me.delete = function(data, cb){
    // query("INSERT INTO users (username, email) VALUES(?,?)",[data.username, data.email], function(err, rows){

    //   var response = rows; //TODO will do stuff
    //   cb(err, response);

    // });
  };

  return me;

};
