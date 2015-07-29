var jwt = require("jsonwebtoken");

var ex = {};
module.exports = ex;

var ES = process.env._ES_WJ;
ex.getNewToken = function(data){
  return jwt.sign(data, ES );
};

ex.verifyToken = function(token, cb){
  jwt.verity(token, ES, function(err, decoded){
    if(err){
      cb(err, null);
    }else{
      cb(null, decoded.payload);
    }
  });
};

ex.decodePayload = function(token){
  return jwt.decode(token).payload;
};




