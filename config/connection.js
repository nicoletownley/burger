//hold all my sequel connection data
var mysql = require("mysql");
var connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Edith191$1@",
    database: "burger_db"
})
connection.connect(function(err){
    if(err)throw err;
    console.log ("connected as id: "+ connection.threadId)
})

module.exports=connection;