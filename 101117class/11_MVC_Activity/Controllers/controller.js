


let type_of_user = function(user_type){
	if (user_type === "User"){
		console.log("You are a " + user_type + " regular!");	
	}
	else if( user_type === "Admin"){
		console.log("You are a " + user_type + " regular!");
	}
};






module.exports = {type_of_user: type_of_user};
