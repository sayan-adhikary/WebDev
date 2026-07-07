async function greet() {
    return "Hello";
}

console.log("Start");

greet().then(function (message) {
    console.log(message); // "Hello"
});

console.log("End");