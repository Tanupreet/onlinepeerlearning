const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors');


//requiring the routes
const get = require('./routes/executeCode');

//initializing express
const app = express();


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


//parent route
app.use('/index', get);

//server running on port 3000
app.listen(3002);

//exporting the module
module.exports = app;
