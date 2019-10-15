var connection = require("./connection.js"); //import connection from connection.js
//import object with methods in them for our data
var orm = { 
    all: function(tableInput, cb){
        connection.query("SELECT * FROM "+tableInput+";", function(err,
            result){
                if(err)throw err;
                cb(result);
            })
    },
    update: function(tableInput, condition, cd){
        connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id="+condition+";", function(err,result){
            if(err)throw err;
            cb(result);
        })
    },  
    create: function(tableInput,val,cb){
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result){
        if(err)throw err;
        cb(result);
    })
}
}
module.exports = orm;