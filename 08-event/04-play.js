#!/usr/bin/node

var MusicPlayer = require('./04-mixing-event-emitter');

var musicPlayer = new MusicPlayer('storm');

musicPlayer.on('play',function(){
  this.playing = true;
  console.log('\n',this.toString());
});

musicPlayer.on('stop',function(){
  this.playing = false;
  console.log('\n',this.toString());
});

musicPlayer.emit('play');

setTimeout(function(){
  musicPlayer.emit('stop');
},2000);


