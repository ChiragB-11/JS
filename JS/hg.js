// function higherorder(){
//     callback();
// }
// function callback(){
//     console.log("test");
// }
// higherorder();

// function higherorder(call){
//     callback();
// }
// function callback(){
//     console.log("test");
// }
// higherorder(callback);

function higherorder(){
return function(){
    console.log("kkb");
}
}
const test = higherorder();
test();

