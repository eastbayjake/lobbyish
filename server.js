var express = require('express');
var app = express();
var requireDir = function(dir){
	var path = require('path');
	var fs = require('fs');
	var normalizedPath = path.join(__dirname, dir);
	fs.readdirSync(normalizedPath).forEach(function(file) {
	  require(normalizedPath + '/' + file);
	});
};

requireDir('routes');
requireDir('models');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});