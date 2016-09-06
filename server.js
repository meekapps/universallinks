var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/apple-app-site-association', function (req, res) {
  res.sendFile(__dirname + '/public/apple-app-site-association');
});

app.listen(port, function () {
  console.log('***** exp listening on port: ' + port);
});
