
/*
	Destructuring - assign elements of an array or JSON object into multiple variables

	1. let [a, b, c] = array
		- only three elements are assigned regardless of how many elements in the array
		- the elements not assigned are undefined
		- the rest operator (...) can be used to store the rest of the elements
	
	2. Data swapping can be done via [a, b] = [b, a]

	3. Object destructuring can be done with {} 
	** property names should be identical to those of the object
		- let {a, b} = object
		- let {a, b: {c, d}} = object
*/

// Direct destructuring
// We're given an array and assign elements to multiple variables at one time
let sessionList = ["AWS", "MERNStack", "Java"];
let [session1, session2, session3] = sessionList;

console.log(`${session1} ${session2} ${session3}\n`);


sessionList.push(["PLSQL", "Something"]);
let [s1, s2, s3] = sessionList;	// only three elements are assigned
console.log(`${s1} ${s2} ${s3}\n`);


sessionList2 = ["AWS"];
let [ss1, ss2] = sessionList2;
console.log(`${ss1} ${ss2}\n`);	// => AWS undefined (default value)


// "rest" operator which holds the rest of the values in a separate array
let [e1, e2, e3, ...restElements] = sessionList
console.log(`${e1} ${e2} ${e3} ${restElements}\n`); // => [ [ 'PLSQL', 'Something' ] ]


// Data swapping
let a = "a", b = "b";

[a, b] = [b, a]
console.log(`${a} ${b}`)


// Object destructuring

// Single object destructuring - when we need only a few properties of an object

let Assessment = {
	name: "Jay",
	standard: "Student",
	marks: {
		Java: 10,
		Mernstack: 9,
		ES6: 8
	}
}

// To get the values, it needs to trace down the object
let mernstack = Assessment.marks.Mernstack;

// Intead, we can do ... ** property name should be identical
// let {name, standard} = Assessment;
// console.log(`${name} ${standard}`);

// To get the nested object ... (We can add a new property alongside with that)
let {name, marks: {Java, Mernstack, ES6, newProp = 111}} = Assessment;
console.log(`${name} ${Java} ${Mernstack} ${ES6} ${newProp}`);