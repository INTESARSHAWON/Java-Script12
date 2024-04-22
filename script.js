console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},2000);
//setTimeout(hello,5000);

// eta timeout function, eta emne likha jay, omneo likha jay
// 5 sec=5000 mili second
// etar kaj 5 second por print hocche

console.log("three");
console.log("four");



//callback function- eta emn ekta function jeta onno function er moddhe argument hishebe pass hoy


function sum(a,b){
    console.log (a+b);
}

function calculator (a,b,sumCallback) {
    sumCallback(a,b);
}

calculator(1,2,sum);

//call back a ami jokhon e function pass korbo, eta (), mane parenthrsis dea jabe na, tahole run korbe na
// sudhu nam likhle run korbe
//calculator(1,2,sum()); jmn eta jodi run korai kaj korbe na
//prothom example a jeta ache sekhaneo set callback function chilo, //setTimeout(hello,5000)- eta chilo
