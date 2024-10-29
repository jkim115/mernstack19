/*
    Promise - an object that represent the future result of the asynchronous computation
*/

let student_info = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            name: "Jay",
            sessions: ["MERNStack", "Java", "DevOps", "Spring"]
        })
    }, 2000)

    setTimeout(() => {
        reject(new Error("Retrieving student data failed."))
    }, 3000)
})

let promiseChain = student_info.then(data => { console.log(data) }).catch(e => { console.log(e) });

