/* For-in and For-of loop */

let arr = [1, 3, 7];

arr.newOne = "newOne";

for (const i in arr) {	// i is index
	console.log(`${i} ${arr[i]}`);
}

console.log("\n")

let arrOfObjects = [{"a": 1}, {"b": 2}, {"c": 3}];

arrOfObjects.newOne = "newOne";

for (const i in arrOfObjects) {	// i is index
	console.log(`${i} ${arrOfObjects[i]}`);
}

console.log("\n")

let o = {"a": 1, "b": 2, "c": 3};

for (const i in o) {	// i is property name
	console.log(`${i} ${o[i]}`);
}

console.log("\n");

let arrOfStrings = ["a", "b", "c", "d"];

arrOfStrings.newOne = "newOne";	// explicit key is not identified by for-of Loop

for(const i of arrOfStrings) {	// i is an element, not an index
	console.log(`${i} ${arrOfStrings[i]}`);	// => i = a, b, c, d
}

console.log("\n");

let arrOfObjects2 = [{"a": 1}, {"b": 2}, {"c": 3}];

for(const i of arrOfObjects2) {	// i is an object, not an index
	console.log(`${i} ${arrOfStrings[i]}`);
}

// for-of loop iterates over an array using its elements
// for-in loop iterates over an array using its indexes, or properties
