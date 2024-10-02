//March - MERNStack Session - Assessment Number 1 - 2nd October 2024
//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

/* See basics.js (not 3-basics.js) */


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
console.log("\n****************** Q2. ******************");

var list = ["Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767];
var s;

for (var i = 0; i < list.length; i++) {
	s = list[i];
	console.log(s, typeof s);
}


//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
console.log("\n****************** Q3. ******************");

function showUserInfo(firstname, lastname, age) {
	console.log(firstname, lastname, age);
	// no return statement => undefined is returned implicitly
}

showUserInfo("Jay", "Kim", 99);


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
console.log("\n****************** Q4. ******************");

function doaddition(a, b, c) { return a + b + c; }

console.log(doaddition(2,3,4))	// => 9, three numbers are added up
console.log(doaddition(2))
// => NaN, no 2nd and 3rd arguments are passed into the function, 
// which means the parameters b and c are set to "undefined"
// When you add something to a number, JS expects a number to be added.
// However, undefined cannot be converted to a number, so JS produces NaN
// (Not a number). Thus, the result of (2 + undefined + undefined) is NaN

console.log(doaddition(2.3, 3))
// => NaN, the 3rd argument is missing, so the parameter c is set to undefined.
// addition of a and b are done successfully, resulting in 5.3(2.3 + 3).
// However, adding the number and undefined results in NaN

console.log(doaddition("first", 2, "three"))
// => "first2three", "first" + 2 = "first2" (2 is converted to string, 
// as a string is expected in the place of 2). 
// "first2" + "three" = "first2three" (string concatenation)


//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

console.log("\n****************** Q5 - closure ******************");
// a. closure
function increaseNum() {
	var init = 0;
	// The inner function has access to the variable "init" outside of it
	return { increase: function() { return ++init; } }
}

var num = increaseNum();		// num = { increase: function() { return init++; } }
console.log(num.increase());	// => 1 : init in the outer function gets modified
console.log(num.increase());	// => 2 : the same happens


console.log("\n****************** Q5 - hoisting ******************");
// b. hoisting

// hoisting() is hoisted to the top of this code before the interpereter runs this code.
// Thus, we can call hoisting() before its definition without any error.
console.log(hoisting());	

function hoisting() {
	return "hoisted";
}

console.log("\n****************** Q5 - constructor function ******************");
// c. constructor function

function myObj(name, age) {
	// this refers to the function object
	this.name = name;
	this.age = age;

	this.f = function() { return { name: this.name, age: this.age } }
}
// we can create our object from the constructor function with the new keyword
var o = new myObj("Jay", 99);
console.log(o);
console.log(o.f());



//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
/*
	All the three functions or methods are used to attach or bind an invocation context to a function. 
	In other word, inside the function, we can refer to the attached invocation context or object through the this keyword. 
	
	One of many reasons why they are used is that we can reuse a function for different objects. For example, suppose we have
	a function to print the details of a student. We can use the function for all student objects as shown below:

	var std1 = { firstname: "Jay", lastname: "Kim" };
	var std2 = { firstname: "Mike", lastname: "Lee" };

	function print() {
		var name = this.firstname + this.lastname;
		console.log("Student's name is " + name); 
	}
	
	print.call(std1);	// => "Student's name is Jay Kim"
	print.call(std2);	// => "Student's name is Mike Lee"

	apply() and bind() both attaches an invocation context into a function. However, apply() calls the function
	immediately after the attachment while bind() doesn't. Instead, it holds the given context until the function is invoked later.
*/


//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

console.log("\n****************** Q7. ******************");

var std = { firstname: "Jay", lastname: "Kim" };

var Student = {
	firstname: "Jay",
	lastname: "Kim",
	phoneNo: "222-222-2222",

	GetStudentDetails: function() {
		setTimeout(function() {
			console.log(`Q7. Output: ${this.firstname}, ${this.lastname}, ${this.phoneNo}`);
		}.bind(Student), 1000);
		// If we didn't bind Student object to setTimeout(), the 'this' would refer to setTimeout()
		// Since setTimeout object doesn't have those properties, undefined would be printed.
	}
}

Student.GetStudentDetails();	// => Jay, Kim, 222-222-2222


//Q8. Create an example of creating object with null prototype
console.log("\n****************** Q8. ******************");

var o = Object.create(null);
console.log(o);


//Q9. How do we merge different objects properties using Object class function
console.log("\n****************** Q9. ******************");

var o2 = { name: "Jay", age: 99 };
var o3 = { name: "Jay", age: 22, f: function() { return "hi"; } };

var o_merged = Object.assign({}, o2, o3);	// the value of o3's age property overrides the value of o2's
console.log(o_merged)						// => { name: 'Jay', age: 22, f: [Function: f] }


//Q10. Create an object literal and export it to another file and import and show that there
var q = { id: 234, firstname: "Jay", lastname: "Kim" };

module.exports = q;	// q will be exported into the file named "assessment1_import.js"
