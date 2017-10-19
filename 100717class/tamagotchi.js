let inquirer = require("inquirer");

let Tamagotchi = function() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if (this.hungry === true){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		}
		else {
			console.log("No thanks! I'm full.")
		}
	};
	this.sleep = function(){
		if (this.sleepy === true){
			console.log("Zzzzzzzz!");			
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		}
		else {
			console.log("No way! I'm not tired.")
		}
	};
	this.play = function(){
		if (this.bored === true){
			console.log("Yay! Let's play!");			
			this.bored = false;
			this.hungry = true;
		}
		else {
			console.log("Not right now. Later?")
		}
	};
	this.increaseAge = function(){
		this.age++;
		console.log("Happy Birthday to me! I am " + this.age + " [units] old!");
	};
};

let dog = new Tamagotchi();
dog.outside = false;
dog.bark = function(){
	console.log("Woof! Woof!");
};
dog.goOutside = function(){
	if (this.outside === false){
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	}
	else {
		console.log("We're already outside though...");
	}
};
dog.goInside = function(){
	if(this.outside === true) {
		console.log("Do we have to? FIne...");
		this.outside = false;
	}
	else {
		console.log("I'm already inside...")
	}
}

let cat = new Tamagotchi();
cat.houseCondition = 100;
cat.meow = function(){
	console.log("Meow! Meow!");
};
cat.destroyFurniture = function () {
	if (this.houseCondition < 1){
		this.houseCondition -= 10;
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
	}
};
cat.buyNewFurniture = function() {
	this.houseCondition += 50;
};



inquirer
  .prompt([
    {
      type: "input",
      message: "What is your new character's name?",
      name: "name"
    },
    {
      type: "list",
      message: "Choose your play-style: ",
      choices: ["Knight", "Mage", "Deadpool", "Hulk", "Archer"],
      name: "characterType"
    },
    {
      type: "input",
      message: "What is your age?",
      name: "age"
    },
    {
      type: "list",
      message: "Check your gender:",
      name: "gender",
      choices: ["Male" , "Female"],
    }
  ])
  .then(function(inquirerResponse) {
  })
;
dog.bark();
dog.goOutside();
dog.goOutside();
dog.play();
dog.goInside();
dog.goInside();
dog.play();
dog.feed();
dog.feed();
dog.sleep();
dog.play();

cat.meow();
cat.destroyFurniture();
cat.destroyFurniture();
cat.play();
cat.feed();
cat.feed();
cat.sleep();
cat.play();
