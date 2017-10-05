let fs = require("fs");
              
fs.readFile("best_things_ever.txt", "UTF-8", function(err, data){
  if (err) {
    return;// console.log(err);
  }
  let dataArray = data.split(",");
  for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i].trim())
  }
});