#!/usr/bin/node

function longTimeOperation(callback){
  console.log('this is longTimeOperation.');
  var delay = parseInt((Math.random()*10000000)%5000);

  setTimeout(function(){
    console.log('the longTimeOperation cost ' + delay + 'ms.');

    callback();
  },delay);
}

function f2(){
  console.log('this is callback.');
}

longTimeOperation(f2);
