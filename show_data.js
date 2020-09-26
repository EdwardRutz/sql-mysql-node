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

	// Add multiple records to a table.
	// Use sql variable for full sql statement.
  const sql = "SELECT * FROM customers";

	dbConnect.query(sql, (err, result) => {
		if (err) throw err;

    console.log(result);
	});
});