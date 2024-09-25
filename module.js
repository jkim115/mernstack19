/*
	Every file in JS is known as module
	This can contain one or thousands of lines of code
	We can acess data from another file by using require, module
	When we require from a file it makes available all the modules exported 
	from that file/module
*/

// var User3 = require("./literal")	// normalized path - this will excute the whole file

// console.log(User3.getUserDetails)

// import object of variables
var {User, User4, User3, User2} = require("./literal");	// order doesn't matter

console.log(User)
console.log(User2)
console.log(User4)	// imported object name should match to the exported one in case of multiple exports
console.log(User3.getUserDetails())