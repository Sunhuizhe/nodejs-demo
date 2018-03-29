#!/usr/bin/node

var longTimeOperation = function(taskID){

  var id = taskID;

  this.go = function(callback){
  console.log('this is longTimeOperation #' + id);
  var delay = parseInt((Math.random()*10000000)%5000);

  setTimeout(function(){
    console.log('the task #'+ id +' cost ' + delay + 'ms.');

    callback();
  },delay);
 }
}


function f2(){
  console.log('this is callback.\n');
}


for(var i = 0; i < 5; i++){
  var task = new longTimeOperation(i);
  task.go(f2);
}

longTimeOperation(f2);
