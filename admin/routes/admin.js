var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Admin' });
});

module.exports = router;
