const user ={
    username:"vishal",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome!`)// here i know this is refering to current  context ;
        console.log(this)// print currnent context
    }
}
console.log(this)  //==> will give { } becuase we are in node enviourment and here this refereing a empty obj
// but  if we write in the console . then it will give window >why because initally only js can run on browser but now js engine is working many places nodejs, deno etc
// so this in browser consel give window
// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

function myfun(){
    console.log(this); // many things we get when we use inside a function in node enviorment 
}
myfun(); //=>  will give alots things


const myfun = () =>{
    console.log(this);  //=={}
}

// ()=>//basic
// const addTwo () =>// add name
// const addTwo=(num1, num2)=>{// take parameter
//  return num1+num2;
// }
// console.log(addTwo(2,3));

// that was basic 
// now implicit return 

// implicit return // means mai man leta hu aak yahi return hoga
 const addTwo = (num1,num2)=> num1+num2  // can use (num1+num2)
 console.log(addTwo(4,5));
