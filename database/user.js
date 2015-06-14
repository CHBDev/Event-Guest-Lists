

module.exports = function(wrapper){

  var me = {};
  var query = wrapper.query;

  me.login = function(data, cb){
    query("SELECT 1", function(err, rows){

      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

   me.create = function(data, cb){
    query("INSERT INTO users (username, email) VALUES(?,?)",[data.username, data.email], function(err, rows){

      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

  return me;

};
