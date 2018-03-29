#!/usr/bin/node

console.log('start...');

//1、在程序运行界面ctrl-c停止循环
//2、设置一个count计数器
//3、用unref()方法停止循环 耗时操作

var timeid = setInterval(loop,500);

//var count = 0;

function loop(){

//  count++;

  console.log('I will loop forvever!');

 // if(6 == count){
 //   clearInterval(timeid);
//  }

}
setTimeout(function(){
  console.log('Game Over!');
},5000);

timeid.unref();
