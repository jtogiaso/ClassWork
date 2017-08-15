var consoleChoice = ["rock" , "paper" , "scissors"];
var letterEquivalent = [82 , 80 , 83];


var userText = document.getElementById("userContent");
var x = 1;
document.onkeyup = function (event) {
	console.log(event);
	if (event.keyCode == 13) {
		while (x) {
			userContent.textContent = "Choose one of the following: \"r\" for rock, \"p\" for paper, \"s\" for scissors ";
			document.onkeyup = function (event) {
				var userOption = event.keyCode;
				rpsLogic(userOption);
			}
			userContent += "Would you like to continue? Press 1 for yes.";
			document.onkeyup = function (event) {
				
			}


		}
	}
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rpsLogic (userChoice) {
	var i = 0;
	while (i==0) {
		console.log("User has chosen: " + userChoice);
		var randomConsoleChoice = getRandomInt(0,2);
		if (userChoice === letterEquivalent[randomConsoleChoice]) {
			userContent.textContent = "You and the console chose " + consoleChoice[randomConsoleChoice] + ". It's a tie, so you must start over!";
		}
		else if ((userChoice === letterEquivalent[0] && letterEquivalent[randomConsoleChoice] === letterEquivalent[1]) || (userChoice === letterEquivalent[1] && letterEquivalent[randomConsoleChoice] === letterEquivalent[2]) || (userChoice === letterEquivalent[2] && letterEquivalent[randomConsoleChoice] === letterEquivalent[0])) {
			userContent.textContent = "You LOSE! You chose: " + consoleChoice[letterEquivalent.indexOf(userChoice)] + " and the console chose: " + consoleChoice[randomConsoleChoice] + ".";
			userContent.textContent += " " + consoleChoice[randomConsoleChoice] + " beats " + consoleChoice[letterEquivalent.indexOf(userChoice)] + "!";
			i=1;
		}
		else if (consoleChoice.indexOf(userChoice.toLowerCase()) == -1) {
			userContent.textContent ="You have to choose one of the options from the title, letter for letter! Please start over.";
		}
		else if (userChoice.toLowerCase()=== "go!") {
			userContent.textContent = "Ha...ha...ha. Have an upvote. You win!";
			i=1;
		}
		else {
			userContent.textContent = "You WIN! You chose: " + userChoice + " and the console chose: " + consoleChoice[randomConsoleChoice] + ".";
			userContent.textContent = " " + consoleChoice[letterEquivalent.indexOf(userChoice)] + " beats " + consoleChoice[randomConsoleChoice] + "!";
			i=1;
		}
		// prompt("Would you like to play another game? Press y for yes and any other key to not.");
		// document.onkeyup = function (event) {
		// 	if (event.keyCode==89) {
		// 		return;
		// 	}
			
		// 	else {
		// 		i=1;
		// 		break;
		// 	}
		// }
	}
}