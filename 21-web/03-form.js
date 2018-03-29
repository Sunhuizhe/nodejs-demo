#!/usr/bin/node

var http = require('http');
var qs = require('querystring');

var items = [];

http.createServer(function(req, res) {

  if(req.url != '/'){
    err(res);
    return;
    }

  console.log(req.headers);
  console.log('');

  switch(req.method){
    case 'GET':
      show(res);
      break;
    
    case 'POST':
      add(req,res);
      break;
    
    default:
      err(res);
      break;
  }

}).listen(8080);

function show(res){
var html = '<!DOCTYPE html>\n'
            +'<html>\n'          
            +'<head>\n'
            +'<meta charset="UTF-8">\n'
            +'<title>待办事项</title>\n'
            +'</head>\n'
            +'<body>\n'
            +'<div id="main">\n'
            +'<h1>代办事项清单</h1>\n'
            +'<ul>\n'
            +items.map(function(item){return '<li>' + item + '</li>';}).join('\n')
            +'</ul>\n'
            +'<hr />\n'
            +'<form method="post" action="/">\n'
            +'<input type="text" id="todo" title="todo" name="item" placeholder="请输入代办事项："/>\n'
            +'<input type="submit" value="确定"/>\n'
            +'</form>\n'
            +'</div>\n'
            +'</body>\n'
            +'</html>\n';

  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}

function add(req,res){
  var body = '';

  req.on('data',function(chunk){
    body += chunk;
  });
  req.on('end',function(){
    console.log(body);

    if(body != ''){
      items.push(qs.parse(body).item);
    }
    show(res);
  });
 }

function err(res){
  var msg = 'Not Found';

  res.statusCode = 404;
  res.setHeader('Content-Type','text/plain');
  res.setHeader('Content-Length',Buffer.byteLength(msg));

  res.end(msg);
}
