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


// Create a connection
// var dbConnect = mysql.createConnection({
//     host: "", 
//     user: "",
//     password: "!",
//     database: "",
// })
 

// Connect to MySQL
dbConnect.connect((err) => {
    if (err) throw err;
    console.log("Connected to database.");
    dbConnect.query("CREATE DATABASE nodeDB", (err, result) => {
        if (err) throw err;
        console.log("Databse created.");
    });
});
 