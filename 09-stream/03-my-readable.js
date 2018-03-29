#!/usr/bin/node

var Readable = require('stream').Readable;
var util = require('util');

var MyReadable = function(){
  Readable.call(this);
}

var c = 97;
MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
}

util.inherits(MyReadable,Readable);
var rs = new MyReadable();

rs.pipe(process.stdout);

process.on('uncaughtException',function(){
 process.exit(0);
});
