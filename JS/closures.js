// function x(){
//     var a=23;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();


function x(){
    var a=23
    //return fuction y(){}
    var b=
    function y(){
        console.log(a);
    }
    //  y();
    return b;// it return closure : function & laxical scope return  
    
}

var z=x();
console.log(z);
z();


// function x(){
//     //var a=23
//     var b=7;
    
//     //  y();
//     // console.log(b);
// }
// x(function y(){
//     console.log(a);
// });

// function x(){
//     var a=23;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z=x();
// console.log(z);

