var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
global.appRoot = path.resolve(__dirname);


//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var flowRouter = require('./flow/routes/flow.route');
var bpjsRouter = require('./bpjs/routes/bpjs.route');
var moodleRouter = require('./moodle/routes/moodle.route');
var dashboardRouter = require('./dashboard/routes/dashboard.route');
var dbRouter= require('./db/routes/routes.db');

var app = express();

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

//app.use('/', indexRouter);
app.use('/api/flow', flowRouter);
app.use('/api/bpjs', bpjsRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/moodle', moodleRouter);
app.use('/api/db', dbRouter);

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

// db activation
const db= require('./config/database');
//Test DB connection
db.authenticate()
    .then(()=> console.log( 'DATAbase connected...'))
    .catch(err=> console.log('Error:'+err));

db.sync({alter:true}).then(() => {
    console.log(`Database & tables created!`)
});
//app.engine('handlebars', exphbs({defaultLayout: 'main'}) );
//app.set('view engine', 'handlebars');

app.get('/', (req, res)=> res.send('INDEX'));
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


module.exports = app;
