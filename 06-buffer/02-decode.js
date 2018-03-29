#!/usr/bin/node


var msg = process.argv[2];  //获取命令行参数

var parseBasicAuth = function(encodeString){
  var buf = new Buffer(encodeString,'base64');  //定义一个base64的buffer
  var parts = buf.toString('utf8').split(':');  //用“：”分割开字符串

  return{
    name:parts[0],
    passwd:parts[1]
  };
} 

var credentials = parseBasicAuth(msg);  //传参
console.log(credentials); //打印已解析的字符串
