var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('api-test');
  res.send({hello: 'hello'});
});

module.exports = router;
