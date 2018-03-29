#!/usr/bin/node

var https = require('https');

var url = require('url');

var user = process.argv[2] || 'Sunhuizhe';
var addr = ' https://api.github.com/search/repositories?q=user:'+ user;

var options = url.parse(addr);
options.method = 'GET';
options.headers = {
  'User-Agent':'Sunhuizhe'
};

  https.get(options,function(res){
    
    var result = '';

    res.on('data',function(data){
      result += data.toString('utf8');
    });

    res.on('end',function(){
      var list = JSON.parse(result);

      console.log('Total:',list.total_count);
      console.log('=================');

      for(var i = 0; i < list.items.length; i++){
        console.log(i + '\t',list.items[i].name);
      }
    })
  });


