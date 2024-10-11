// JavaScript => ES6 (2015) => ES.NEXT

/*
	In ES6, we have two new variables:
	let - like var but doesn't support hoisting and has some more features
	const - for const delcaration

	var => re-declaration is allowed
	let => re-declaration is not allowed
	const => must be initialized and re-declaration is not allowed

 */

/*
	scope
	var => functional scope
	let, const => lexical (block) scope
*/

{
	var var1 = "var_var";
	let var2 = "let_var";
	const var3 = "const_var";

	console.log(var2);
	console.log(var3);
}

console.log(var1);

/*
	Hoisting does not happen for let and const
*/
// console.log(var2);	// => Cannot access 'var2' before initialization
// console.log(var3);	// => Cannot access 'var2' before initialization

let var2 = "let_var"
const var3 = "const_var"


/* const variable that's a reference to an object */

const user = {}
user.name = "Micheal"
console.log(user);

/*
	Evaluation of let and const are done before passing them to function,
	unlike var which is evaluated at the time of function execution
*/

var index = 1;	// function scope and evaluated at the time of execution
for (index = 1; index < 5; index++) {

	// for loop is running on the stack while setTimeout stays in event queue
	// by the time, the function is executed, index value has been incremented
	setTimeout(function () {
		console.log(index);	// 5 5 5 5
	}, 3000);
}
console.log(index);	// => 5

// solution to that problem
var i = 1;
for (i = 1; i < 5; i++) {
	// setTimeout(function () {
	// 	console.log(i);	// 1 2 3 4
	// }.bind(i), 3000);

	(function() {
		setTimeout(function (params) {
			console.log(params)
		}, 2000)
	})(j)	// j is evaluated immediately
}


// let is referenced by value
let j = 1;
for (let j = 1; j < 5; j++) {
	setTimeout(function () {
		console.log(j);	// 1 2 3 4
	}, 3000);
}

