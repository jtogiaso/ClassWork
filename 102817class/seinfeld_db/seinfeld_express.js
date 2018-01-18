// Dependencies
const express = require("express");
const mysql = require("mysql2");

// Create express app instance.
const app = express();
const PORT = 4000;

console.log('Fuck off');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'seinfeld_db',
  password: 'UCSD0724'
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:view", function(req, res) {
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  let view = req.params.view;
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  // let att;
  // if (req.params.att > 0) {
  //   att = req.params.att;
  // }

  // Initialize the result variable to send later
  let result = "Almost there";
  // Switch statement chooses operation based on the operation parameter.

  connection.query(
    'SELECT * FROM `Actors` WHERE `id` = 1',
    function(err, results) {
      console.log(results);
    }
  );
  switch (view) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "cast":
      res.send('Sucess');
      break;
    case "coolness-chart":
      res.send('Sucess');
      break;
    case "attitude_chart":
      res.send('Sucess');
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
        res.send(result.toString());
  }

});

// Initiate the listener.
app.listen(PORT);
