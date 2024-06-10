//consumer part
const cart=["shoes","pants","kurtas"];

const promise = createOrder(cart);//orderId
//console.log(promise);
promise.then(function(orderId){
    console.log(orderId);
    })
    .catch(function(err){
   console.log(err.message);//error handling-faliure call back-attached failure callback function to it
    })

    //Producer part
    function createOrder(cart){
        const pr = new Promise(function(resolve,reject){//JS parameter resolved,reject
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

    function validateCart(cart){
        //return true;
        return false; //reject  promise
    }