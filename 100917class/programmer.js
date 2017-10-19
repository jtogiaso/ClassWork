let inquirer = require("inquirer");

let Programmer = function() {
	this.name = "";
	this.position = "";
	this.age = 0;
	this.favorite_programming_language = "";
};

let userPrompt = function(){
	inquirer
	  .prompt([
	    {
	      type: "input",
	      message: "What is your name?",
	      name: "userName"
	    },
	    {
	      type: "input",
	      message: "What is your position?",
	      name: "position"
	    },
	    {
	      type: "input",
	      message: "How old are you?",
	      name: "age"
	    },
	    {
	      type: "input",
	      message: "What is your favorite programming language?",
	      name: "favorite_programming_language"
	    },

	   ])
	  .then(function(inquirerResponse) {
	  	let newProg = new Programmer();
	  	newProg.name = inquirerResponse.userName;
	  	newProg.position = inquirerResponse.position;
	  	newProg.age = parseInt(inquirerResponse.age);
	  	newProg.favorite_programming_language= inquirerResponse.favorite_programming_language;
	  	newProg.print_info();
	  })
	;
};


Programmer.prototype.print_info = function(){
	for (let i in this){
		if ( typeof this[i] !== "function"){
			console.log(i + ": " + this[i]);
		}
	}
}
userPrompt();
