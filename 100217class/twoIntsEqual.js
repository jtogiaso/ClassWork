  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['first_input', 'second_input'], function (err, result) {
    // 
    // Log the results. 
    // 
    var firstInt = parseInt(result.first_input);
    var secondInt = parseInt(result.second_input);
    if (Number.isInteger(firstInt)) { 
      console.log(firstInt === secondInt);
    }
    else {
      console.log("Your inputs are not integers!");
    }
});  
