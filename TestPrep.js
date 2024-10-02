/*
	1.	Functions
	2.	Hoisting
	3.	Closure
	4.	Object Inheritance like class
	5.	Prototype Example
	6.	JS - Basics
	7.	CallBack
	8.	Call and Apply
	9.	Bind
	10.	DataTypes
*/

// 1. Functions - Invocation context, closure, hoisting, constructor, callback

// hoisting

var a = 2;

function outer() {
	
	var b = 4;

	console.log(this === globalThis)			// true; the global object is the one that invokes this function
	console.log("a: " + a + "\nb: " + b);		// It can access the variable 'a' outside it

	// inner() is hoisted to the top of this code block, so we can call it 
	// before its definition
	inner()	

	function inner() {
		console.log(this === globalThis)		// true; Inner function's invocation context is always the global object
		console.log("a: " + a + "\nb: " + b);	// it can access variables of the outer function (closure)

		console.log(c)							// undefined; 'c' is hoisted, so no error, but by the time the interperet runs this line, c is undefined yet.
		var c = 3;

		// This function is invoked immediately
		(function innerMost() {
			console.log("a: " + a + "\nb: " + b + "\nc: " + c);	// c is accessible
		})()
	}
}

var p = outer();
console.log(p)		// p is undefined, as innerMost() doesn't return anything (or no return STMT)


function createUser(name, age, ssn) {
	this.name = name;
	this.age = age;
	this.ssn = ssn;

	this.getInfo = function(inputSSN) {

		if (this.ssn == inputSSN) {
			return { name: this.ssn, age: this.age }
		} else {
			return "Incorrect SSN"
		}
	}

	return this.getInfo;
}

var q = createUser("Jay", 25, 123);
console.log(q);	// q = getInfo()

console.log(q(123));
console.log(q(456));
