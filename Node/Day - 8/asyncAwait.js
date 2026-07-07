async function greet() {
    return "Hello";
}

async function main() {
    console.log("Start");

    const message = await greet();
    console.log(message); // "Hello"

    console.log("End");
}

main();