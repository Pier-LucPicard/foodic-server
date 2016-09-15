var express = require('express');
var app = express();
var Engine = require('tingodb')();
var config = require('./config/dev.json')

app.get('/',function(req,res){

  res.send("Hello World");
});

var db = new Engine.Db('./data',{});
app.listen(config.server.port);
