var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var blogs = require('./routes/blogs');
var users = require('./routes/users');
let authors = require('./routes/authors');

app.use(logger('dev'));

var db  = mongoose.connect('mongodb://localhost/journoAPI');
// var Article = require('./models/articleModel');

app.use('/blogs', blogs);
app.use('/users', users);
app.use('/authors', authors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log("Gulp is now listening on port " + port);
})



