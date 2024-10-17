/*
	Due to increase in the workload at frontend or at backend while
	consuming data like array of objects or object of objects, the operations
	using normal for loops becomes very slow and it also doesn't allow us to
	do any manipulation in the existing data array.

	Solution: Iterators are added to ES6 for different purposes and give us
	optimized solutions.

*/

// an array of objects like a list of products
let personList = [
	{id: 1, name: "John", savedby: "CaptainAmerica"},
	{id: 2, name: "Alice", savedby: "IronMan"},
	{id: 3, name: "Roger", savedby: "CaptainAmerica"},
	{id: 4, name: "Adam", savedby: "IronMan"},
	{id: 5, name: "Alex", savedby: "SpiderMan"},
	{id: 6, name: "Robin", savedby: "BatMan"}
];

/*
	Filter is used to iterate over the array that shouldn't be modified
*/

// 1. List the people saved by CA
let personSavedByCA = personList.filter((person)=>person.savedby == "CaptainAmerica")
console.log(personSavedByCA);
console.log(personList);	// => preserves the immutability

// 2. List the name of the person saved by IM
let personSavedByIM
	= personList.map((person)=>person.savedby == "IronMan" ? person.name: "")
	.filter((name)=>name!="");
console.log(personSavedByIM);

// 3. Append Lucky before the name of each person saved
let luckyPerson = personList.map((person)=>"Lucky" + person.name);
console.log(luckyPerson);

let luckyPersonList = personList.map((person)=>{
	return {id: person.id, 
			name: "Lucky" + person.name, 
			savedby: person.savedby}
});
console.log(luckyPersonList);

// Short circuit - if we have condition present than true else false
let isSavedByHulk = personList.some((person)=>person.saved=='Hulk');
console.log(isSavedByHulk);	// => false

let isSavedByIronMan = personList.some((person)=>person.savedby == 'IronMan');
console.log(isSavedByIronMan)	// => true

// 4. Get the count of each person saved by every super hero of Marvel
let eachSavedPersonCount = personList.reduce((prevObj, currObj, index, list)=>{
	prevObj[currObj.savedby] = prevObj[currObj.savedby] ? prevObj[currObj.savedby] + 1 : 1
	return prevObj;

},
new Set())

console.log(eachSavedPersonCount);


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
let personJS = persons.filter((p) => p.tags == 'javascript');
console.log(personJS);

//2. List the same on person using java and put programmer after their name, change the name key to Developer
let personJava = persons
	.filter((p) => p.tags == "java")
	.map((p) => { return { id: p.id, developer: p.name += " programmer", tags: p.tags } });
console.log(personJava)

//3. If we have anyone with tag python
let isTagWithPythonPresent = persons.some((p) => p.tags == 'python');
console.log(isTagWithPythonPresent);

//4. Find the number of unique tags and their count present in list
let count = persons
	.reduce((map, p) => {
		// if current tags is not present in map, we create it with the value 1
		// otherwise, we increment its value by 1
		map[p.tags] == undefined ? map[p.tags] = 1 : map[p.tags] += 1;
		return map;
	}, new Map());

console.log(count);