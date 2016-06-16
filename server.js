// REQUIREMENTS
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));

//CONTROLLERS
var rootController = require("./controllers/root.js");
app.use("/root", rootController)

// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');