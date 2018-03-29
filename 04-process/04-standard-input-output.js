#!/usr/bin/node

var me = {};
var i = 1;
var msg = ['name','email','QQ','mobile']; //提示用户输入这几个信息
//var argv = process.argv;


console.log(msg[0]+':');  //打印第一个信息 name
process.stdin.on('data',function(data){
// me.name = data;
var cmd = 'me.' + msg[i-1] + '="' + data.slice(0,data.length-1)+'"';
 //slice方法在这里用来去掉回车

eval(cmd);  //执行拼出来的字符串


if(i == msg.length){

  console.log(me);
  process.exit();
}
console.log(msg[i++] + ':');  //打印下一个信息
});

//process.stdin.on('end',function(){
//  console.log(me);
//});
