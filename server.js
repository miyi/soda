// var open = require('open');
var path = require('path');
var morgan = require('morgan');
var express = require('express');
var webpack = require('webpack');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');

mongoose.connect('mongodb://localhost/sodamachine');
var db = mongoose.connection;

var config = require('./webpack.config');
var compiler = webpack(config);
var app = express();
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(morgan('dev'));
app.use(express.static('public'));

db.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
db.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});
db.on("disconnect", function (err) {
    console.log('disconnected from mongo server...');
});

app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, './public/', 'landing.html'))
});
// app.get('/index', function (req, res){
//     res.sendFile(path.resolve(__dirname, './public/', 'index.html'))
// });
//
// app.get('/class', function(req , res){
//     db.courses.find(function(err,docs){
//         res.render('mongo',{data:docs});
//     });
// });

app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Web listening at http://localhost:3000/.');
});