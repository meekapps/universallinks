var fs = require('fs');
var path = require('path');
var http = require('http');
var express = require("express");
var app = express();

app.set('port', process.env.PORT || 3000);
// app.use(app.logger());

app.get('/', function (req, res) {
   // res.send('Hello World!');
  var file = __dirname + '/public/apple-app-site-association';
  res.sendFile(file);
});

app.listen(process.env.PORT, function () {
  console.log('***** exp listening on port: ' + process.env.PORT);
});