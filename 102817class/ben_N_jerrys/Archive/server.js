// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Specify the port.
const port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
let icecreams = [
      {icecream: 'vanilla', price: 10, awesomeness: 3},
      {icecream: 'chocolate', price: 4, awesomeness: 8},
      {icecream: 'banana', price: 1, awesomeness: 1},
      {icecream: 'greentea', price: 5, awesomeness: 7},
      {icecream: 'jawbreakers', price: 6, awesomeness: 2},
    ];

// Routes



app.get("/icecreams/:flavor", function(req, res) {
  let flavor = req.params.flavor;
    let icecreams_index;
    let sent = false;
    for (let i in icecreams){
      if (icecreams[i].icecream === flavor){
        icecreams_index = i;
        sent = true;
        res.render("index", icecreams[icecreams_index]);
      }
    } 
    if (!sent){
      res.send("That path does not exist!");
    }
});
app.get("/icecreams", function(req, res) {

    let ice_cream_flavors = {
        ice_creams: icecreams
    };
    res.render("all-icecreams", ice_cream_flavors);

});


// Initiate the listener.
app.listen(port);
