#!/usr/bin/node

var argv = process.argv;

process.kill(argv[2],argv[3]);
//argv[2]是当前程序 id，argv[3]代表信号
