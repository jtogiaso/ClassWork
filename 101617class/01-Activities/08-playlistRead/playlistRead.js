var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "UCSD0724",
  database: "playlistDB"
});

connection.connect(function(err) {
  // if (err) throw err;
  
  // queryAllSongs();
  // queryDanceSongs();
  promisePractice(err)
    .then(function(results){
      console.log("Connected!");
      console.log("connected as id " + connection.threadId);
    })
    .catch(function(error){
      console.log("Failed!")
    });
});


function promisePractice (err) {
  queryAllSongs();
  queryDanceSongs();

  return new Promise( function(resolve, reject){
    if (!err){
      console.log("I think I am in here!");
      resolve(connection.end());
    }
    else {
      console.log("Or over here!");
      reject(connection.end());
    }
  });
};



function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) console.log(err);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}



// connection.end();