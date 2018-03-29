#!/usr/bin/node

var http = require('http');

var url = require('url');

var msg = process.argv[2] || 'hello! I am Sun!';

var options = url.parse('http://192.168.109.144:8080');
options.method = 'POST';

console.log(options);

var req = http.request(options,function(res){
  console.log('STATUSCODE:',res.statusCode);
  console.log('STATUSHEADS:',res.headers);
  console.log('');

  res.setEncoding('utf8');
  res.on('data',function(data){
    console.log('body:',data);
  });
}).on('error',function(err){
  console.log(err.message);
});

req.write(msg + '\n');

req.end();

