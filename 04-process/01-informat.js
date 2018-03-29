#!/usr/bin/node

console.log('architeture:',process.arch);   //打印系统版本
console.log('platform:',process.platform);


console.log('');

console.log('process id:',process.pid);     //打印当前进程id
console.log('execPath:',process.execPath);    //打印当前进程绝对路径

console.log('');

console.log('node version:',process.version);   //nodejs 版本号
console.log('user id:',process.getuid());       //user id
console.log('group id:',process.getgid());      //所属组id
console.log('cwd:',process.cwd());              //当前文件夹绝对路径

console.log('');

console.log('rss:',process.memoryUsage().rss);  //常驻内存大小
console.log('heapTotal:',process.memoryUsage().heapTotal);  //V8动态分配总大小
console.log('heapUsed:',process.memoryUsage().heapUsed);    //V8动态分配可用内存
console.log('external:',process.memoryUsage().extemal);    //V8绑定到C++对象上的内存

console.log('');

//console.log('\env',process.env);    //环境变量
console.log('host name:',process.env.HOSTNAME);   //主机名

//使进程不退出，查看当前进程id

//process.stdin.resume();

