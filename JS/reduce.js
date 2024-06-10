const arr=[6,4,3,2,9];
//sum or max

// function Sum(arr){
//    let sum=0;
//  for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//  }  
// return sum;
// }
// console.log(Sum(arr));

// function Max(arr){
//    let maxx=0;
//  for(let i=0;i<arr.length;i++){
//   if(arr[i]>maxx){
//     maxx=arr[i];
//   }
//  }  
// return maxx;
// }
//  console.log(Max(arr));


// const output =arr.reduce(function(acc,curr){ //accumulator-iteration /current-values
// acc=acc+curr;
// return acc;
// },0);
// console.log(output);

const output =arr.reduce(function(max,curr){ //accumulator-iteration-max /current-values
if(curr>max){
    max=curr;
}
return max;
},0);
console.log(output);
