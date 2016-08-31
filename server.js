var fs = require('fs');
var https = require('https');
var express = require('express');
var path = require('path');
var mime = require('mime');
var app = express();
var options = {
   key  : fs.readFileSync('server.key'),
   cert : fs.readFileSync('server.crt')
};

app.get('/', function (req, res) {
     // var file = __dirname + '/public/index.html';
  var file = __dirname + '/public/apple-app-site-association';
  res.sendFile(file);
});

app.get('/apple-app-site-association', function(req, res){

  // var file = __dirname + '/public/index.html';
  var file = __dirname + '/public/apple-app-site-association';
  res.sendFile(file);
});

https.createServer(options, app).listen(3000, function () {
   console.log('Started!');
});

// https://127.0.0.1:3000/apple-app-site-association
