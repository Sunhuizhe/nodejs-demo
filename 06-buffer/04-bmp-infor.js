#!/usr/bin/node

//引入文件
var fs = require('fs');

fs.readFile('./nodejs-logo.bmp',function(err,buf){  //读取文件

//先处理错误
  if(err){
  console.log(err);
  process.exit(1);}
 
  if(buf.toString('ascii',0,2) === 'BM'){
    console.log('width:',buf.readInt32LE(0x12));
    console.log('height:',buf.readInt32LE(0x16));
    console.log('color depth:',buf.readUInt16LE(0x1c));
  }

});
