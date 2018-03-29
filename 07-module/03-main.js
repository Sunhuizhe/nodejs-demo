#!/usr/bin/node

var obj = require('test');

console.log(obj.pi);

console.log(obj.circle(10).area());

var c = new obj.Circle(20);
console.log(c.diameter());
