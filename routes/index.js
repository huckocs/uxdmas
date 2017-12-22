var express = require('express');
var router = express.Router();

var jsonObj = [];
jsonObj = require("../uxd.json");

/* GET home page. */
router.get('/', function(req, res, next) {
 	console.log(jsonObj);
	res.render('index', {jsonObj : jsonObj});
});

module.exports = router;
