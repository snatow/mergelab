var express = require('express');
var router = express.Router();

router.get('/tims', function(req, res){
	console.log("tims");
	res.send("tims");
});




module.exports = router;