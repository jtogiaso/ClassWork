

// Initialize Firebase (YOUR OWN APP)


	var config = {
      apiKey: "AIzaSyBcM5iZuUOONtICRxukqKHqAoqFtl-jAh8",
      authDomain: "bayareasports-fb5e3.firebaseapp.com",
      databaseURL: "https://bayareasports-fb5e3.firebaseio.com",
      projectId: "bayareasports-fb5e3",
      storageBucket: "bayareasports-fb5e3.appspot.com",
      messagingSenderId: "481708343153"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

	// Set Initial Counter
	var initialValue = 100;

	var clickCounter = initialValue;
    

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
	database.ref().on("value", function(snapshot){

	


// Print the initial data to the console.
		console.log(snapshot.val());

// Change the html to reflect the initial value.
		clickCounter = snapshot.val().clickCount;
	
// Change the clickCounter to match the data in the database
		console.log(clickCounter);

// Log the value of the clickCounter
		$("#click-value").html(clickCounter);

// Change the HTML Value
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);

// If any errors are experienced, log them to console.


});
// --------------------------------------------------------------
$(document).ready(function() {
	// Whenever a user clicks the click button
	$("#click-button").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter

	  if (clickCounter === 0) {
	    alert("Phew! You made it! That sure was a lot of clicking.");
	    clickCounter = initialValue;
	  }


	// Save new value to Firebase

  	database.ref().set({
    	clickCount: clickCounter
  	});




	// Log the value of clickCounter

  	console.log(clickCounter);

  	$("#click-value").html(clickCounter);

	});

	// Whenever a user clicks the restart button
	$("#restart-button").on("click", function() {

	// Set the clickCounter back to initialValue
		clickCounter = initialValue;

	// Save new value to Firebase

	  database.ref().set({
	    clickCount: clickCounter
	  });

	// Log the value of clickCounter


	  console.log(clickCounter);
	// Change the HTML Values

  $("#click-value").html(clickCounter);
	});

});
