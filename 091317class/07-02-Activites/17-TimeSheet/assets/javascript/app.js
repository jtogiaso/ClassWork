  var config = {
    apiKey: "AIzaSyBcM5iZuUOONtICRxukqKHqAoqFtl-jAh8",
    authDomain: "bayareasports-fb5e3.firebaseapp.com",
    databaseURL: "https://bayareasports-fb5e3.firebaseio.com",
    projectId: "bayareasports-fb5e3",
    storageBucket: "bayareasports-fb5e3.appspot.com",
    messagingSenderId: "481708343153"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthlyRate = 0;


  var newQuery = database.ref().orderByKey().on("value", 
    function(snapshot){
    	snapshot.forEach(function(childSnapshot){
			name = childSnapshot.val().name;
			role = childSnapshot.val().role;
			startDate = childSnapshot.val().startDate;
			monthlyRate = childSnapshot.val().monthlyRate;
			$("<tr>")
				.append(
					$("<th>")
						.html(name)
				)
				.append(
					$("<td>")
						.html(role)
				)
				.append(
					$("<td>")
						.html(startDate)
				)
				.append(
					$("<td>")
						.html("# of months Worked")
				)
				.append(
					$("<td>")
						.html(monthlyRate)
				)
				.append(
					$("<td>")
						.html("Total that has been paid to the employee")
				)
				.appendTo("tbody")
			;
		})
	}, 
	function(errorObject) {
		console.log("The read failed: " + errorObject.code);
	}
  );  

$(document).ready(function(){
	// Capture Button Click
	$("#addEmployee").on("click", function() {
		event.preventDefault();

		database.ref().push({
			name: $("#employeeName").val().trim(),
			role: $("#role").val().trim(),
			startDate: $("#startDate").val().trim(),
			monthlyRate: $("#monthlyRate").val().trim(),
			// dateAdded: 
		});

	});
});