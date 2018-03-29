#!/usr/bin/node

var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track){
  this.track = track;
  this.playing = false;
  this.events = {
    play:'play',
    stop:'stop'
  };
  for(var i in EventEmitter.prototype){
    //console.log(i);
    this[i] = EventEmitter.prototype[i];
  }
}

MusicPlayer.prototype = {
  toString:function(){
    if(this.playing){
      return 'Now playing:' + this.track;
    }else{
      return 'Stopped';
    }
  }
}

module.exports = MusicPlayer;

