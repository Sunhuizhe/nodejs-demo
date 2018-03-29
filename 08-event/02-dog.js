#!/usr/bin/node

var events = require('events');

function Dog(name,energy){
  events.EventEmitter.call(this);

  var self = this;
  this.name = name;
  this.energy = energy;

  var timer = setInterval(function(){
    self.emit('bark');
  },1000);

  this.stop = function(){
    clearInterval(timer);
  }
}

Dog.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = Dog;
