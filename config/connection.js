var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "yoelchristian",
    password: "yoelyoel",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL database as id " + connection.threadId);

});

module.exports = connection;