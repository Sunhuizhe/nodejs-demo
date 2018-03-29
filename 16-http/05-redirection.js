#!/usr/bin/node

var http = require('http');
var url = require('url');
var addr = process.argv[2] || 'http://www.sina.com';

function opt(addr){

  var options = url.parse(addr);
  options.method = 'GET';
  options.headers = {
    'User-Agent':'05-redirection.js'
  };
  return options;
}

function get(options){

  http.get(options,function(res){
    console.log('STATUSCODE:',res.statusCode);
    console.log('STATUSMSG:',res.statusMessage);
    console.log('VERSION:',res.httpVersion);
    console.log('');

    console.log(res.headers);
    console.log('');

    if(res.statusCode >=300 && res.statusCode < 400){
      get(opt(res.headers.location));
    }else{
      //res.pipe(process.stdout);
    }

  }).on('error',function(err){
    console.log(err.message);
  });
}

get(opt(addr));
