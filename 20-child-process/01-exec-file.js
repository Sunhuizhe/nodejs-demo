#!/usr/bin/node

var cp = require('child_process');

var command = process.argv[2] || 'cat';
var argv = process.argv[3] || './01-exec-file.js';

//console.log('I am father process.My process ID is:',process.pid);

//console.log('cat ./01-exec-file.js\n');

cp.execFile(command,[argv],function(err,stdout,stderr){
  if(err) console.log(err.message);
  
  console.log(stdout);
})
