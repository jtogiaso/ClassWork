const readline = require('readline');

let userInput= "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', function (answer) {
  
  // TODO: Log the answer in a database
  
  console.log("Thank you for your valuable feedback: " + answer);

  rl.close();

});