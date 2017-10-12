var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('api-test');
  res.send(req.query);
});

router.get('/test', function(req, res, next){

  var user = new User({
    uid: req.query.id,
    username: req.query.name
  });

  user.save(function(err){
    if(err){
      res.end('Error');
      return next();
    }

    User.find({}, function(err, docs){
      if(err) {
        res.end('Error');
        return next();
      }
// 
      res.json(docs);
      // res.send(req.query);
    });
  });
});
module.exports = router;
