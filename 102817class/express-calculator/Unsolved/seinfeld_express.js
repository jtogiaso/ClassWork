// Dependencies
const express = require("express");
const mysql = require("mysql2");

// Create express app instance.
const app = express();
const PORT = 6055;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'seinfeld_db',
  password: 'UCSD0724'
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:view/:att", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  let view = req.params.view;
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  let att;
  if (req.params.att > 0) {
    att = req.params.att;
  }

  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (view) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "cast":
      connection.execute(
        'SELECT * FROM `Actors` WHERE `name` = \'Jerry Seinfeld\'',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
       
          // If you execute same statement again, it will be picked form a LRU cache
          // which will save query preparation time and give better performance
        }
      );
      res.send('Sucess');
      break;
    case "coolness-chart":
      res.send(result.toString());
      break;
    case "attitude_chart":
      res.send(result.toString());
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

});

// Initiate the listener.
app.listen(PORT);
