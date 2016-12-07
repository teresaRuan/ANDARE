var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose=require('mongoose')
var config=require('./config')
var users=require('./routes/users')
var addUser=require('./routes/addUser')
var search=require('./routes/search')
var searchKeyword=require('./routes/searchKeyword')
var article=require('./routes/articleDetail')
var submitComment=require('./routes/submitComment')
var app = express();
var server=require('http').createServer(app)
var io=require('socket.io').listen(server);
var static_path = path.join(__dirname);
server.listen(process.env.PORT || 27017, function (err) {
  if (err) { console.log(err) };
  console.log('Listening at localhost:27017');
});
mongoose.connect('mongodb://localhost:27017/andare');
//链接数据库
app.use(express.static(static_path))
    .get('*', function (req, res) {
      res.sendFile('./views/index.html', {
        root: static_path
      });
    });

//requst
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/userLogin',users);
app.use('/userRegister',addUser);
app.use('/search',search);
app.use('/searchKeyword',searchKeyword);
app.use('/articleDetail',article);
app.use('/submitComment',submitComment)



//socket

var userNumber = 0;

io.sockets.on('connection', function (socket) {
    var signedIn = false;

    socket.on('newMessage', function (text) {
        io.emit('newMessage',{
            userName:socket.userName,
            text: text
        })
    });

    socket.on('signIn', function (userName) {
        if (signedIn) return;

        // we store the username in the socket session for this client
        socket.userName = userName;
        //++userNumber;
        signedIn = true;
    });

    /*socket.on('disconnect', function () {
        if (signedIn) {
            --userNumber;

            io.sockets.emit('userLeft', {
                userName: socket.userName,
                userNumber: userNumber
            });
        }
    });*/

});


module.exports = app;
