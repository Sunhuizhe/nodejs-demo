#!/usr/bin/node

var dns = require('dns');

var url = process.argv[2];

dns.resolve(url,function(err,addr){
  if(err){
    console.log(err.message);
    process.exit(1);
  }else{
    console.log(addr);
  }
})
