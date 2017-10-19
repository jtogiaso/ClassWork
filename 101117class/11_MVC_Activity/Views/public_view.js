let inquirer = require("inquirer");
let controller = require("../Controllers/controller.js")


let get_user_name = function(){
  inquirer.prompt([
      {
        type: "input",
        message: "Pleaser provide your user name: ",
        name: "user_name"
      }
  ])
  .then(function(inquirer_response) {
    controller.type_of_user(inquirer_response.user_type);
  })
};