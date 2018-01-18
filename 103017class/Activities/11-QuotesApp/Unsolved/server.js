var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql2");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.user(exp.static("public"));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "UCSD0724",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.

app.get("", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { plans: data });
  });
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
