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


// Connect to MySQL.
dbConnect.connect((err) => {
	if (err) throw err;
	console.log("Connected To The Database!");
	
    // Create a table.
    // Use sql variable for full sql statement.
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
	dbConnect.query(sql, (err, result) => {
		if (err) throw err;
		console.log("Table was created...");
	});
});