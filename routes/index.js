var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '神奇海螺电台' });
});


router.get('/docs.html', function(req, res, next) {
  res.render('index', { title: '神奇海螺电台' });
});

module.exports = router;
