#!/usr/bin/node

//setTimeout(function(){
 // console.log('Hello from the past!');
// console.log('first!');
//},1000);
//console.log('second!');
//


function Bomb(){
  this.message = 'Bomb';
}
Bomb.prototype.explode = function(){
  console.log(this.message);
}

var bomb = new Bomb();

var timeid = setTimeout(bomb.explode.bind(bomb),2000);

console.log(process.execPath);

clearTimeout(timeid);


