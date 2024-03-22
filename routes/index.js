var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let year = 2024
  let univercity = "Greenwich"

  res.render('index', {year,univercity})
});

module.exports = router;
