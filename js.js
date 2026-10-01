// const fs = require('fs');

// fs.readFile('data.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error reading file:",err);
//         return;
//     }
//     console.log("File content:");
//     console.log(data);


// let promise=new Promise(())
// function GetData(dataId){
//     return new Promise((resilve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("successful");
//         },8000);
//     });
// }

// let r=GetData(123);
const GetPromise=()=>{
    return new Promise((resolve,reject)=>{
         console.log("i m promise");
        //  reject("network error")
        resolve("sucessful");
    });
};

let promise=GetPromise();
promise.then(()=>{
    console.log("promise is fullfilled");
});

promise.catch(()=>{
    console.log("network is not working properly")
})