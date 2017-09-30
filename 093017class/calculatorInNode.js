  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['mathematic_function', 'first_input', 'second_input'], function (err, result) {
    // 
    // Log the results. 
    // 

    if (result.mathematic_function === 'add') {
      console.log("You want to add " + result.first_input + " and " + result.second_input + " !");
      mathFunc.add(parseInt(result.first_input), parseInt(result.second_input));
    }
    else if(result.mathematic_function === 'subtract'){
      console.log("You want to subtract " + result.first_input + " from " + result.second_input + " !");
      mathFunc.subtract(parseInt(result.first_input), parseInt(result.second_input));
    }
    else if (result.mathematic_function === 'multiply') {
      console.log("You want to multiply " + result.first_input + " and " + result.second_input + " !");
      mathFunc.multiply(parseInt(result.first_input),  parseInt(result.second_input));
    }
    else if (result.mathematic_function === 'divide') {
      console.log("You want to divide " + result.first_input + " by " + result.second_input + " !");
      mathFunc.divide(parseInt(result.first_input),  parseInt(result.second_input));
    }
    else if (result.mathematic_function === 'exponent'){
      mathFunc.exponent(parseInt(result.first_input),  parseInt(result.second_input));
    }
    else if (result.mathematic_function === 'algebra') {
      mathFunc.algebra(parseInt(result.first_input),  parseInt(result.second_input));
    }
    else {
      console.log("Please check your arguments!");
    }
});  



var mathFunc = {
  add: function(x, y){
    var z = x + y;
    console.log(z)
    return z;
  },
  subtract: function(x , y){   
    var z = x - y;
    console.log(z)
    return z;
  },
  multiply: function(x, y){
    var z = x * y;
    console.log(z)
    return z;
  },
  divide: function(x , y){
    var z = x / y;
    console.log(z)
    return z;
  },
  exponent: function(x , y){
    var z = 1;
    for (var i = 0; i < y, i++){
      z = z * x;
    }
    console.log(z)
    return z;
  },
  algebra: function(x , y){
      // Getting the index of x in the equation
  var xIndex = equation.indexOf("x");
  // Finding the index of the sign
  var signIndex = xIndex + 1;
  // Getting the index of the equals sign
  var equalIndex = equation.indexOf("=");
  // Getting the numerical value for the first number to appear in the equation
  var firstNum = parseInt(equation.substring(0, xIndex));
  // Getting the sign out of our equation
  var sign = equation[signIndex];
  // Getting the numerical value of the second number in the equation by grabbing the
  // piece of the equation between the operator and equals sign
  var secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));
  // Getting the third number by grabbing the piece of the equation between the equals
  // sign and the end of the equation
  var thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));
  // Defining a result variable we'll use to hold our solution
  var result;

  // Performing the appropriate operation based on the sign
  if (sign === "+") {
    result = (thirdNum - secondNum) / firstNum;
  }
  else if (sign === "-") {
    result = (thirdNum + secondNum) / firstNum;
  }
  else if (sign === "*") {
    result = (thirdNum / secondNum) / firstNum;
  }
  else if (sign === "/") {
    result = (thirdNum * secondNum) / firstNum;
  }
  return result;
    console.log(z)
    return z;
  }

}
