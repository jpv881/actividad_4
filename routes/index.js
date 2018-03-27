var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('destinos', {
    title: 'Agencia Viajes',
    layout: 'layout'
  });
});

module.exports = router;
