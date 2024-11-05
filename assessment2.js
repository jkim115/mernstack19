// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same

// Using the iterator methods of an array, we can preserve the immutability

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. Get heroes who are not evils

let ans1_a = heroes.filter(hero => hero.isEvil === false);
console.log(ans1_a);

// b. Print Unique family names
let ans1_b = heroes.reduce((set, hero) => {
	set.add(hero.family);
	return set;
}, new Set());
console.log(ans1_b);

// c. Print Hero Names from given objects, and append sir in each of them before printing
let ans1_c = heroes.reduce((names, hero) => {
	names += hero.name + " sir\n";
	return names;
}, "");
console.log(ans1_c);

// d. Do we have any hero in Marvel Family who is not evil
let ans1_d = heroes.filter(hero => hero.family === "Marvel" && hero.isEvil === false);
console.log(ans1_d);


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
ans2 = function (...n) {
	let res = n.reduce((x, y) => x*y, 1);
	return res;
}
let arr = [1, 2, 3]
console.log(ans2(...arr));	// => 6


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

let { userDetails: {first, last}, contactNumber = 9119119110} = person;
console.log(last, contactNumber);


//4. Give me an example of const data manipulation

// the reference variable obj is declared with const, 
// not the object that it points to, which means the object itself is modifiable   
const obj = {x: 1, y: 2};	
obj.x = 2;
console.log(obj.x);	// => 2


//5. What is the difference between for-of and for-in show with examples

/*
	The for-in loop works with any object and loops through the property names 
	of an object
*/
let myObj = {x: 1, y: 2, z: 3};
let myArr = [3, 2, 1];

for(propname in myObj) {
	console.log(propname);	// => x y z
}

for(propname in myArr) {
	// An array is a special object whose property names are integers
	console.log(propname); // => 1 2 3
}

/*
	The for-of loop only works with iterable objects, e.g., arrays, strings, 
	sets, and maps and it loops through the values of an object.
	A normal object is not iterable. To iterate through its property names, 
	we should use Object.keys() as it returns an array of property names 
*/
for (propname of Object.keys(myObj)) {
	console.log(propname)
}

let myStr = "hello";	// String is iterable
for (letter of myStr) {
	console.log(letter);	// => 'h' 'e' 'l' 'l' 'o'
}

//6. Give me an example of bind and write its usage, comparison with arrow function

/*
	If a nested function (that is not an arrow function) is invoked, 
	its 'this' value, or invocation context, will refer to the global object. 
	
	Therefore, 'this' in g() below references the global object instead of 
	the object 'o'. To set the nested function's 'this' value to the object, 
	we need to manually bind the function to the object using bind().
*/
let o = {
	x: 1,
	f() {
		let g = function() { 
			console.log(this === globalThis);	// => true
		};
		g();

		let h = function() {
			console.log(this.x)	// => 1; this refers to 'o' we bound to h()
		}.bind(this);
		h();
	}
}
o.f();

/*
	Unlike the normal functions, nested arrow functions inherit the 'this' value 
	of the function they are nested within.
*/
let o2 = {
	x: 1,
	f() {
		let self = this;
		let g = () => { console.log(this === self); };	// => true
		g();
	}
}
o2.f();


//7. Create an example showing usage of event loop in concurrent execution cycle

function eventLoop() {
	// console.log() is pushed into a call stack and immediately executed
	console.log("Starting Tasks...");

	// setTimeout() gets pushed into a call stack and immediately popped out
	// after registering its callback to Web APIs
	setTimeout(() => { console.log("Task 1 completed after 2 seconds")}, 2000);
	
	// Then, console.log() gets executed
	console.log("After 1st setTimeout()");

	// Like the first setTimeout(), it registers its callback to Web APIs
	setTimeout(() => { console.log("Task 2 completed after 1 seconds")}, 1000);
	
	// And then this gets printed out
	console.log("After 2nd setTimeout()");

	// After a second, the second callback is pushed into a callback queue
	// Since the call stack is empty, the event loop pushes it there so it can execute
	// After two seconds, the first callback gets pushed into the callback queue
	// and then into the call stack by the event loop
}
eventLoop();

