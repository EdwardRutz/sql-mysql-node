const dotenv = require('dotenv').config();
const mysql = require('mysql');


// Create a connection.
// Connect using environmental variables
const dbConnect = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
})

console.log(process.env.DB_HOST);
console.log(process.env.DATABASE);

// Connect to MySQL.
dbConnect.connect((err) => {
	if (err) throw err;
	console.log("Connected To The Database!");

	// Add multiple values to a table via an array
	// Use sql variable for full sql statement.

	// const sql = "INSERT INTO customers (name, email) VALUES ?";
	
	// const values = [
	// 	['Meghan Mars', 'MeghanMars@earthlink.com'],
	// 	['Max Mars', 'MaxMars@earthlink.com'],
	// 	['Mo Mars', 'MoMars@earthlink.com'],
	// ]
	// dbConnect.query(sql, [values], (err, result) => {
	// 	if (err) throw err;

	// 	console.log("Data inserted: " + result.affectedRows);
	// });


		// Add a record to a table.
		// Use sql variable for full sql statement.

		var sql = "INSERT INTO customers (name, email) VALUES ('Mark Mars', 'mark@earthlink.com')";
		dbConnect.query(sql, (err, result) => {
			if (err) throw err;

			console.log("Data inserted: " + result.affectedRows);
	});
});


// FYI...
// Where does "result.affectedRows" come from?
// Status message of "result" anytime data is inserted.
// Show individually with "result.affectedRows"
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }