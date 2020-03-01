var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileupload = require('express-fileupload');

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
var cors = require('cors');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use file upload
app.use(fileupload());

//Create a connection to MongoDB.
mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful. -- ' + err)
    });

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

//Declare a variable for Company api endpoints.
var companyroutes = require('./routes/companyroutes');
app.use('/api/companies', companyroutes);

//Declare a variable for fileUpload api endpoints.
var uploadroutes = require('./routes/fileupload');
app.use('/api/uploads', uploadroutes);

//Declare a variable for Job api endpoints.
var jobroutes = require('./routes/jobroutes');
app.use('/api/jobs', jobroutes);

//Declare a variable for Resume api endpoints.
var resumeroutes = require('./routes/resumeroutes');
app.use('/api/resumes', resumeroutes);

//Declare a variable for User api endpoints.
var userroutes = require('./routes/userroutes');
app.use('/api/users', userroutes);

//Add this line to enable the CORS in Node, Express.js application.
app.use(cors());

//Initialize passport by add this line.
app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
