// OOPs
// Polymorphism - Overloading (over-writing) and Overriding (by inheriting in constructor function we can override)
// Inheritance - Is possible, prototype - an object that links the child object to base function) : __proto__
// Abstractions - Abstract function/class are not present but function can do abstract implementation
// Encapsulation - Encapsulate common functions that can be reused somewhere else
// Abstractions/Encapsulation - key idea is that users don't necessarily need to know
// the implementation of the functions they use. All they need to know is just how to
// Also, we limit the access of properties and fields via 'access modifiers.' We don't
// have any keywords for this but we can manipulate the function to restrict the acess
// of function variables via 'closures'

/*
	CLOSURES - A paradigm when a function contains another function and has some fields
	kept as private, some as public by returning them through child function.

	Function returning another function is closure example.
*/

function Accounts(name, age, balance, type) {
	// Private scope 
	var acctName = name;
	var acctAge = age;
	var acctBalance = balance;
	var acctType = type;
	var password = "xyz";
	var acctPin = "9482";
	// Private scope

	// Whatever you return from the function below will be public
	var accountDetails = function (name, pwd) {
		if (pwd == password) {
			return {
				acctName,
				acctAge,
				acctBalance,
				acctType
			}
		} else {
			return "Password is incorrect";
		}
	}

	// the entities returned via function
	return accountDetails;
}

var acctObj = Accounts("Mark", 21, "$20000", "Credit");

console.log(acctObj("Mark", "xyz"));
console.log(acctObj("Mark", "unmatch"));