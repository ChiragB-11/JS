const users=[
    {firstNmae:"Chirag",lastName:"Bam",age:24},
    {firstNmae:"Sai",lastName:"Jack",age:44},
    {firstNmae:"Om",lastName:"Tom",age:29},
    {firstNmae:"Raj",lastName:"Alex",age:44}   
]

// //list of full name
// const output=users.map((x)=> x.firstNmae+" "+x.lastName);
// console.log(output);

//diff age nad same age in array
// const output=users.reduce(function (acc,curr){
//     if(acc[curr.age]){
// acc[curr.age]=++acc[curr.age];
//     }else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{})
// console.log(output);

//filter firstName of all who's age less than 30

// const output=users.filter((x)=> x.age<30).map((x)=>x.firstNmae);
// console.log(output);


// const output=users.reduce(function(acc,curr){
//     if(curr.age<30){
//         acc.push(curr.firstNmae);
//     }
//     return acc;
// },[])
// console.log(output);

// const output=users.reduce((acc,curr)=>{
//     if(curr.age<30){
//         acc.push(curr.firstNmae);
//     }
//     return acc;
// },[])
// console.log(output);

const numbers = [1, 2, 3, 4, 5];

const doubledAndFiltered = numbers
  .map(x => x * 3) // Doubles each number
  .filter(x => x %2===1); // .filter(x => x %2===0);// Filters out numbers not divisible by 4

console.log(doubledAndFiltered); // [4, 8]