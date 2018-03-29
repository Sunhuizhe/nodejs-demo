#!/usr/bin/node

//接收命令行的参数

//利用buffer转换编码格式

var name = process.argv[2];
var passwd = process.argv[3];

console.log('name:',name);
console.log('passwd:',passwd);

var buf = new Buffer(name + ':' + passwd);  //进行一个字符串拼接

console.log('user name and passwd:',buf.toString());
console.log('user name and passwd with base64:',buf.toString('base64'));
console.log('user name and passwd wiht hex:',buf.toString('hex'));


