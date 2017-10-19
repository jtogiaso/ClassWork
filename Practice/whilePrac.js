let inquirer = require("inquirer");

let Tamagotchi = function() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if (this.hungry === true){
			console.log("That was yummy!\n");
			this.hungry = false;
			this.sleepy = true;
		}
		else {
			console.log("No thanks! I'm full.\n")
		}
	};
	this.sleep = function(){
		if (this.sleepy === true){
			console.log("Zzzzzzzz!\n\n");			
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


let intialQuestion = function(){
	inquirer
	  .prompt([
	    {
	      type: "list",
	      message: "With which animal do you want to play?",
	      choices: ["Exit" , "Cat", "Dog", "Create new Animal!"],
	      name: "chosenAnimal"
	    }
	   ])
	  .then(function(inquirerResponse) {
	  	if(inquirerResponse.chosenAnimal === "Dog"){
	  		playWithDog();
	  	}
	  	else if (inquirerResponse.chosenAnimal === "Cat"){
	  		playWithCat();
	  	}
	  	else if (inquirerResponse.chosenAnimal === "Create new Animal!"){
	  		createNewAnimal();
	  	}
	  })
	;
};

let playWithDog = function(){
	inquirer
	  .prompt([
	    {
	      type: "list",
	      message: "What would you like to do with your dog?",
	      choices: ["Play" , "Take outside", "Take a nap", "Feed", "Take Inside", "Go back"],
	      name: "dogAction"
	    }
	   ])
	  .then(function(inquirerResponse) {
	  	switch (inquirerResponse.dogAction){
	  		case "Play":
	  			dog.play();
	  			playWithDog();
	  			break;
	  		case "Take outside":
	  			dog.goOutside();
	  			playWithDog();
	  			break;
	  		case "Take a nap":
	  			dog.sleep();
	  			playWithDog();
	  			break;
	  		case "Feed":
	  			dog.feed();
	  			playWithDog();
	  			break;
	  		case "Take Inside":
	  			dog.goInside();
	  			playWithDog();
	  			break;
	  		case "Go back":
	  			intialQuestion();
	  			break;
	  		}
	  })
	;
};

// let intialQuestion = function(){
// 	inquirer
// 	  .prompt([
// 	    {
// 	      type: "input",
// 	      message: "What is your new character's name?",
// 	      name: "name"
// 	    }
// 	   ]),
// 	  .then(function(inquirerResponse) {
// 	  })
// 	;
// };

// let intialQuestion = function(){
// 	inquirer
// 	  .prompt([
// 	    {
// 	      type: "input",
// 	      message: "What is your new character's name?",
// 	      name: "name"
// 	    }
// 	   ]),
// 	  .then(function(inquirerResponse) {
// 	  })
// 	;
// };

intialQuestion();