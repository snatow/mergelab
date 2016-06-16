// REQUIREMENTS
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));

// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');