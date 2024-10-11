//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

let {FirstName, TotalMarks, LastName = "Kim", Subject: {Physics, Chemistry, Language, Ecology = 95} } = Student;
console.log(`
	First name: ${FirstName}
	Last name: ${LastName}
	Total marks: ${TotalMarks}
	Physics: ${Physics}
	Chemistry: ${Chemistry}
	Language: ${Language}
	Ecology: ${Ecology}
	`);


// 1. create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let arr = [2024, 25, 26, "a", true, {"a": 1, "b": 2}];
let [e1, e2, e3, ...restElements] = arr;
console.log(`${e1} ${e2} ${e3}, rest of elements: ${restElements}\n`)


// 2. create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(a = 0, b = 0, c = 0) {
    return a * b * c; 
}
console.log(multiply());
console.log("\n");


// 3. create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let arr2 = [1, 2, 3, 4, 5];
arr2["newVal"] = 6;

for (let elem of arr2) {
    console.log(elem);
}

for (let index in arr2) {
    console.log(`index: ${index}, value: ${arr2[index]}`);
}

// 4. create an example of const where we can update on property of the object, where it says const is mutable
const obj = { "a": 1, "b": 2 };

/*
    The reference "obj" holds the address of the object on the heap.
    Since it's declared and initialized as const, we cannot change that address.
    But the object itself is not an const object that we can change.
*/
obj.a = 2;
console.log(obj);   // => a=2, b=2

let obj2 = {}
// obj = obj2;  //=> TypeError: we cannot change the address of const reference, so that it refers to another object


// 5. create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

for (var i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000);
}


for (let i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000);
}


