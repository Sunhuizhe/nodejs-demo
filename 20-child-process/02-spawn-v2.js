#!/usr/bin/node

var cp = require('child_process');

console.log('The father process ID:',process.pid);

var child = cp.spawn('./02-child.js');

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
