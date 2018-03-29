#!/usr/bin/node
//在控制台输出 '__filename' 和 '__dirname' 两个变量
console.log(__filename);
console.log(__dirname);


//完成项目目录下，'views' 子目录中，网页模板 'view.html' 的路径拼接

var filename = __dirname + '/views' + '/view.html';

console.log(filename);
