// function myfun(){
//     console.log("h");
//     console.log('i');
// }
// myfun(); //=> myfun-- referece, () execution.

function add(num1, num2){// parameter
  console.log(num1+num2);
} 
add(3,4)// arguments

function myname(usename="vishal"){ // if  want avoid empty data give defualt value 
    if (usename=== undefined ){  ///if (!usename){
        return  'plese enter user name'
    }
    return `${usename} is  myname`
}

console.log(myname())// undefined is  my name 
console.log(myname("vishal"))// vishal is my name 
