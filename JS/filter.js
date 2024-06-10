const arr =[5,2,4,6,7];
//filter odd values
const output=arr.filter(odd);
const output1=arr.filter(even);
// const output2=arr.filter(greater);
// const output2=arr.filter(function greater(x){
//     return  x>=4; //x<=4 lessthan 
//   })

//   const output2=arr.filter((x) => x>=4); //x<=4 lessthan 

  const output2=arr.filter((x)=>{
    return  x>=4; //x<=4 lessthan 
  });
  
function odd(x){
    return x % 2;
}
function even(x){
  return  x%2===0;
}
// function greater(x){
//     return  x>=4; //x<=4 lessthan 
//   }

console.log(output);
console.log(output1);
console.log(output2);