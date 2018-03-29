#!/usr/bin/node

console.log('process id',process.pid);

process.stdin.resume();   //控制程序不退出

process.on('SIGINT',function(){
  console.log('you press ctrl-c,good bye!');
});

process.on('SIGTSTP',function(){
console.log('you press ctrl-z,stop running!');
});

