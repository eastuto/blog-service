const express = require('express');
const router = express.Router();

var User = require('../models/userModel');

router.route('/')
    .get((req, res, next) => {
        User.find((err, users) => {
            if (err) {
                res.send(500, err);
            }
            else {
                res.send(200, users);
                next();
            }
        })
    });

module.exports = router;


