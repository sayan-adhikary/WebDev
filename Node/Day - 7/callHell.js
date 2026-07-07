// Define the three task functions
function doTask1(callback) {
    setTimeout(() => {
        callback("Result from Task 1");
    }, 2000);
}

function doTask2(input, callback) {
    setTimeout(() => {
        callback("Result from Task 2 (received: " + input + ")");
    }, 1000);
}

function doTask3(input, callback) {
    setTimeout(() => {
        callback("Result from Task 3 (received: " + input + ")");
    }, 1000);
}

// Now call the function chain
doTask1(function (result1) {
    console.log(result1);
    doTask2(result1, function (result2) {
        console.log(result2);
        doTask3(result2, function (result3) {
            console.log(result3);
            console.log("All tasks done");
        });
    });
});