// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, double burger sandwich, fries with a big glup"
  }, {
    lunch: "More pizza"
  }
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

var foods = {
    foods: lunches,
    eater: "brad"
  };

app.get("/lunches", function(req, res) {
  res.render("all-lunches", foods);
});

// Initiate the listener.
app.listen(port);
