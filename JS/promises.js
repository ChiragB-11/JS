// const car=["shoes","pants","kurtas"];

// //API to order id async
// createOrder(cart,function(orderId){
//     ProcessToPayment(orderId); //inversion control issue 
//     });//passing function to another function 

//     const promise = createOrder(card); // promise is an empty object with some data value in it which createorder returns {data:undefined}
//     //{data:OrderDetails}
//     promise.then(function(orderId){//attaching function to an promise object
//         ProcessToPayment(orderId); //control to program and calls once when oject is fills
//         })


    // const GITHUB_API="https://api.github.com/users/chirag" 
    // const user = fetch(GITHUB_API);    

    // console.log(user);  

    // user.then(function(data){
    //     console.log(data);
    // });


    createOrder(cart,function(orderId){
            ProcessToPayment(orderId),function(paymentId){

                showOrderSummary(paymentId,function(){

                    updateWalletBalance();
                });
            }; //inversion control issue 
            });//passing function to another function 
        
            createOrder(card) // promise is an empty object with some data value in it which createorder returns {data:undefined}
            //{data:OrderDetails}

            //promise chain-return a value
            .then(orderId=>ProcessToPayment(orderId)) 
            .then(paymentInfo=>showOrderSummary(paymentInfo))
            .then(paymentInfo=>updateWalletBalance(paymentInfo))

                .then(function(orderId){//attaching function to an promise object
                return ProcessToPayment(orderId); //control to program and calls once when oject is fills
                })
                .then(function(paymentInfo){
                    return showOrderSummary(paymentInfo);
                })
                .then(function(paymentInfo){
                   return  updateWalletBalance(paymentInfo);
                });




                // const myPromise = new Promise((resolve, reject) => {
                //     // Perform some asynchronous operation
                //     if (/* operation successful */) {
                //         resolve("Success!"); // Call resolve if successful
                //     } else {
                //         reject("Error!"); // Call reject if there's an error
                //     }
                // });
                
                myPromise.then((result) => {
                    console.log("Promise resolved:", result);
                }).catch((error) => {
                    console.error("Promise rejected:", error);
                });
                
                myPromise.then((result) => {
                    return doSomethingElse(result); // Returns another promise
                }).then((anotherResult) => {
                    console.log("Another result:", anotherResult);
                }).catch((error) => {
                    console.error("Promise chain failed:", error);
                });
                          

    Promise.race([promise1, promise2])
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.error("First promise rejected:", error);
    });


    Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });
