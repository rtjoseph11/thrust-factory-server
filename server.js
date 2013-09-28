var mongoose = require('mongoose');
var express = require('express');
mongoose.connect('mongodb://localhost:27099/thrust');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  email: String,
  // password: String,
  createdAt: {type: Date, default: Date.now}
});

var leaderboardSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  score: Number,
  createdAt: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);
var Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
var app = express();

app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/users', function(req, res){
  User.find()
  .select('email')
  .exec(function(err, results){
    if(err){
      res.send(500, 'Something went wrong.');
    } else {
      res.send(results);
    }
  });
});

app.post('/users', function(req, res){
  User.findOne({email: req.body.email})
  .exec(function(err, result){
    if(!result){
      var user = new User(req.body);
      user.save(function(err){
        if(!err){
          res.send(200);
        } else {
          res.send(400, err);
        }
      });
    } else {
      res.send(400, 'User already exists.');
    }
  });
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/leaderboard', function(req, res){
  Leaderboard.find()
  .limit(100)
  .sort({score: -1})
  .exec(function(err, results){
    if(err){
      res.send(500, 'Something went wrong.');
    } else {
      Leaderboard.populate(results, {path: 'user', model: 'User'}, function(err, leaderboards){
        console.log(leaderboards);
        if (err){
          res.send(500, 'Something went wrong.');
        } else {
          res.send(leaderboards);
        }
      });
    }
  });
});

app.post('/leaderboard', function(req, res){
  User.findOne({email: req.body.email})
  .exec(function(err, result){
    var leaderboard = new Leaderboard({
      score: req.body.score,
    });
    leaderboard.user = result.id;
    leaderboard.save(function(err){
      if(!err){
        res.send(200);
      } else {
        res.send(400, err);
      }
    });
  });
});

app.listen(3000);