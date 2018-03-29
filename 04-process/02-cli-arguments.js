#!/usr/bin/node

var argv = process.argv;  //定义一个变量，接收参数数组
//默认存在两个参数，一个是node可执行文件的路径，一个是当前脚本的路径

//是否没有可执行权限就没有第一个node路径？？？不是，一定会有node可执行文件路径。

var help = '--help';
var h = '-h';

//若有参数大于3个，忽略多出的参数，不是JS的基本类型，length可以改变
if(argv.length > 3){
  argv.length = 3;
}

//if(process.argv[2]){
//console.log('arguments number:',argv.length);
//console.log('arguments:',argv);
//}
if(process.argv[2] == '\--help' || process.argv[2] =='\-h' || !process.argv[2]){
  console.log('Please input just one parameter after the command!');
}else{
  console.log('arguments number:',argv.length);
  console.log('arguments:',argv);
  console.log(process.argv[2] + '=%d',eval(process.argv[2]));
}

//表达式求值

//var expression = argv[2]; //接收输入的参数

//console.log(expression + '=%d',eval(expression));
//eval()，一个可以求表达式的值的方法，表达式是字符串
