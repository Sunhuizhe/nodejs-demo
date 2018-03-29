#!/usr/bin/node

//引入文件
var fs = require('fs');

var width = 64;
var height = 64;
var pixelByteSize = width * height * 4;
var totalSize = pixelByteSize + 54;

var buf = new Buffer(totalSize);
buf.fill(0);

//head

buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);   //54是头大小，0a是偏移量
buf.writeUInt32LE(40,0x0e);    //40是头数据大小，54是偏移量，从54开始
buf.writeUInt16LE(1,0x1a);    //1是调色板参数，固定不变
buf.writeUInt32LE(32,0x1c);   //表示写入的是一个32位的图
buf.writeUInt32LE(pixelByteSize,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);

//data
for(var i = 54;i<totalSize;i+=4){
  buf.writeUInt32LE(0xffff0000,i);
}

fs.writeFile('./red.bmp',buf,function(err){
  if(err !== null){
    console.error(err);
    process.exit(1);
  }
})
