#!/usr/bin/node

var MusicPlayer = require('./04-mixing-event-emitter');

var musicPlayer = new MusicPlayer('storm');

process.on('uncaughtException',function(err){
  console.log(err);
  process.exit(1);
});

musicPlayer.on('play',function(){
  this.playing = true;
  console.log('\n',this.toString());
});

musicPlayer.on('stop',function(){
  this.playing = false;
  console.log('\n',this.toString());
});

musicPlayer.on('error',function(err){
  console.log(err);
  process.exit(1);
});

musicPlayer.emit('play');

setTimeout(function(){
  musicPlayer.emit('stop');
},5000);

setTimeout(function(){
  musicPlayer.emit('error',new Error('WRONG!'));
},3000);

