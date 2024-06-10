// //const p1=fetch("data/app")-p1 can be API call
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("P1 Success"),3000);
//         })

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("P2 Success"),1000);
//     // setTimeout(() => reject("P2 fails"),1000);
//         })

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(() => resolve("P3 Success"),2000);
//     setTimeout(() => reject("P3 fails"),2000);
//         })        

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// })
// .catch((err)=>{ 
//     console.error(err); //Uncaught (in promise) P2 fails-never relay on this we must catch error
// });

const p1 =new Promise((resolve,reject)=>{
    // setTimeout(() => resolve("P1 Success"),3000);
    setTimeout(() => reject("P1 Success"),3000);
        })

const p2 =new Promise((resolve,reject)=>{
    // setTimeout(() => resolve("P2 Success"),5000);
    setTimeout(() => reject("P2 fails"),1000);
        })

const p3 =new Promise((resolve,reject)=>{
    // setTimeout(() => resolve("P3 Success"),2000);
    setTimeout(() => reject("P3 fails"),2000);
        })        

// Promise.allSettled([p1,p2,p3]).then(res=>{//safest
//     console.log(res);
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// })

Promise.any([p1,p2,p3]).then(res=>{//safest
    console.log(res);
})

.catch((err)=>{ 
    console.error(err); //Uncaught (in promise) P2 fails-never relay on this we must catch error
    console.log(err.errors); // console.log(err.errors[0]);
});