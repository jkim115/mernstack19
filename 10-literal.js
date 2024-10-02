/*
	Literal
	Alphanumeric name for any value we use to declare or define our fields 
	or properties
*/

// User1
var name = "Bryan"
var age = 99
var address = "Somewhere on earth"

// User2
var name2 = "Gauri"
var age2 = 98
var address2 = "somewhere in US"

// Object literal
var User = {
	name : "Michael",
	age : 18,
	address : "Eastern America"
}

var User2 = {
	name : "Mark",
	age: 18,
	address : "Eastern America"
}

// console.log(User)
// console.log(User2)

// Using object literal reduces the number of declarations 6 vs 2
// We can also easily modify the properties with less variables
User.name = "Jay"
User2.name = "Ben"

// console.log(User)
// console.log(User2)

// Using object to create a behavior like java classes

var User3 = {
	name : "Sierra",
	age : 19,
	address: "NYC America",
	getUserDetails : function () {
		return `
			${this.name}
			${this.age}
			${this.address}
		`
	}
}

// console.log(User3.getUserDetails())

// to make fields/objects accessible in another files we do module.exports
// module.exports = User3

// multiple exports
module.exports = {
	User,
	User2,
	User3
}