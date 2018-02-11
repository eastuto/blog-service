const express = require('express');
const router = express.Router();

var Author = require('../models/authorModel');

router.route('/')
    .get((req, res, next) => {
        Author.find((err, authors) => {
            if (err) {
                res.send(500, err);
            }
            else {
                res.send(200, authors);
                next();
            }
        })
    });

module.exports = router;