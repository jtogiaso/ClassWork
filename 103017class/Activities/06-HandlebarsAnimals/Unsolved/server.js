var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/all-animals", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.

  let animal_types = {
        animals: animals
    };
    res.render("all-animals", animal_types);
});

app.get("/all-animals/:animal", function(req, res) {
  let animal = req.params.animal;
  let animals_index;
  let sent = false;
  for (let i in animals){
    if (animals[i].animalType === animal){
      animals_index = i;
      sent = true;
      res.render("index", animals[animals_index]);
    }
  } 
  if (!sent){
    res.send("Sorry we do not have an animal like that here at this zoo!");
  }
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  let pets_obj = {
    animals: []
  };
  for (let i in animals){
    if (animals[i].pet === true){
      pets_obj.animals.push(animals[i]);
    }
  }
  res.render("pets-type", pets_obj);

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  let pets_obj = {
    animals: []
  };
  for (let i in animals){
    if (animals[i].pet === false){
      pets_obj.animals.push(animals[i]);
    }
  }
  res.render("pets-type", pets_obj);

});

app.listen(port);
