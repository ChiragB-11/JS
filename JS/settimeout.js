// function x(){
//     var i=1;
//      setTimeout(function(){
//         console.log(i)
//      },3000)
//      console.log("TEST");
// }
// x();

// function x(){
//      for (var i=1;i<=5;i++){
//      setTimeout(function(){
//         console.log(i)
//      },i*1000);
//     }
//      console.log("TEST");
// }
// x();


// function x(){
//     for (let i=1;i<=5;i++){ //Let has block scope it create new cope of 'i' with diff memory location
//     setTimeout(function(){
//        console.log(i)
//     },i*1000);
//    }
//     console.log("TEST");
// }
// x();


// function x(){
//     for (var i=1;i<=5;i++){
//         function close(i){
//     setTimeout(function(){
//        console.log(i)
//     },i*1000);
//    }
//    close(i);
// }
//     console.log("TEST");
// }
// x();
// new Date();
// new Date().getTime();

// console.log("start");
// setTimeout(function cb() {
//     console.log("Time-out");
// },5000);//0

// console.log("END");

// let startDate =new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
// endDate =new Date().getTime();
// }
// console.log("LOOP");



console.log("start");
function cb() {
    console.log("Time-out");
}
setTimeout(cb,0);

console.log("END");
