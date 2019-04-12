var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var flowRouter = require('./flow/routes/flow.route');
var bpjsRouter = require('./bpjs/routes/bpjs.route');
var dashboardUserRouter = require('./dashboard/routes/user.route');
var dashboardLoginRouter = require('./dashboard/routes/login.route');

var app = express();

// Database
const db= require('./config/database');

//Test DB connection
db.authenticate()
    .then(()=> console.log( 'DATAbase connected...'))
    .catch(err=> console.log('Error:'+err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/flow', flowRouter);
app.use('/api/bpjs', bpjsRouter);
app.use('/api/dashboard/user', dashboardUserRouter);
app.use('/api/dashboard/login', dashboardLoginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send({error: 'Not found'})
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send({error: err})
});

module.exports = app;
