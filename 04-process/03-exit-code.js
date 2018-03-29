#!/usr/bin/node

console.log('exit code:',process.argv[2]);  //输入一个指定退出码
process.exit(process.argv[2]);  //将参数给exit函数做退出码，若不输入参数，默认为0
