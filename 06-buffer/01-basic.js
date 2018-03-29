#!/usr/bin/node

var buf = new Buffer(256);  //实例化一个buffer，参数是buffer的大小，创建时确定，不可变
buf[0] = 23;

console.log('buf:',buf.length,buf);

//用一个for循环给buf赋值
for(var i = 0; i < 256; i++) buf[i] = i;

console.log('\nbuf:',buf.length,buf);

//输出buf的后六个值
var end = buf.slice(250,256); //切片，将256里的前250个去掉，end里只剩下最后六个

console.log('\nbuf\'s end 6 items:',end);

//填充buffer
end.fill(0);
console.log('\nbuf\'s end 6 items:',end);

//实例化buffer的三种方法
//1、用数组实例化buffer
var array = ['a',0xba,0xdf,0x00,255,10];
var buf1 = new Buffer(array);
console.log('\nbuf1:',buf1.length,buf1);

//2、用字符串实例化buffer
var buf2 = new Buffer('Hello World!','utf8');
console.log('\nbuf2:',buf2.length,buf2.toString());

//3、拷贝   引用？
var buf3 = new Buffer(buf2.length);
buf2.copy(buf3,0,0,buf2.length);  //将buf2拷贝到buf3,起点是0,0，长度是buf2.length
console.log('\nbuf3:',buf3.length,buf3.toString());
