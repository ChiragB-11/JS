//***jargons***
//**function statement is also known as function declaration

// a();
// b();//Uncaught TypeError: b is not a function

// function a(){
//     console.log("a called");
// }
// // a();

// //**function Expression
// var b = function(){// we can assign function to a variable as value
// console.log("b called");
// }
// b();

//***Anonymous Function
// function (){
//     //Uncaught SyntaxError: Function statements require a function name
// }

//****Named Function Expression

// function a(){
//     console.log("a called");
// }
// var b =  function cb() {// we can assign function to a variable as value
// console.log("b called");//console.log(xyz); to access a function
// }
// a();
// b();
// xyz();//Uncaught ReferenceError: xyz is not defined because 'xyz ' is created as variable not as function in outer/global scope

//*****Difference between Parameters & Arguments?

function a(){
    console.log("a called");
}
var b =  function cb(param1,param2) {//''param are label or identifiers local variable in a function we cannot access outside function
console.log("b called");//console.log(xyz); to access a function
console.log(param1,param2);//access arguments values
}
a();
b(1,3);// '1''3' are arguments

//**First class Functions[Abilities to use fuctions as values & passed as arguments to another function can be return to a function or assign to  a variable]
//**First class citizens
var b =  function cb(param1,param2) {//let ,const same rules applied //''param are label or identifiers local variable in a function we cannot access outside function
    console.log("b called");//console.log(xyz); to access a function
    console.log(param1,param2);//access arguments values
    }

//Arrow Functions:part of ES-6[let,const]

