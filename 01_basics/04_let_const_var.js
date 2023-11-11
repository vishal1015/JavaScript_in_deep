console.log("vihsal");
const accounId = 1343392; // value can't change 
let accountEmail= "vishal@gmail.com"; 
var accountpassword = "1244";// use to declare the var and let but var  does't reconige the scope so let has come 
accounCity ="lucknow";  //this is not good we can use without let const 
// accounId= 2;  not allowed  const can't we changed
console.log(accounId);
accountEmail="dj@gmail.com";
accountpassword="322";
accounCity="pune";
let myname;
console.table([accounId,accountEmail,accounCity,myname]); // is a easy way to print in a table write all variable 
/*
prefer not to use Var becaues is issu in block scope and funtional scope
if we declare the vlaue but not give the value then js understand it undefined
*/