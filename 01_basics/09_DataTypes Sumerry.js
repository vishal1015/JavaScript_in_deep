// Data type 
// differenve how  data can be access and and kept in the memory on this basis it is two type
// 1. Primitive  2. Non Primitive(or refrece type)
// 1. #primitive;
    // Types: String , Number , Boolean, null, undefined, symbol(uniqness), BigInt(for big vlaue )/
// 2. nonprimitive( referece type)
    // Type: Obects, Function, Array

// JavaScript is dynmiclly type language =>: JavaScript is a dynamically typed
//  language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the 
// program as we assign different values to them.


// const score=100;
//  const scoreVale =100.3;
//  const isLoggedIN = false ;
//  const outsideTemp = null;
//  let Usermail;//undefiend

//  how to declared symbole 
const id= Symbol('134');
const anotherId  = Symbol('134');
console.log(id=== anotherId);//=> false create uniqness not reaturn true even it look like true

// const bigNumber = 34243284799291919n by using n in last become bigInt


// Array, Objects, Functions;

const heros = [ "ram", "shayam", "radhe"];

const myobj= {
   name:"vishal",
   age: 14,
   pass:"yes"

};
const mufunction = function(){
    console.log( typeof "e");
}

//  typeof data asked in interview 