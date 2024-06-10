// console.log("TEST");
// setTimeout(function(){
//     console.log("Ascychronous");
// },5000)


// const cart=["Shoes","pants","tshirts","kurtas"]; //Pyramid of doom
// api.createOrder(cart,function(){    
//     api.processToPayments(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         })
//         })
// }
// )


const cart=["Shoes","pants","tshirts","kurtas"]; //Pyramid of doom
api.createOrder(cart,function(){    //given control to another function
    api.processToPayments(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
        })
}
)

