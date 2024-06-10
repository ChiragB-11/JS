//binding methods
// let multiply=function(x,y){
//     console.log(x*y);
// }


// let multiplyBytwo =multiply.bind(this,2);
// multiplyBytwo(7);


// let multiplyBytwo =multiply.bind(this,2,3)
// multiplyBytwo(7);//ignored

// let multiplyBythree =multiply.bind(this,9);
// multiplyBythree(3);


//function closure

// let multiply1=function(x){
// return function(y){
//     console.log(x*y);
// }
// }

// let multiplyBytwo =multiply1(2)
// multiplyBytwo(7);

// let multiplyBythree =multiply1(9);
// multiplyBythree(3);



// Basic currying example
function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  // Usage
  const multiplyByTwo = multiply(2);
  console.log(multiplyByTwo(3)); // Output: 6
  
  // Another way to call it
  console.log(multiply(4)(5)); // Output: 20
  