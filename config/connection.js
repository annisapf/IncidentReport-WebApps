// Set up MySQL connection.
var mysql = require("mysql");

// AWS Connection
var connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME || "locahost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "my_database_name",
});


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
