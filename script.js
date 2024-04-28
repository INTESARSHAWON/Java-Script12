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


// let pendingPromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
//     console.log ("i am a pending promise");
// });
// // console a pendingPromise likhe check korle dekha jabe [[PromiseState]]-> "pending", karon kono kaj e hoy nai




// let resolvePromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
//     console.log ("i am a resolve promise");
//     resolve("any messege, any value", 123);
// });
// // console a resolvePromise likhe check korle dekha jabe [[PromiseState]]-> "fulfilled", resolve a kaj hoise tai



// let rejectPromise = new Promise ((resolve, reject) => {    // new Promise er P boro haat a declare kora
//     console.log ("i am a reject promise");
//     reject("any error");
// });
// // console a rejectPromise likhe check korle dekha jabe [[PromiseState]]-> "rejected", eta error o dekhabe



// // resolve er kaj
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData){
//                 getNextData();
//             }
//         },5000);
//     });  
// }



// // reject er kaj
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//             console.log("data", dataId);
//             reject("error");
//             if (getNextData){
//                 getNextData();
//             }
//         },5000);
//     });  
// }
// // eigula console a run koraite hoy




// //promise resolve er khetre
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success print");
//     });
// };

// let promise = getPromise();
// promise.then((result)=>{
//     console.log("promise fullfilled", result);
// });




// //promise reject er khetre
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.catch((error)=>{
//     console.log("big error", error);
// });




// nicher eivabe asynchonised function a kaj kore
// eigulate 4 second por eksathe print hoy, jar karone amra jevabe chai seta hoy na
// amra chai 4 er por ekta output, er 4 sec por arekta output

// function asycn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout (()=>{
//             console.log("data 1");
//             resolve("success");
//         },4000);
//     });    
// };


// function asycn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout (()=>{
//             console.log("data 2");
//             resolve("success");
//         },4000);
//     });    
// };

// console.log("fetching data 1");
// let p1 = asycn1();
// p1.then((result)=>{
//     console.log("success 1",result);
// });


// console.log("fetching data 2");
// let p2 = asycn2();
// p2.then((result)=>{
//     console.log("success 2",result);
// });




// // amra chai 4 ec por ekta output, er 4 sec por arekta output
// // jeta nicher way te possible
// // ekta then er moddhe arekta dhukay dite hoy
// // ei process ke bole PROMISE CHAIN 

// function asycn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout (()=>{
//             console.log("data 1");
//             resolve("success");
//         },4000);
//     });    
// };


// function asycn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout (()=>{
//             console.log("data 2");
//             resolve("success");
//         },4000);
//     });    
// };

// console.log("fetching data 1");
// let p1 = asycn1();
// p1.then((result)=>{
//     console.log("success 1",result);
//     console.log("fetching data 2");
//     let p2 = asycn2();
//     p2.then((result)=>{
//         console.log("success 2",result);
//     });
// });
// // uporer portion ar nicher koek line same kaj kore, functon(). then dea jay chailei, niche otar example

// // console.log("fetching data 1");
// // asycn1() .then((result)=>{
// //     console.log("fetching data 2");
// //     asycn2().then((result)=>{
// //     });
// // });




// callback hell, upore ache ei code, niche eta ke promise chain diye korbo
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


// // uporer code ta promise chain diye korlam niche
// function getData (dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data", dataId);  
//             resolve ("success");      
//         }, 2000);
//     });
// };

// getData(1)
//     .then((result) => {
//         return getData(2);
//     })
//     .then((result)=>{
//         return getData(3);
//     })
//     .then((result)=>{
//         return getData(4);
//     })
//     .then((result)=>{
//         return getData(5);
//     })
//     .then((result)=>{
//         console.log(result);
//     })
    



// // async function- eta sobceye  better, bojha easy...,eta sobar age promise return kore as fullfill
// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 1000);
//     });
// };

// async function getWeatherData() {    
//     await api ();
//     await api ();
// };




// ei prpoblem ta upore promise chain use ore korsi, eta ekhn async function use kore korbo 
function getData (dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("data", dataId);  
                resolve ("success");      
            }, 1000);
        });
    };

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
};
// // console a giye async function ke call korle eta kaj kore...,mane ekhane getAllData() ke call dite hobe 
// // getAllData ke na dekeo kj sara jay, shei process ke bole IIFE 
