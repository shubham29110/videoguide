var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect(
  "mongodb://localhost/videoguide",
  { useNewUrlParser: true },
  () => console.log("connected to database.")
);
//var db = mongoose.connection;
var routes = require('./Routes/videoGuide');



// Init App
var app = express();



// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));






app.use('/api', routes);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);