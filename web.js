var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function getIndex(){
  var str = fs.readFileSync('index.html').toString();
  return str;
};

app.get('/', function(request, response) {
      response.send(getIndex());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
