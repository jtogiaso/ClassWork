let inquirer = require("inquirer");
let controller = require("../Controllers/controller.js")


inquirer
  .prompt([
    {
      type: "list",
      message: "Choose you user type: ",
      choices: ["User" , "Admin"],
      name: "user_type"
    }
   ])
  .then(function(inquirer_response) {
    controller.type_of_user(inquirer_response.user_type);
  })
;