//consumer part
const cart=["shoes","pants","kurtas"];

 createOrder(cart)//orderId
//console.log(promise);
.then(function(orderId){
    console.log(orderId);
    return orderId;//return data or promise that can be resolved
    })
    .catch(function(err){
        console.log(err.message);
         })
    .then(function(orderId){
        return proccedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
   console.log(err.message);//through-out the promise chain error handling-faliure,callback-attached failure callback function to it
    })
    .then(function(orderId){
        console.log("No matter what happens,I will be called.")
    }) 

    //Producer part
    function createOrder(cart){
        const pr = new Promise(function(resolve,reject){//JS parameter resolved,reject we cannot do twice
        //createOrder
        //validateCart
        //get orderId
        if(!validateCart(cart)){
            const err =new Error("cart is not Valid");
            reject(err);
        }
        const orderId ="12345" //DBcall.getOrderId(cart)
        if(orderId){
            setTimeout(function(){
            resolve(orderId);//API call
            },5000)
        }
        });
        return pr;
    }

    function proccedToPayment(orderId){
        return  new Promise(function(resolve,reject){
            resolve("Payment Successfull");
        })
    }

    function validateCart(cart){
        // return true;
       return false; //reject  promise
    }