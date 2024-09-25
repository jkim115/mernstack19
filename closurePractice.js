
function outer(name, age, dob, ssn) {
	// we want to keep name, pwd, and dob private
	var name = name;
	var pwd = pwd;
	var dob = dob;
	var ssn = ssn;

	// This inner function has access to all the variables above it
	// and when it is called back, it will give us the information kept as private
	return function(ssn_given) {
		if (ssn_given == ssn) {
			return {
				name,
				pwd,
				dob
			};
		} else {
			console.log("Incorrect SSN");
		}
	}
}

// Initially, we create a user with some info
var user1 = outer("Jay", 99, "2222-2-2", 123);

// Only when the user's ssn is correct, it will give us the user's info
console.log(user1(123));	// correct SSN - should print the user1's info
console.log(user1(456));	// wrong SSN - should print "Incorrect SSN"
