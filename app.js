var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var login = require('./routes/login');
var accgroup  = require('./routes/accgroup');
var accgroupmodule  = require('./routes/accgroupmodule');
var accmodule  = require('./routes/accmodule');
var accuser  = require('./routes/accuser');
var accusergroup  = require('./routes/accusergroup');
var agreement  = require('./routes/agreement');
var agreementext  = require('./routes/agreementext');
var client  = require('./routes/client');
var companyregion  = require('./routes/companyregion');
var companysector  = require('./routes/companysector');
var companysize  = require('./routes/companysize');
var doctorext  = require('./routes/doctorext');
var examprocedure  = require('./routes/examprocedure');
var examprocedureext  = require('./routes/examprocedureext');
var healthplan  = require('./routes/healthplan');
var healthplanext  = require('./routes/healthplanext');
var logapi  = require('./routes/logapi');
var modality  = require('./routes/modality');
var modalityext  = require('./routes/modalityext');
var roomext  = require('./routes/roomext');
var users  = require('./routes/users');


var app = express();

//This command disables the request Cache
//app.disable('etag');

//Use the env Configuration File.
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/',accgroup);
app.use('/',accgroupmodule);
app.use('/',accmodule);
app.use('/',accuser);
app.use('/',accusergroup);
app.use('/',agreement);
app.use('/',agreementext);
app.use('/',client);
app.use('/',companyregion);
app.use('/',companysector);
app.use('/',companysize);
app.use('/',doctorext);
app.use('/',examprocedure);
app.use('/',examprocedureext);
app.use('/',healthplan);
app.use('/',healthplanext);
app.use('/',logapi);
app.use('/',modality);
app.use('/',modalityext);
app.use('/',roomext);
app.use('/',users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
