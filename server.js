var express = require("express");
var bodyParser= require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
extended: false
}))

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({
defaultLayout:"main"
}));
app.set("view engine", "handlebars");


var routes = require("./controllers/routes.js");
app.use('/',routes);

var port  = process.env.PORT || 3000;



// db.sequelize.sync().then(function(){

//     console.log("Connected to DB!!")

// })

app.listen(port, function(){
    console.log("App listen on port: "+port);
});
