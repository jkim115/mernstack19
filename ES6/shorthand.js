/*
	Shorthand - removes redundant variables by using the variables 
	as key-value pairs (property and value) of an object
*/

let lion = "roar", birds = "chirp", cats = "moo", dogs = "bark";

let animalSound = {
	lion: lion,
	birds: birds,
	cats: cats,
	dogs: dogs
}
// redundant!
console.log(animalSound)

let animalSoundES6 = {
	lion,
	birds,
	cats,
	dogs
}
console.log(animalSoundES6)

/*
	Convert an object to String
		1. Comma , (only for printing using console.log)
		2. toString() method inherited from Object.prototype
		3. JSON.stringify() - JSON string
 */
console.log("animalSound object = " + animalSoundES6);

// 1. Comma
console.log("animalSound object = ", animalSoundES6);

// 2. toString() - "[object Object]"
console.log("animalSound is " + animalSoundES6.toString());

// 3. JSON.stringify()
console.log("animalSound object = " + JSON.stringify(animalSoundES6));