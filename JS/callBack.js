// //what is a callBack Function in Javascript


// setTimeout(function(){
//     console.log("Timer")
// },5000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
// console.log("y");
// })

//** Event Listeners
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked");
// });

//**closures Demo with Event Listeners & Scope */ Elements->click on button ->Event Listeners tab->Scope[2]:global/clouser
function attachedEventListeners(){
let count =0; 
document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button clicked",++count);
});
}
attachedEventListeners();

//**Garbage collection & removeEventListeners