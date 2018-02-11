var express = require('express');
var router = express.Router();

var Article = require('../models/blogModel');

router.route('/')
    .get((req, res, next) => {
        Article.find((err, articles) => {
            if (err) {
                res.send(500, err);
            }
            else {
                res.json(articles);
                next();
            }
        })
    })
    .post((req, res, next) => {
        let data = req.body || {};
        Article.create(data)
            .then(article => {
                res.send(200, article);
                next();

            })
            .catch(err => {
                res.send(500, err);
            })
    });

module.exports = router;
