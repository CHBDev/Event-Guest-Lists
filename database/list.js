

module.exports = function(wrapper){

 var me = {};
  var query = wrapper.query;

  me.delete = function(data, cb){
    query("SELECT 1", function(err, rows){

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

    me.modify = function(data, cb){
    query("SELECT 1", function(err, rows){

      var response = rows; //TODO will do stuff
      cb(err, response);

    });
  };

};
