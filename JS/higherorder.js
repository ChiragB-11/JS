// const radius=[3,1,2,4];

// const calculateArea = function(radius){
// var output=0;
// for(let i=0;i<radius.length;i++){
//  output= (Math.PI * radius[i]*radius[i]);
//  console.log(output);
// }
// }
// calculateArea(radius);

// const radius=[3,1,2,4];
// const calculateArea = function(radius){
// const output=[];
// for(let i=0;i<radius.length;i++){
//  output.push(Math.PI * radius[i]*radius[i]);
// }
// return output;
// }
// console.log(calculateArea(radius));

//   const calculateCircumference = function (radius){

//     const output=[];
//     for(let i=0;i<radius.length;i++){
//      output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
//     }
//     console.log(calculateCircumference(radius));

//     const calculateDiameter = function (radius){

//         const output=[];
//         for(let i=0;i<radius.length;i++){
//          output.push(2 * radius[i]);
//         }
//         return output;
//         }
//         console.log(calculateDiameter(radius));

const radius=[3,1,2,4];
const area =function(radius){
return Math.PI * radius * radius;
}
//call back functions
const calculateCircumference =function(radius){
    return 2 * Math.PI * radius;
}
const calculateDiameter = function(radius){
        return 2*radius;
    }
// const calculate = function (radius,logic){//higher order function
// Array.prototype.calculate = function (radius,logic){   
// const output=[];
//      for(let i=0;i<radius.length;i++){
//     output.push(logic(radius[i]));
//    }
//    return output;
//    }    


Array.prototype.calculate = function (logic){   
    const output=[];
         for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
       }
       return output;
       }    

// console.log(radius.map(area));
// console.log(radius.map(calculateCircumference));
// console.log(radius.map(calculateDiameter));
// console.log(calculate(radius,area));
// console.log(calculate(radius,calculateCircumference));
// console.log(calculate(radius,calculateDiameter));
// console.log(radius.calculate(radius,area));
// console.log(radius.calculate(radius,calculateCircumference));
// console.log(radius.calculate(radius,calculateDiameter));

console.log(radius.calculate(area));
console.log(radius.calculate(calculateCircumference));
console.log(radius.calculate(calculateDiameter));
   
   