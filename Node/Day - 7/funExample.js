function waitTwoSeconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Done waiting");
        }, 2000);
    });
}
console.log("Start");
waitTwoSeconds()
    .then(function (message) {
        console.log(message); // "Done waiting"
    })
    .catch(function (error) {
        console.log("Something went wrong");
    });
console.log("End");