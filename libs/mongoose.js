var mongoose    = require('mongoose');
// var log         = require('./log')(module);

mongoose.connect('mongodb://localhost/cms');
var db = mongoose.connection;

// db.on('error', function (err) {
//     log.error('connection error:', err.message);
// });
// db.once('open', function callback () {
//     log.info("Connected to DB!");
// });

var Schema = mongoose.Schema;

var Article = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

// validation
Article.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});

var ArticleModel = mongoose.model('Article', Article);

module.exports.ArticleModel = ArticleModel;