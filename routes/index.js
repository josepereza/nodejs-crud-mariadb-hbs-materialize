var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pagina1', function(req, res, next) {
  res.render('principal');
});

router.get('/pagina2', function(req, res, next) {
  res.render('principal2');
});

module.exports = router;
