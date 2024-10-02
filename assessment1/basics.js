//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

/* 
	1. Callback function : a function that is passed into another function as an argument
*/

function printName(name) { console.log(name); }
function printAge(age) { console.log(age); }

function printUserInfo(callback1, callback2, name , age) {
	printName(name);
	printAge(age);
}

printUserInfo(printName, printAge, "Jay", 99);


/*
	2. Hoisting: JavaScript's behavior to lift up or hoist variable declaration
	or function definitions to the top of the code block
*/

// s has been hoisted to the top of the code, so it's not an error to use it before its declaration; 
// however, its value is undefined, as the interpreter hasn't executed the code where it is initialized
console.log(s);			// => undefined
var s = "some string";

sayHi();				// => "Hi" (function definition has been hoisted )
function sayHi() {
	console.log("Hi");
}


/*
	3. Inheritance 
	- In JS, almost every object inherit properties from another object called the prototype.
	- Objects can have their own properties and if a property name is the same as
	the inherited property name, the object's own property will hide the inherited one. 
*/

var o = new Object();			// o inherits properties from Object.prototype
console.log(o.toString());		// => [object Object], toStirng() is a method or property of Object.prototype

var o2 = { a: 1 };
var o3 = Object.create(o2);		// o3 inherits properties from o2
console.log(o3.a);				// => 1

o3.a = 2;						// o3 now has its own property 'a' set to 2
console.log(o3.a);				// => 2, o2's property 'a' is hidden now.
console.log(o3.__proto__.a);	// => 1, we can still access o2's properties


/*
	4. Immediately Invocable Function Expression
	- a function expression that is invoked immediately after it is defined.
*/

var u = (function(a, b) { return a + b; })(5, 5);	// function is invoked immediately, and the return value is assigned to u
console.log(u);	// => 10


/*
	5. Template literal
	- a string literal that allows us to include multiple lines and expression inside a string
	  without the need for escape characters
*/

var a = "lines";
var s = `We can include multiple ${a} and expressions 
wihtout having to use escape characters`;
console.log(s);


/*
	6. Global object
	- an object that serves as a parent of all other objects in JS. 
	In a web browser, the global object is named "window"
*/

// globally defined functions act like methods of the global object, i.e.,
// the global object is the invocation context of the global function
function f() {
	console.log(this === globalThis);	// => true
}
f();