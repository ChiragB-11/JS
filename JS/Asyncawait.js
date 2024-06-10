// const p=new Promise((resolve,reject)=>{
// resolve("Promise resolved value");
// })

// //always return a Promise if we return a value it will wrap it into promise
// async function getData(){
//     //return "chirag"; 
//     return p;
// }

// const dataPromise=getData();
// // console.log(dataPromise);
// p.then(res=>console.log(res));
// dataPromise.then(res=>console.log(res));

//Befor Async-await
// const p=new Promise((resolve,reject)=>{
// resolve("Promise resolved value");
// })

// function getData(){
//     p.then((res)=>console.log(res));
// }
// getData();

// //with Async-await
// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
//     })
//  async function handlePromise(){
//     const val= await p;
//     console.log(val);
//  }   
//  handlePromise();
 

// //Promise takes sometime
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("Promise resolved value");
// },20000);
//     });

//     const p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve("Promise resolved value");
//     },40000);
//         });
//  async function handlePromise(){
//     console.log("DEMO");
//     // JS Engine waiting for promise to resolve 
//     const val= await p1;
//     console.log("test");
//     console.log(val);

//     const val2= await p2;
//     console.log("test free  now");
//     console.log(val2);
//  }   
//  handlePromise();

// // function getData(){
// //     //JS Engine will not wait for Promise to be resolved
// //     p.then((res)=>console.log(res));
// //     console.log("TEST");
// // }
// // getData();
 
// const API_URL ="https://api.github.com/users/chirag";
// const API_URL ="https://kjgh";


// async function handlePromise(){
//     try{
//     const data = await fetch(API_URL)  //fetch gives you promise and return resposes -responses object resp body is readable stream
// const jsonValue = await data.json()
// console.log(jsonValue);
//     }
//     catch(err){
// console.log(err);
//     }
// //fetch().then(res=>res.json()).then(res=>console.log(res))

//     //fetch()=>response.json()=jsonValue ".json" is again a promise
// }
// handlePromise();

const API_URL ="https://kjgh";
async function handlePromise(){
    const data = await fetch(API_URL)  //fetch gives you promise and return resposes -responses object resp body is readable stream
const jsonValue = await data.json()
console.log(jsonValue);

//fetch().then(res=>res.json()).then(res=>console.log(res))

    //fetch()=>response.json()=jsonValue ".json" is again a promise
}
handlePromise().catch((err)=>console.log(err));
