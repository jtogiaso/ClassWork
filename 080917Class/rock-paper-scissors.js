

console.log("Welcome! Let's have ourselves a game of Rock, Paper, Scissors!!!");

var consoleChoice = ["rock" , "paper" , "scissors", "go!"];

var i = 0;
while (i==0) {
	var userChoice = prompt("What do you choose?");
	console.log("User has chosen: " + userChoice);
	var randomConsoleChoice = getRandomInt(0,2);
	if (userChoice.toLowerCase() === consoleChoice[randomConsoleChoice]) {
		console.log("You and the console chose " + consoleChoice[randomConsoleChoice] + ". It's a tie, so you must start over!");
	}
	else if ((userChoice.toLowerCase() === consoleChoice[0] && consoleChoice[randomConsoleChoice] === consoleChoice[1]) || (userChoice.toLowerCase() === consoleChoice[1] && consoleChoice[randomConsoleChoice] === consoleChoice[2]) || (userChoice.toLowerCase() === consoleChoice[2] && consoleChoice[randomConsoleChoice] === consoleChoice[0])) {
		console.log("You LOSE! You chose: " + userChoice + " and the console chose: " + consoleChoice[randomConsoleChoice] + ".");
		console.log(consoleChoice[randomConsoleChoice] + " beats " + userChoice + "!");
		i=1;
	}
	else if (consoleChoice.indexOf(userChoice.toLowerCase()) == -1) {
		console.log("You have to choose one of the options from the title, letter for letter! Please start over.");
	}
	else if (userChoice.toLowerCase()=== "go!") {
		console.log("Ha...ha...ha. Have an upvote. You win!");
		i=1;
	}
	else {
		console.log("You WIN! You chose: " + userChoice + " and the console chose: " + consoleChoice[randomConsoleChoice] + ".");
		console.log(userChoice + " beats " + consoleChoice[randomConsoleChoice] + "!");
		i=1;
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}