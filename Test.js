console.log("hello world!")

// Two ways to run the command on back-end side
// node [full path including file name]
// node [file name in the directory the file is in]

// Scripting langauge
//	- no library or anything needed to run script
//	- no compliation
//	- once you write it then you can run it



var sumValue = sum(6, 10) // function invocation, calling
console.log(sumValue)

// "Behavior" of a dynamic GLOBAL OBJECT
function sum(a, b) {
	// console.log(this) // refers to the global object 
	return a + b
}

// Dynamic typing, or dynamic casting
// On runtime, the type of variable is decided depending on the value assigned to it
sumValue = 2000
console.log(sumValue)

sumValue = "This was initialized as number but now is a string"
console.log(sumValue)

var i = 0 // var keyword is used to initialize a variable

// built-in loop function
setInterval(function() {
	console.log(++i)
}, 1000)

// REPL - Read, Evaluate, Print and Loop
// stop execution - ctrl + c

// setInterval(() => {
// 	console.log(i)
// 	i++
// }, 1000)
