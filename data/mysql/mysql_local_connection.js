/**
 * Class for conection to mysql
 * 
 */

var mysql = require("mysql");

var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"agenda"
});

// exports
module.exports.mysql_connection=connection;
