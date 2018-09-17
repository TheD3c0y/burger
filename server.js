var express = require("express");
var body = require("body-parser");
var PORT =  8080;
var app = express();
app.use(express.static("public"))
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./config/connection") ;

app.listen(PORT, function() {
    console.log("Server is on,", PORT);
})
