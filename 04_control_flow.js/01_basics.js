/// control flow ..
//  how if else work
// how switch case  works

//  what are the false value
// falsy values

false, 0,-0, BigInt, 0n, ", undefined", NaN
// other then that all will be true;

// truthy values
"0",'false', "",[], {},function(){}
let Array= [];
// how to check array 
if( Array.length === 0)console.log(" Array is empty");
// how to check object 
const emptyObj= {};
if (Object.keys(emptyObj).length===0)console.log("obj is empty ")



// Nullish Coalescing Operator (??):null undefine 
let val1;
// val1= 5??10  =>5 // if null value aayi hai to check karta hai taki kuch gadbad na ho 
// val1=null ?? 10=>10
// val1= undefined ?? 15 //=>15
val1= null ?? 30 ?? 20 //=>  jo v pahli value mil jaygi usi ko execute karega 
console.log(val1);


// Teniary Operator ( small roop of if else )

// condition ? true :false 
const icePrice = 100
icePrice >=60 ? console.log( " greter to 60"):console.log("less then 60")