/*
	Output

	Starting Tasks...
	After 1st setTimeout()
	After 2nd setTimeout()
	Task 2 completed after 1 seconds
	Task 1 completed after 2 seconds
*/

//8. create an example showing usage of short hand and default param.
let f = function (x = 1, y = 2) {
	return {x, y};	// == { x: x, y: y }
}
console.log(f());	// => { x: 1, y: 2 }


//9. Create two objects with some properties and merge them using Object method and ES6 way
let obj1 = {x: 1, y: 2};
let obj2 = {x: 1, y: 3, z: 2};

// Using Object.assign() - the value of obj2's y overrides the value of obj2's y
let obj3 = Object.assign(obj1, obj2);
console.log(obj3);	// => { x: 1, y: 3, z: 2 }

// Using the spread operator in ES6 - An override happens in the same way
let obj4 = { ...obj1, ...obj2 };
console.log(obj4);	// => { x: 1, y: 3, z: 2 }


//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// Map
let cntToCapMap = new Map();	// mapping from country to capital 
cntToCapMap.set("USA", "Washington DC");
cntToCapMap.set("KOR", "Seoul");
cntToCapMap.set("UK", "London");
cntToCapMap.set("JPN", "Tokyo");
console.log(cntToCapMap.entries());

let askMe = country => {
	if (cntToCapMap.has(country)) {
		console.log(`The capital of ${country} is ${cntToCapMap.get(country)}`);
	} else {
		console.log("No mapping for the given capital");
	}
}
askMe("UK");	// => "London"

// Set
let noDups = new Set([1, 2, 3, 2, 4, 29, 5, 1, 9]);
console.log(noDups.size);	// => 7

noDups.add(1);	
console.log(noDups.size)	// => 7; duplicate value hasn't been added

for(const v of noDups.values()) {
	console.log(v);			// => 1 2 3 4 29 5 9
}


//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let es6_features = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(`
				Template Literal
				Destructuring
				Shorthand
				Promises
				Spread operators`);
    }, 2000);

    setTimeout(() => {
        reject(new Error("Rejected"));
    }, 3000);
})

let promiseChain = es6_features
					.then(data => console.log(data))
					.catch(e => console.log(e));


//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)


//13. Use the question #11 to build promises using async and await - with multithread
async function ans13() {

	await es6_features
			.then(data => console.log("resolved first\n", data))
			.catch(e => console.log(e));

	await es6_features
			.then(data => console.log("resolved next\n", data))
			.catch(e => console.log(e));
}
ans13();	// => resolved first resolved next


//14. Create an example of generator function of your choice
function* primesLessThanTen() {
	yield 2;
	yield 3;
	yield 5;
	yield 7;
}

let p = [...primesLessThanTen()];
console.log(p);		// [2, 3, 5, 7]


//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications

/*
	1. Statelessness: 
		It means that each request from a client to a server is independent; 
		the server doesn't remember what requests the client has made previously.
		Thus, the client must include all necessary information in each request.

	2. HTTP:
		It is a network protocol that governs communication between a client 
		and a server, where the client makes a request, and the server sends back 
		a response.

	3. REST:
		It is an architectural style, convention, or principle that should be 
		followed when creating RESTful APIs for apps. It uses HTTP methods,
		such as GET, POST, PUT, DELETE, for clients to retrieve, update, or delete data
		stored on the server. 

	4. SPA, or Single Page Application, is a type of web application that initially
		fetches a single HTML page and dynamically updates the content in response 
		to user actions, rather than loading new pages.

	5. Classical applications load a new HTML page from the server each time a client 
		navigates to a different part of the app. 
*/
