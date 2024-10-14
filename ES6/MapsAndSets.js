/*
	Map is the data structure we use to store data in the form of key value pair

	1. A map is strong when our keys are of string type or alphanumeric type
	2. A map is weak when our keys are of numbers, functions, objects, etc

	There are serveral methods, properties attached to map to validate and access the values present against key
*/

let myMap = new Map();

myMap.set("UserName", "Jay");
console.log(myMap.size);
console.log(myMap.entries());

// Creating a weak map
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "String is key for this!!");
myMap.set(keyObj, "Object is key for this!!");
myMap.set(keyFunc, "Function is key for this!!");
myMap.set(keyNum, "Number is key for this!!");

console.log(myMap.size);
console.log(myMap.entries());

console.log(myMap.get(2000));
console.log(myMap.get({}));	
// => undefined : object is referred by reference variable not a value type
// for each object, a separate heap memory is allocated

console.log(myMap.get(keyObj));

myMap.delete(keyNum);
console.log(myMap.entries());

console.log(myMap.has(keyString));			// => true
console.log(myMap.has("Random string"));	// => false

console.log(myMap.keys());		// => list of all keys
console.log(myMap.values());	// => list of all values

myMap.clear();
console.log(myMap);

/*
	Set is the data structure that helps us create unique data without many comparison
*/

let TraineeList = []
TraineeList.push("Jay");
// To avoid duplicate elements, we always need to check before adding - cumbersome :(

let mySet = new Set(["Jay", "Amy", "Mike"]);	// in the form of array []

mySet.add("Mike");
console.log(mySet.entries());

mySet.add("newOne");
console.log(mySet.entries());
console.log(mySet.size);

// Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favorite country

let cityToProvinceMap = new Map();

let cityAndPronvince = {

	"Seoul": "Seoul",
	"Incheon": "Incheon",
	"Suwon": "Gyunggi",
	"Wonju": "Gangwon",
	"Jeju": "Jeju"
}

for (const city of Object.keys(cityAndPronvince)) {
	console.log(city)
	cityToProvinceMap.set(city, cityAndPronvince[city]);
}
console.log(cityToProvinceMap.entries());