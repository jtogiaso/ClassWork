// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...

let request = require("request");
// Grab or assemble the movie name and store it in a variable called "movieName"
let movieName = argumentCondenser(process.argv, 2);

// ...


// Then run a request to the OMDB API with the movie specified
let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);


// Then create a request to the queryUrl
// ...
request(queryUrl, function(error, repsonse, body){
	if(error){
		console.log("Request failed!")
		return;
	}
	console.log(movieName + " was released in " + JSON.parse(body).Released);
});

  // If the request is successful
  // ...

  // Then log the Release Year for the movie


  // ...

  function argumentCondenser (array, start){
  	let movieNameString = "";
  	for (let i = start; i < array.length; i++){
  		movieNameString += " " + array[i];
  	}
  	return movieNameString.trim();
  }
