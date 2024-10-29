
/*
	A package is a collection of modules
	Node.js provides us modules we can use without the explicit import
*/

// Using the already initialized package/module
// Import the method 'log' defined in the module 'console'
let { log } = require('console');
log('Imported console module');

// Access global data
let { test } = require('./globalData');
log(global.connectionString);

// Process - global object that holds information about the current Node.js process
log(process);

// stdin property returns a stream connected to stdin (net.socket, fd 0)
// we attach an eventListener that fires on data comming into the stream
// asynchronous callback - wait until input is given
process.stdin.on('data', data => {
	process.stdout.write(`\n\n ${data.toString().trim()}`)
	process.exit();
})

// OS module - provides a set of utility methods and properties for
// interacting with the operating system
const os = require('os')
log(os.arch())
log(os.platform())
log(os.cpus())
log(os.hostname())
log(os.machine())


log(__dirname)	// the absolute path of the current directory
log(__filename) // the absolute path of the currently open file

// node:path module provides utilities for working with file and directory paths
const path = require('path')
// basename - return last portion of a path
console.log(path.basename(__filename))
// isAbsolute - check if the given path is absolute path
console.log(path.isAbsolute(__dirname))
// resolve - resolve the given path to an absolute path
console.log(path.resolve(__filename))

