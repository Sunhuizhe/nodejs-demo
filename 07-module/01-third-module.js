#!/usr/bin/node

var now = require('date-now');  //date-now是把ECMAScript的date对象的now方法封装成一个模块
//date-now是一个第三方模块，需要安装，也称为依赖库
console.log(now());
console.log(Date.now());


