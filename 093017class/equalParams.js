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
    if(parseInt(result.first_input) === parseInt(result.second_input)){
      console.log( result.first_input + " is equal to " + result.second_input);
    }
    else {
      console.log( result.first_input + " is not equal to " + result.second_input);
    }
});  
