"use strict";
//this is gloabal space
console.log(this); //globalObject in browser-window in NODEJS-global

//this is inside a function
function x(){
    //the value depends on strict and non-strict mode
console.log(this)
}
//x();

//this in non-stict mode-(this subsitution phenomenon)
//If the value of this keyword is undefined or null this will be replace with globalObject
//ONLY in non-strict mode

//this keyword value dependes on how this is called(window)
// x();
// window.x();

//this inside a object's method

// const obj={
//     a:10,
//     x:function(){ //x is method of object obj 
//         console.log(this);//this ref to obj
//         console.log(this.a); //10
//     }
// }
// obj.x();

// //call apply bind method (sharing method)
// const student={
//     name:"chirag",
//     printName:function(){ //x is method of object obj 
//         console.log(this);//this ref to obj
//         console.log(this.name); //
//     },
// };
// student.printName();

// const student2={
//     name : "raj"
// }
// //student2.printName();//we cannot use is not a function
// student.printName.call(student2); //reuse of method in student for student2


// //this inside arrow function

// const obj={
//     a:10,
//     x:()=>{
//         console.log(this);
//     }
// }
// obj.x();
// //this inside nested arrow function
// const obj2={
//     a:10,
//     x:function(){
//         const y=()=>{
//         console.log(this);
//     }
//     y();
// },
// };
// obj2.x();

//this inside DOM elements=>refence to HTMLelement [object HTMLButtonElement]
//<button id="clickMe" onclick="alert(this)"> Click Me</button>


//this in class and constructor


  const person = new Person('Alice');
  function Person(name) {
    this.name = name;
  }
  console.log(person.name); // Outputs: "Alice"
  
// function greet() {
//     return `Hello, ${this.name}!`;
//   }
//   const obj1 = { name: 'Bob' };
//   const obj2 = { name: 'Alice' };
//   console.log(greet.call(obj1)); // Outputs: "Hello, Bob!"
//   console.log(greet.apply(obj2)); // Outputs: "Hello, Alice!"
//   const boundGreet = greet.bind(obj1);
//   console.log(boundGreet()); // Outputs: "Hello, Bob!"

let name={
    firstname:"chirag",
    lastname:"BAM",
    // printFullName:function (){
    // console.log(this.firstname+ " "+this.lastname);
// }
}
// let printFullName =function (){
//     console.log(this.firstname+ " "+this.lastname);
// }
let printFullName =function (hometown){
    console.log(this.firstname+ " "+this.lastname+" "+hometown);
}
// name.printFullName();
// printFullName.call(name);
printFullName.call(name,"jack");
printFullName.call(name,["jack"]);


let name2={
    firstname:"test",
    lastname:"demo", 
}
// name.printFullName.call(name2);
// printFullName.call(name2);
printFullName.call(name2,"jack");
printFullName.apply(name2,["jack"]);
let test =printFullName.bind(name2,"jack");
console.log(test);
test();

