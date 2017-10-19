let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "UCSD0724",
  database: "pop_quiz"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  show_table_values();
});

let show_table_values = function() {
	connection.query("SELECT * FROM favorite_drinks_table", function(err, res) {
		if (err){
			throw err;
		}

		console.log(res);
	});

	connection.end();
};