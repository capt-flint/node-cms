var express = require('express');
var router = express.Router();

var ArticleModel    = require('../libs/mongoose').ArticleModel;

/* GET articles listing. */
router.get('/', function(req, res, next) {
    return ArticleModel.find(function (err, articles) {
        if (!err) {
            res.render('articles', { articles: articles });
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
    });
});

module.exports = router;
