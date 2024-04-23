// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },2000);
// //setTimeout(hello,5000);

// // eta timeout function, eta emne likha jay, omneo likha jay
// // 5 sec=5000 mili second
// // etar kaj 5 second por print hocche

// console.log("three");
// console.log("four");



// //callback function- eta emn ekta function jeta onno function er moddhe argument hishebe pass hoy


// function sum(a,b){
//     console.log (a+b);
// }

// function calculator (a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

// //call back a ami jokhon e function pass korbo, eta (), mane parenthrsis dea jabe na, tahole run korbe na
// // sudhu nam likhle run korbe
// //calculator(1,2,sum()); jmn eta jodi run korai kaj korbe na
// //prothom example a jeta ache sekhaneo set callback function chilo, //setTimeout(hello,5000)- eta chilo



// //eta hocche callback hell
// // ekhane nested kaj hoy, ekta loop a rekta, ekta function a arekta evabe

// function getData (dataId, getNextData) {
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// getData (1,() =>{
//     console.log("getting data2");
//     getData (2, ()=>{
//         console.log("getting data3");
//         getData(3, ()=>{
//             console.log("getting data4");
//             getData(4,()=>{

//             });
//         });
//     });
// });



// callback hell theke bachar jonne promises niye kaj kori amra
// promise hocche JS er ekta object.., er kaj callback hell avoid kore valo kichu kora
// promise er state 3 ta..., segula hocche pending, fullfill (resolved), reject.
// pending baki thake, fullfull success type kaj kore, reject a error ashe


let pendingPromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
    console.log ("i am a pending promise");
});
// console a pendingPromise likhe check korle dekha jabe [[PromiseState]]-> "pending", karon kono kaj e hoy nai




let resolvePromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
    console.log ("i am a resolve promise");
    resolve("any messege, any value", 123);
});
// console a resolvePromise likhe check korle dekha jabe [[PromiseState]]-> "fulfilled", resolve a kaj hoise tai



let rejectPromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
    console.log ("i am a reject promise");
    reject("any error");
});
// console a rejectPromise likhe check korle dekha jabe [[PromiseState]]-> "rejected", eta error o dekhabe



// resolve er kaj
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            console.log("data", dataId);
            resolve("success");
            if (getNextData){
                getNextData();
            }
        },5000);
    });  
}



// reject er kaj
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            console.log("data", dataId);
            reject("error");
            if (getNextData){
                getNextData();
            }
        },5000);
    });  
}
// eigula console a run koraite hoy
