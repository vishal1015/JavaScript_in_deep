// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// above are easy  comaparison problem comes when we comapre other datatypes differnt type of datatypes

// console.log("2">1);
// console.log("02">1);
// these are confusing make sure befor comapre convert in same data types and 
// TypeScript do not allow to comapare differnt datatypes
// typescript give some rule if we do not do in js then not need to typescript


// console.log(null >0); => false 
// console.log(null == 0); => false 
// console.log(null >=0); => true
// the reason is that an equality check == and comparision >< = work differntly
// Comparisons covert null to Number,terat it 0 that's why null>=0 is true  and null>0 false ;

// comparison and equality are differnt things in js 
// === strick check  check value and datatype without conversion.


// That's why avoid these type of comparison