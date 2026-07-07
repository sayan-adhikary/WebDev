const fun1 = ()=>{
    console.log("Sayan");
}

const callBackFunction = (afterCallBack) => {
    console.log("Good Morning");
    afterCallBack();
}

callBackFunction(fun1);