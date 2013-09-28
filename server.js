var mongoose = require('mongoose');
var express = require('express');
mongoose.connect('mongodb://localhost:27099/thrust');

var User = mongoose.model('User', {
  email: String,
  password: String,
});

var app = express();

app.use(express.static(__dirname + '/public'));




app.listen(3000);