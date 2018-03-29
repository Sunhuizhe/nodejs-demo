#!/usr/bin/node

var fs = require('fs');

var http = require('http');

var mime = 'image/jpg';
var data = fs.readFileSync('./nodejs-logo.jpg').toString('base64');
var uri = 'data:' + mime + ';base64,' + data;

//console.log('data uri:\n%s',uri);

//写成一个服务器程序

http.createServer(function(req,res){
  console.log(req.headers);
  res.end(html);
}).listen(8080);

var html = '<!DOCTYPE html>\n<html>\n<body>\n<img alt="nodejs-logo.jpg" src="' + uri +'"\>\n</body>\n</html>';
