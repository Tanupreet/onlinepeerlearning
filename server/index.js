const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors');



//requiring the routes
const get = require('./routes/executeCode');

//initializing express
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);


let onlineUser = ['Abc', 'Xyz', 'ISI', 'CBI', 'FBI', 'CID']

//middlewares
/*app.use(cors());*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', { type: 'new-message', text: message });
    });

    /*console.log(this.onlineUser)*/
    io.emit('users', onlineUser);

});

//parent route
app.use('/index', get);

http.listen(8080, () => {
    console.log('started on port 8080');
});

//exporting the module
module.exports = app;