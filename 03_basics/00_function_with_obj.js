//  when you don't know how many parameter has come 
function caluculateCartPrice(... num){   //rest opearator and spred operator looks same but differ on the use case  here is rest operator
    return  num;
}
// console.log(caluculateCartPrice(200,33,43,222))
const user= {
    username:"vishal",
    prices:222
}

function handleObj(anyObject){
    console.log(`user name is ${anyObject.username} anf price is ${anyObject.price}`)
}
// handleObj(user);
// no nee to pass like that you can direclty use 
handleObj({
    username:"vishalaa",
    prices:222
})