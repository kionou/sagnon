var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
  res.render('deatil');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/sign', function(req, res, next) {
  res.render('sign');
});

module.exports = router;
