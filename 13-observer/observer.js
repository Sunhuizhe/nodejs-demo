#!/usr/bin/node

var Subject = function(){
  var _observer = [];

  this.attach = function(observer){
    _observer.push(observer);
  }

  this.detach = function(){
    _observer.pop();
  }

  this.notify = function(msg){
    for(var i = 0; i < _observer.length; i++){
      _observer[i].update(msg);
    }
  }

  this.print = function(){
    console.log(_observer.length);
    console.log(_observer);
  }
}

var Observer = function(name){
  this.update = function(msg){
    console.log('I am ',name,',and I get the message ',msg);
  }
}

var sub = new Subject();
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');

console.log('');

setTimeout(function(){
  var c = new Observer('c');
  sub.detach();

  sub.attach(c);
  sub.notify('world');
},1000);


