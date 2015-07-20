var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('layout');
// });


router.get('/page/:view', function(req, res){
  res.render(req.params.view);
})

module.exports = router;
