const arr=[2,4,5,5,6];
const output=arr.map(double)
const output1=arr.map(triple)
// const output2=arr.map(binary)
const output2=arr.map(function binary(x){ //higher order functions
    return  x.toString(2);
});
const output3=arr.map((x)=>x.toString(2));
const output4=arr.map((x)=>{ //arrpw functions
    return  x.toString(2);
}); 

function double(x){
    return x*2;  //transformation logic
}
function triple(x){
    return x*3;
}
// function binary(x){
//     return  x.toString(2);
// }
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);