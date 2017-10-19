let inquirer = require("inquirer");
let list_of_players = [];


let doSomething = function(){
	console.log("Promise?")
};

let promise = doSomething();




let coin_flip = function(){
	return Math.floor(Math.random() * 2) + 1;
};

let Player = function(){
	this.name = "",
	this.postion = "",
	this.offensive_rating = 0;
	this.defensive_rating = 0;
	this.depth = "";
}

Player.prototype.good_game = function() {
	if (coin_flip() === 1){
		this.offensive_rating++;
	}
	else {
		this.defensive_rating++;
	}
};

Player.prototype.bad_game = function(){
	if (coin_flip() === 1){
		this.offensive_rating--;
	}
	else {
		this.defensive_rating--;
	}	
};

Player.prototype.print_stats = function() {
	for (let i in this)	{
		if (typeof this[i] !== "function") {
			console.log(i + ": " + this[i])
		}
	}
};

let main_menu = function(){
	console.log("Welcome to the game!");
	inquirer
	  .prompt([
	    {
	      type: "list",
	      message: "Choose something to do?",
	      choices: ["Play a game" , "Create new players" , "Nah, I'm good!" ],
	      name: "user_action"
	    }
	   ])
	  .then(function(response) {
	  	if (response.user_action === "Create new players"){
	  		promise.then(player_creator());
	  	}
	  })
	;

}

let player_creator = function(){

	console.log("You currently have " + list_of_players.length + " players.");
	inquirer
	  .prompt([
	    {
	      type: "input",
	      message: "What is your player's name?",
	      name: "player_name"
	    },
	    {
	      type: "list",
	      message: "What is your new player's position?",
	      choices: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"],
	      name: "position"
	    },
	    {
	      type: "input",
	      message: "What defensive rating would you like for this player?",
	      name: "defensive_rating"
	    },
	    {
	      type: "input",
	      message: "What offensive rating would you like for this player?",
	      name: "offensive_rating"
	    }
	   ])
	  .then(function(inquirerResponse) {
	  	let newPlayer = new Player();
	  	newPlayer.name = inquirerResponse.player_name;
	  	newPlayer.position = inquirerResponse.position;
	  	newPlayer.defensive_rating = inquirerResponse.defensive_rating;
	  	newPlayer.offensive_rating = inquirerResponse.offensive_rating;
	  	if (list_of_players.length < 8){
	  		newPlayer.depth = "Starter";
	  	}
	  	else {
	  		newPlayer.depth = "Reserve";
	  	}
	  	newPlayer.print_stats();
	  	list_of_players.push(newPlayer);

	  	promise.then(main_menu());

	  })
	;
};


main_menu();