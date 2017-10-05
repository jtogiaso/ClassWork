var fs = require("fs");
var movieName = arrayToString(process.argv, 2);                
console.log("One");
fs.writeFile("movies.txt", movieName, function(err) {
  console.log("Two");
  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return;// console.log(err);
  }
});
console.log("Three");


function arrayToString(arr, start) {
  var str = '';
  for (i=start; i<arr.length; i++) {
    str += ' '+arr[i];
  }
  return str.trimLeft();
}