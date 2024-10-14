/*
	Class 
		- has been added in ES6 as a special and upgraded function to give us features
		  similar to other class based programming langauge
*/

class Area {

	constructor(length, breadth) {
		this.length = length;
		this.breadth = breadth;
	}

	AreaOfCircle = function (radius) {
		
		let func = () => { console.log(this)}
		func()

		return 3.141*radius*radius	// pie * r^2
	}

	Square = () => this.length * this.length;

	Rectangle = () => this.length * this.breadth;
}
/*

let's say we have inner function inside the function defiend in class
and we want to use the keyword this inside the inner function, what does it refer to?
does this refer to global obejct like it does in other function constructors?

*/

let areaObj = new Area(6, 9);	// create the instance of the class
console.log(areaObj.AreaOfCircle(3));
console.log(areaObj.Square());
console.log(areaObj.Rectangle());

// Task - create a class named as account accepting 3 params name, acct type etc and
// has three methods to show balance, user details and account offers

class Account {

	constructor(name, type, balance = 0, cashBonus = 0) {
		this.name = name,
		this.type = type,
		this.balance = balance,
		this.cashBonus = cashBonus
	}

	showBalance = () => this.balance;
	showAccountDetail = () => { return { name: this.name, type: this.type, balance: this.balance, cashBonus: this.cashBonus }; }
	showAccountOffer = () => this.cashBonus;

	// I added a few more methods to work with
	deposit = (amount) => { this.balance += amount; }
	addCashBonus = (amount) => { this.cashBonus += amount; }
}

let myAcct = new Account('Jay', 'Saving');

console.log(myAcct.showAccountDetail());	// => balance, cashBonus = 0
myAcct.deposit(2000);
myAcct.addCashBonus(20);
console.log(myAcct.showAccountOffer());		// => cashBonus = 20
console.log(myAcct.showAccountDetail());
