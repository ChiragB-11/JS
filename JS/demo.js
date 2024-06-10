// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     //  var a=10; let a=10; it will still create a closure it doesn't depends on sequence of code
//     return inner;//return a;
// }
// //outer()();
// // //var close=outer();
// // console.log(close);
// var close=outer();
// close();

// function outer(b){
//     var a=10;
//     function inner(){
//         console.log(a,b);
//     }
//     return inner;
// }

// var close=outer("test");
// close();

// function outest(){
// var c=20;
// function outer(b){
//     function inner(){
//         console.log(a,b,c);
//     }
//     let a=10;
//     return inner;
// }
// return outer;
// }
// //let a=100; it will print when there is no  value in inner function if not defined in any function it will throw error of notdefined
// var close=outest()("test");
// close();

// function counter(){
// var count=0;
//  function incrementounter(){
//     count++;
//     console.log(count);
    
// }
// return incrementounter;
// }
// var inc =  counter();
// inc();
// inc();

// var ins=counter();//fresh completely new counter
// ins();
// ins();

// function counter(){
    
//      function incrementounter(){
//        for(count=1;count<=5;count++)
//         console.log(count);
        
//     }
//     return incrementounter;
//     }
//     var inc =  counter();
//     inc();

//     var inr=  counter();
//     inr();
    

function Counter(){
    var count=0;
     this.incrementCounter=function incrementounter(){ //'this is constuctor function which will create new  counter when ever it is called
      count++;
        console.log(count);
    }
    this.decrementCounter=function incrementounter(){
        count--;
          console.log(count);
    }
    }
    
    var counter1=new Counter();//'new' keyword is used for constuctor
    counter1.incrementCounter();
    counter1.incrementCounter();
    counter1.decrementCounter();

     console.log(counter1);
    
    
    
