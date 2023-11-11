// Datatype coversion is a very confusing topic in javascript ;

let score="33";
console.log(typeof score);// why type becose we dont't know what value is comming form fronted 
console.log(typeof (score));//

// but if we have to  opertion on number so what we do ;
let valueInNumber = Number(score)// now score will convert in number 
console.log(typeof valueInNumber);// will return number  but if we do "33 "to "33abc " still it will give number  wahat is value let's check
console.log(valueInNumber);//give NaN not a number so it is also happen in js  these are some problems of js so people use typescript but sitll is good;
// check by righting score  value ,  number , undefinde , null, string 

// "33" => 33
//"33abc" => NaN but type number hi hai
// true => 1; false =0;

let isLoggedIn = "yes";
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=> true, 0=> false
//""=> false, "ys"=> true ;


// so conversion are many types can be  string to int int to string etc .. so explore it 




