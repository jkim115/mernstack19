
var Person = {
	name : "Jay",
	age : 99,
	state: "NJ",
	getInfo : function() {
		return `
			${this.name}
			${this.age}
			${this.state}
			`
	}
}

// employee inherits Person class
var employee = Object.create(Person)

employee.salary = "$100k"
console.log(employee.getInfo());	// should not include salary

// function overriding
employee.getInfo = function() {
	return`
		${this.name}
		${this.age}
		${this.state}
		${this.salary}
		`
}

console.log(employee.getInfo());	// should include salary

var employeeAddress = { name: "Jay", address: "Somewhere on earth"}
var employeePhoneNum = { name: "Jay", phoneNum: "222-222-2222"}

var employeeInfo;

employeeInfo = Object.assign(employee, employeeAddress, employeePhoneNum)

console.log(employeeInfo)

// export employee and employeeInfo
// import will be done in object_module.js
module.exports = { employeeInfo, employee }