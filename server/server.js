var express = require('express');
var http = require('http');
var https = require('https');
var helmet = require('helmet');
var shortid = require('shortid');

var db = require('./lib/db');

var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(helmet.xssFilter());
app.use(helmet.xframe());
app.use(helmet.hidePoweredBy());
app.use(helmet.ienoopen());
app.use(helmet.nosniff());

app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res, next){
  res.render('home', {id: id});
});



var server = http.createServer(app);

server.listen(port, ip, function(){
  console.log('Listening on 3000');
});
