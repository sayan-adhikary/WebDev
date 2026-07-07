const prom = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Sayan");
    }, 2000);
})


console.log("Start");

prom.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log("error: ", error);
})

console.log("End");