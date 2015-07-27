var ex = {};

var config;

if(process.env.NODE_ENV === 'production'){
  var env = process.env;
  config = {
    host: env._H_BD,
    port: env._P_BD,
    user: env._U_BD,
    pw: env._WP_BD
  };
}else{
  console.log("NODE_ENV is dev");
  try {
    config = require('./database_config.js' );
  } catch (e) {
    console.log("NO DB CONFIG",e);
  }

  if(!config){
    console.log("MISSING CONFIG");
  }

  config = {
    host: config.host || 'localhost',
    port: config.port || null,
    user: config.user || 'root',
    password: config.pw || null
  };
}

console.log("CONFIG", config);


var mysql = require('mysql');

var db;

var connectionLoop = function(){
  ex.db = db = mysql.createConnection(config);
  db.connect(function(err){
    if(err){
      console.log("==============ERROR connecting mysql ", err.stack);
      console.log(err);
      setTimeout(connectionLoop, 1000);
    }else{
      var del = db._protocol._delegateError;
      //it's possible this could prevent callbacks to routes if I don't understand this
      db._protocol._delegateError = function(err, sequence){
        if(err.fatal) {
          console.trace('fatal error: ' + err.message);
          setTimeout(connectionLoop, 500);
        }
        return del.call(this, err, sequence);
      };

      ex.currDB =  process.env.NODE_ENV || 'dev';
      console.log("==============CONNECTED as ID ", db.threadId);
      ex.isLive = true;

      db.query("USE " + ex.currDB, function(err){
        if(err){
          console.log(err);
        }
        ex.startStayAlive();

        ex.setupAllDefaultTables(function(err, rows){
          if(err){
            console.log(err);
          }
        });

      });

      db.on('close', function(err) {
        if(err) {
          console.log("DATABASE CONN CLOSED ERR:", err);
          connectionLoop();
        } else {
          console.log('MANUAL DB CONNECTION CLOSED');
        }
      });

      db.on('error', function(err) {
         console.log("MYSQL ERROR CONNECTION", err);
         if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log("CONNECTION LOST");
           connectionLoop();
         } else {
            console.log(err);
            connectionLoop();
           //throw err;
         }
       });
    }
  });
};

if(!ex.isLive){
  connectionLoop();
}


ex.startStayAlive = function(){
  if(ex.stayAliveId){
    clearTimeout(ex.stayAliveId);
  }

  ex.stayAliveId = setTimeout(function(){
    db.query("SELECT 1", function(err){
      if(err){
        console.log(err);
        connectionLoop();
      }else{
        console.log("tick");
        ex.startStayAlive();
      }
    });
  }, 5000);

};

ex.tellMeWhenDatabaseIsLive = function(callback){
  console.log("==========ASKED FOR CALLBACK==============");
  if(db.isLive){
    callback();
  }else{
    db.notifiersForLive = db.notifiersForLive || [];
    db.notifiersForLive.push(callback);
  }
};

ex.setupAllDefaultTables = function(cb){
  db.query("CREATE TABLE IF NOT EXISTS ?? (?? INTEGER PRIMARY KEY AUTO_INCREMENT, ?? VARCHAR(40) UNIQUE KEY, ?? VARCHAR(40) UNIQUE KEY)", ['users', 'id', 'username', 'email'], cb);
  db.query("CREATE TABLE IF NOT EXISTS `groups` (`id` INTEGER PRIMARY KEY AUTO_INCREMENT, `groupname` VARCHAR(60) UNIQUE KEY, `owner` INTEGER, FOREIGN KEY (`owner`) REFERENCES `users`(`id`) )", cb);
};

module.exports = ex;
