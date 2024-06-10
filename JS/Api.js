// console.log("start");
// setTimeout(function cb(){
// console.log("callBack");
// },5000);
// console.log("end");

// console.log("Start");
// document.getElementById("clickMe").addEventListener("click",function cb(){
// console.log("Event");
// });
// console.log("End");

console.log("Start");
setTimeout(function cbT(){
    console.log("Cb setTimeout");
},5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
});
console.log("End");