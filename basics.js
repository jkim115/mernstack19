// Javascript or other scripting language is a interpreted language
// No complie time error, line by line execution and results "on the fly"

// In Java, compile error; in Javascript, runtime error
// Person prsnObj = new Person();

console.log(sum(6,10));

function sum(a,b) {
	console.log(this)	// this function is a child of "global" object
	return a + b;
}

/*
 Hoisting - JS's default behavior where the interpreter moves function and
 variable declarations to the top. 
 Due to hoisting feature JS is also said to be a partially compiled language
*/

// case sensitive
var name = "some name";
var NAME = "some name";
console.log(name, NAME);

// we can use special chars ($, _)
var name$, _name;

// expressions and operators
// &&, ||, !, =, ==, ===, ? (ternary operator)
// >, <, >=, <=

var age = "20"

if (age == 20) {
	console.log("correct")	// cast to number
} else {
	console.log("incorrect")
}

age === 20 ? console.log("yes") : console.log("no");	// no

// loop - for, while, switch
// array.forEach(element => {
	
// });

var x = 21==="21" // true
console.log(x)	// false
console.log(typeof(x))	// boolean

// Dynamic type casting + assignment
x = "Jay"
console.log(x)
console.log(typeof(x))