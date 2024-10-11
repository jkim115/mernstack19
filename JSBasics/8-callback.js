/*
	Callback - is a function which is passed as parameter in another function
	and will be executed to give desired results upon being called.

	The callback function keeps holding the scope of the variables or references
	used in the function
*/

// function PrintUserDetails(obj) {
// 	console.log("PrintUserDetails")
// 	console.log("Print: ", obj)
// }

// var obj = {
// 	name: 'Jay',
// 	age: 25
// }

// // callBackFunc - the reusable function to do common implementation

// function GetAccountDetails(data) {
// 	console.log("GetAccountDetails")
// 	console.log(data)
// 	PrintUserDetails(data)
// }

// GetAccountDetails(obj)


function printFunc(obj) {
	console.log("Content: ", obj);
}

function printAccntDetails(anyPrintFunc, obj) {
	anyPrintFunc(obj);
}

var obj = {
	name: 'Jay',
	balance: 2000.0
}

printAccntDetails(printFunc, obj);