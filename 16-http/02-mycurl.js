#!/usr/bin/node

var http = require('http');

var url = process.argv[2] || 'http://www.baidu.com' ;

if(url == null || url === ''){
  console.log('Please input a url.');
}else{
 var req =  http.request(url,function(res){
    console.log('STATUSCODE:',res.statusCode);
    console.log('STATUSMSG:',res.statusMessage);
    console.log('VERSION:',res.httpVersion);
    console.log('');

    console.log(res.headers);
    console.log('');

    res.pipe(process.stdout);
  });

 req.end();
}

