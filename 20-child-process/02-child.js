#!/usr/bin/node

var cp = require('child_process');

console.log('The child process ID:',process.pid);

var timer = global.setInterval(function(){
  console.log('time:',Date.now());
},1000);

global.setTimeout(function(){
  global.clearInterval(timer);
  console.log('OK!8 seconds.Game Over!');
},8000);
