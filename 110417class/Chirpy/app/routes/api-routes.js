// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all" , function(req , res){
  	let dbQuery = "SELECT * FROM `chirps`";
  	connection.query(dbQuery, function(err , result){
  		return result;
  	})
  });


  // Add a chirp
  app.post("/post_chirp" , function(req , res){
  	console.log("You just tried to post something!")
  	// let dbQuery = "INSERT INTO `chirps` (`author` , `chirp`) VALUES (" + author + " ," + chirp + ")";
  	// connection.query(dbQuery, function(err , result){
  	// 	res.redirect("/");
  	// })
  })

};
