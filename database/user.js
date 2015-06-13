

module.exports = function(wrapper){

  var me = {};
  var query = wrapper.query;

  me.login = function(data, cb){
    console.log("inside user.login func");
    query("SELECT 1", function(err, rows){
      console.log("inside db query return");
      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

   me.create = function(data, cb){
    query("SELECT 1", function(err, rows){

      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

  return me;

};
