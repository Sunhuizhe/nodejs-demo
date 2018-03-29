#!/usr/bin/node

var cp = require('child_process');

console.log('child PID:',process.pid);

process.on('message',function(msg){
  console.log('msg from father:',msg);
});

process.send('hello!I am child process.PID:' + process.pid);
