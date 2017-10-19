let inquirer = require("inquirer");


function Character(name, age, gender) {
	this.name = name,
	this.class = "",
	this.age = age,
	this.gender = gender,
	this.strength = 0,
	this.hitPoints = 0,
	this.printStats = function(){
		for (let i in this) {
			if (typeof this[i] !== 'function'){
				console.log(i , this[i]);
			}
		}
	},
	this.attack = function(char2){
		char2.attacked(this.strength);
	},
	this.isAlive = function(){
		if (this.hitPoints <= 0){
			console.log(this.name + " is dead!")
		}
	}
}

let myChar = new Character ("",0,"");
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
    // Here we ask the user to confirm.
    {
      type: "list",
      message: "Check your gender:",
      name: "gender",
      choices: ["Male" , "Female"],
    }
  ])
  .then(function(inquirerResponse) {
  	myChar.name = inquirerResponse.name;
  	myChar.age = inquirerResponse.age;
  	myChar.gender = inquirerResponse.gender;
  	myChar.class = inquirerResponse.characterType;
  	myChar.gender = inquirerResponse.gender;
  	switch (inquirerResponse.characterType) {
  		case "Knight":
			myChar.strength = 50;
			myChar.hitPoints = 500;
  			break;

  		case "Mage":
			myChar.strength = 20;
			myChar.hitPoints = 850;  		
  			break;

  		case "Deadpool":
			myChar.strength = 40;
			myChar.hitPoints = 750;  			
  			break;

  		case "Hulk":
			myChar.strength = 125;
			myChar.hitPoints = 500;
  			
  			break;

  		case "Archer":
			myChar.strength = 65;
			myChar.hitPoints = 400;

  			break;
  	}
	myChar.printStats();
  })
 ;