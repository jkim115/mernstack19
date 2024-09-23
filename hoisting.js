/*
	Hoisting is a kind of a snapsot of all the javascript, functions, variables
	present in the whole file.

	Hoisting happens in two ways:
		1. Function Hoisting - A function gets hoisted with its complete definition
		and so we will be able to execute the function before declaration.

		2. Variable Hoisting - Variable gets hoisted with default value of JS (undefined)
*/

// console.log(Sum);	// undefined

// Sum(1,2,3,4);

// var Sum = function (a,b,c,d) {
// 	console.log("Sum of a, b, c, and d");
// }

// Sum(1, 2, 3, 4);

// console.log(myVar) // if myVar is not declared anywhere, then myVar is not defined

// console.log(myVar)	// undefined
// console.log(myFunc("Hoisted"))	// This is function hoisting, Hoisted
// console.log(myFunc(myVar))	// This is function hoisting, undefined

// function myFunc(val) {
// 	console.log("This is function hoisting, ", val)
// }

// var myVar = "I am a hoisted var"

// console.log(myVar)

// myFunc(myVar) // This is function hoisting, I am a hoisted var


var newVar = "Interesting"

// When no variable is declared within the function, it will look up global variables
// If the variable is declared within the function, local hoisting takes place.

function Random() {

	console.log(newVar)	// Interesting

//	var newVar = "Very interesting"

	VeryRandom()	// Very interesting

	function VeryRandom() {
		console.log(newVar)
	}
}

Random();
