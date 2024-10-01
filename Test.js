// Two ways to run the command on back-end side
// node [full path including file name]
// node [file name in the directory the file is in]

// Scripting langauge
//	- no library or anything needed to run script
//	- no compliation
//	- once you write it then you can run it

console.log(sum(6, 10))

function sum(a,b) {
    // console.log(this === globalThis)	// true
    return a + b
}


var sumValue = sum(6, 10)
console.log(sumValue)	// 16

sumValue = 2000;

console.log(sumValue) 	// 2000

sumValue = "This was initialized as number but now is a string";

console.log(sumValue) 	// string


// Recap -
// Objects, Inheritance, Assign, Create
// Functions, overloading, 
// Closures
// Literals
// CallBack-Nesting
// Hoisting
// Datatypes
// Modules


/*
	Built-in loop function
	setInterval(callback, time in ms)
*/

// setInterval(function() {
// 	var i = 2;
// 	console.log(++i)	// 3, 3, 3, ... function is newly invoked every second
// }, 1000)


// setTimeout executes the callback func after the specified time in ms

var index = 0;
	
for(index = 0; index < 5; index++) {

	console.log(index);

	setTimeout(function() {
		console.log(index);
	}, 1000)
}
