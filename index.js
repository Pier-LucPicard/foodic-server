var express = require('express');
var app = express();
var config = require('./config/dev.json')

app.get('/',function(req,res){

  res.send("Hello World");
});

app.listen(config.server.port);
