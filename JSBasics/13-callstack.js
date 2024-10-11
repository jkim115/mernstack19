/*
	Stack - LIFO, data structure

	Call Stack - the executing thread allocated some memory to run the interpreter,
	and works in LIFO fashion. This also has the access to heap ( for larger chunck of data like objects)
	Less memory, easily available and gives performance 

*/


// function foo() { throw new Error("foo"); }
// function bar() { foo(); }
// function baz() { bar(); }
// baz();

function overflow() { overflow(); }
overflow(); // RangeError: Maximum call stack size exceeded