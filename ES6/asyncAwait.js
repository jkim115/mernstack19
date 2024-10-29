/*
	async / await
*/

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time

async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before second await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After second await - thread executes one by one")
}

asyncCall()

console.log("async Execution Ends");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

let userPromise = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve({name: "Jay", address: "Somewhere in NY", account_number: 82848})
	}, 3000)

	// setTimeout(() => {
	// 	reject(new Error("rejected"))
	// }, 2000)
})

async function printUser() {
	userPromise.then(user => {console.log(user)}).catch(e => console.log(e))
}
printUser();