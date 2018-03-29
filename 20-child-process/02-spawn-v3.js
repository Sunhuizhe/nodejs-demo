#!/usr/bin/node

var http = require('http');
var cp = require('child_process');

console.log('The father process ID:',process.pid);

http.createServer(function(req,res){
  var child = cp.spawn('./02-child.js');

  child.stdout.pipe(res);
  child.stderr.pipe(res);
}).listen(8080);
