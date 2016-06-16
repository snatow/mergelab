var express = require('express');
var router = express.Router();


var clientID = 'Client-ID ' + process.env.IMGUR_CLIENT_ID

router.get('/', function(req, res){
  console.log("root");
  res.send("root");
});



module.exports = router;