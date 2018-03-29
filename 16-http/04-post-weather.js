#!/usr/bin/node

var http = require('http');
var querystring = require('querystring');
var url = require('url');

var city = querystring.stringify({
  'city':'石家庄'
});

var addr = 'http://api.jisuapi.com/weather/query?appkey=9409f066403ab018&' + city;
var options = url.parse(addr);
options.method = 'POST';

var weather;

var req = http.request(options,function(res){

  var result = '';

  res.setEncoding('utf8');

  res.on('data',function(data){
    result += data.toString('utf8');
    
  });

  res.on('end',function(){
     weather = JSON.parse(result);
  console.log(weather);
  })

}).on('error',function(err){
  console.log(err.message);
 });



req.write(city + '\n');


req.end();

