const express= require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path= require('path');

// Database
const db= require('./config/database');

//Test DB connection
db.authenticate()
    .then(()=> console.log( 'DATAbase connected...'))
    .catch(err=> console.log('Error:'+err))


const app=express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> res.send('INDEX'));
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//Users routes
app.use('/users', require('./routes/users'));
app.use('/courses', require('./routes/courses'));
app.use('/userCourses',require('./routes/userCourses'));

const PORT= process.env.PORT || 5000;

app.listen(PORT, console.log('server started on port', PORT));
