/*
	FUNCTION

	A function is a block of code which gives behavior we expect to do some job.
	
	In JS functions don't necessarily need to be directly associated with class object,
	meaning it can work independently.
	
	Functions are pure functions. A pure function will always return something.
	If a user doesn't return anything from the function JS runtime will attach 
	a default (undefined) value to it. <can be demonstrated on the browser console>
*/

// keyword function - function name (parameters)
function name(params) {
	// definition of the function
	// scope of the function
}

// 1. Named function
function Print() {
	console.log("Jimmy")
	// returns 'undefined' on the browser console
}
Print()	// calling a function or function invocation

// 2. Function Expression
var myFunc = function (a,b) {	// unnamed function
	return a * b
}
console.log(myFunc(5, 6));

// 3. IIFE - Immediately Invocable Function Expression

(function iife(name, age) {
	console.log("Name is registered as", name, age);
})("Anthony", 25) // one time use

// iife() - iife is not defined / iife function is out of scope

// 4. Constructor function - have properties with them and those can be
// initialized via constructor and be further used as classes

function User(name, age, address) {
	this.name = name,
	this.age = age,
	this.address = address;

	this.getUserDetails = function () {
		console.log("User Information Entered is -", this.name, this.age, this.address)
	}
	// return new User()
}

var userObj = new User("Ben", 20, "Somewhere on earth");

userObj.session = "MERNStack";	// adding new property (this is with the help of prototype)

// overriding the existing definition
userObj.getUserDetails = function () {
	console.log("User Information Entered is -", this.name, this.age, this.address, this.session)
}

console.log(userObj.getUserDetails());

// 5. Nested functions

var val = 15
function A(a) {
	console.log("1st")
	return function B(b) {
		console.log("2nd")
		return function C(c) {
			console.log("3rd")
			return function D(d) {
				console.log("4th")
				return a + b + c + d + val
			}
		}
	}
}

// var objA = A(5);
// var objB = B(5);
// var objC = C(5);
// var objD = D(5);
// console.log(objD);

// chain execution of nested functions

var result = A(5)(5)(5)(5)
console.log(result);

//We have a different type of functions that we can use to behave like class and this kind of function definition
//is termed as --> constructor function
//protype : in js is a object associated to each function and object, which provides us inheritance, by chaining parent child

var funcAsClass = function(name, age, address){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name : this.name,
            age : this.age,
            session : this.session
        }
    }
}

funcAsClass.prototype.session = "Javsacript Basics!!!";

var funcObj = new funcAsClass("Bryan", 20, "US")
console.log(funcObj.getUserDetails(true))


//new class
var objOfFuncConstructor = new funcAsClass("Arda", 19.6, "Somewhere on earth")

console.log(objOfFuncConstructor.address);
console.log(objOfFuncConstructor.getUserDetails())

//using protoype we can add properties in child class or object
//objOfFuncConstructor.__proto__.hobbies
objOfFuncConstructor.hobbies = "Reading, Playing Soccer";

objOfFuncConstructor.getHobbies = function (params) {
    console.log("Hobbies are "+ this.hobbies)
}

objOfFuncConstructor.getHobbies()

//console.log(funcObj.getHobbies())

//able to override the method
objOfFuncConstructor.getUserDetails = function () {
    return {
        name : this.name,
        age : this.age,
        session : this.session,
        hobbies : this.hobbies
    }   
}

console.log(objOfFuncConstructor.getUserDetails())
console.log(funcObj.getUserDetails())
//console.log(funcObj.hobbies) //undefined

//create a constructor function to print user details add one information using prototype