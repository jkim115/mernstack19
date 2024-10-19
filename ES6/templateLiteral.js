//exercise : write details about yourself using template literal and 
// use variable and objects to show the value

let name = 'Jay';
let sessions = {session1: "MERNStack", session2: "Spring", session3: "PLSQL"}
let tl = `
		*****************************************
		*  List of Sessions ${name} is taking	*
		*  	1. ${sessions.session1}			*
		*	2. ${sessions.session2}			*
		*	3. ${sessions.session3}			*
		*****************************************`;
console.log(tl);