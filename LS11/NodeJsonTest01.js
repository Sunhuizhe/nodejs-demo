#!/usr/bin/node

var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
      
      var getDataStr = url.parse(req.url).query;

      res.writeHead(200, {
                "Content-Type": "text/plain",
                
                "Access-Control-Allow-Origin":"*", 
                "Access-Control-Allow-Methods": "GET, POST"
            
      });
      setTimeout(function () {
                res.end("你的输入信息是："+getDataStr);
                    
      },200);
          

}).listen(8080);
console.log("start server!");
