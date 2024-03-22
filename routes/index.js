var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let year = 2024
  let univercity = "Greenwich"

  res.render('index', {year,univercity})
});

router.get('/demo', (req,res)=>{
  res.render('demo',{hn: "hanoi",vn: "vietnam"});
})

router.get('/test', (req,res)=>{
  let a = 5
  let b = 3.14
  let c = 'm'
  let d = true
  let e = ["football","batminton","swimming"]

  res.render('test',{
    Integer: a,
    Double: b,
    String: c,
    Boolean: d,
    sport: e,
    cities: ["hanoi", "hochiminh", "danang", "can tho"]
  })
})
module.exports = router;
const port = process.env.PORT || 3001