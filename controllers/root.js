var express = require('express');
var router = express.Router();


router.get("/david", function(req, res) {
  console.log("david");
  res.send("david");
})



module.exports = router;