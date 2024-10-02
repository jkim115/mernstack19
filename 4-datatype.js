/*
	Data Types are the types of data we can store in the language
	Primitive Type - stored as value directly on the stack
		- boolean
		- number
		- null
		- undefined
		- string
	Non Primitive Type - stored as reference on the heap
		- Ojbect {}
	
	ES6 - symbol type

	https://github.com/MishraAshish/mernstack19
*/

var newVar = 1000.10
console.log(typeof(newVar))

newVar = "1000"
console.log(typeof(newVar))

newVar = true
console.log(typeof(newVar))

newVar = {}
newVar.name = "Jay"
newVar.age = 19
console.log(typeof(newVar))

newVar = null
console.log(newVar)
console.log(typeof(newVar))	// null is valid value; its type is "object"

/*
	undefined - default "value" as well as valid type;
	initially assigned to any variable declared but not assigned
*/
console.log(typeof(unknownVar))
var unknownVar

// console.log(x)	// not defined anywhere within the scope - error

newVar = Symbol("this is symbol")
console.log(newVar)
console.log(typeof newVar)