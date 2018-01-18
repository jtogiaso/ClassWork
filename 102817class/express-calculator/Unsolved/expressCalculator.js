// Dependencies
const express = require("express");
const path = require("path");

// Create express app instance.
const app = express();
const PORT = 3002;

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:first_number/:second_number", function(req, res) {
  console.log(req);
  console.log(res);

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  let operation = req.params.operation;
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  let first_number = parseInt(req.params.first_number);
  let second_number = parseInt(req.params.second_number);

  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result = first_number + second_number;
      break;
    case "subtract":
      // Subtract logic
      result = first_number - second_number;
      break;
    case "multiply":
      // Multiply
      result = first_number * second_number;
      break;
    case "divide":
      // Divide
      result = first_number / second_number;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(PORT);
