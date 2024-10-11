/*
	Arrow Function - a new way of writing function in ES6,
	which has two important features

	1. Ease of writing - This is a lambda expression and we can write 
	   the whole function within function definition using lambda expression

	   If we have one line of code in a function body, we can omit the curly
	   brackets and return statement.

	2. This solves the problem of scope/context without using bind, by copying
	   the context of 'immediate' parent 
*/

let addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));
console.log("\n");


let af = (name, age) => {
	return {
		name, age
	};
}
console.log(af("Jay", 22));
console.log("\n");

// we had to bind "this" to the inner function
let user = {
	name: "Jay",
	age: 22,
	address: "Somewhere on earth",
	getDetails: function() {
		console.log(`${this.name} ${this.age} ${this.address}`);

		setTimeout(function() {
			console.log(`${this.name} ${this.age} ${this.address}`);
		}.bind(this), 2000);
	}
}

user.getDetails();

let user2 = {
	name: "Jay",
	age: 22,
	address: "Somewhere on earth",
	getDetails: function() {
		console.log(`${this.name} ${this.age} ${this.address}`);

		// Immediate parent's context is copied automatically to the inner arrow function
		setTimeout(() => {
			console.log("inner arrow function")
			console.log(`${this.name} ${this.age} ${this.address}`);
		}, 2000);

		// Or we can use let self = this and use the 'self' in the inner arrow function
		let self = this;
		setTimeout(function() {
			console.log("inner function with self")
			console.log(`${self.name} ${self.age} ${self.address}`);
		}, 2000);
	}
}

user2.getDetails();
console.log("\n");

let user3 = {
	name: "Jay",
	age: 22,
	address: "Somewhere on earth",
	getDetails: () => {
		// this refers to global object
		// It is recommended to avoid using arrow function as parent of all other
		// functions - sets context to global/empty object
		console.log(`${this.name} ${this.age} ${this.address}`);

		setTimeout(() => {
			console.log("inner arrow function")
			console.log(`${this.name} ${this.age} ${this.address}`);
		}, 2000);

		let self = this;
		setTimeout(function() {
			console.log("inner function with self")
			console.log(`${self.name} ${self.age} ${self.address}`);
		}, 2000);
	}
}
user3.getDetails();

