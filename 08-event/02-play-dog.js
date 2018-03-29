#!/usr/bin/node

var Dog = require('./02-dog');

var taidi = new Dog('taidi',4);
var jingba = new Dog('jingba',5);

//var energy = 8;

function onBark(){
  console.log(this.name + ' barked!');
  this.energy--;
  if(this.energy == 0){
    this.stop();
    console.log(this.name + ' is tired!');
  }
}

taidi.on('bark',onBark);
jingba.on('bark',onBark);
