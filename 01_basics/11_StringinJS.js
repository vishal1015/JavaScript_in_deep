const name = "vishal";
const roll= 62;
// console.log(name+roll+"value");// this is the older way of concatation

// mordern way is string interpolation
// console.log(`hello my name is ${name}and my roll is ${roll}`); // this is batter and new way in backed we use this 
 
const newName= new String( "vishal");// this will be a object write in console and see magic 
// console.log(typeof name);// string 
// console.log(typeof newName); //object of all char{key,value} lenght property and other method we get 

// there are many prototypes you can use that were in console

// console.log(newName[0]) //=> v
// console.log(newName.__proto__) // => {} will print prototypes but looks empty but now really many things in it 
// console.log(newName.length);// 5  we can directly use all prototypes not need to wirte proto .
// console.log(newName.toUpperCase()) //=>VISHAL 
// console.log(newName.charAt(2)) //=>s
//   console.log(newName.indexOf('s')); // =>

// so like many funciton that much we know is good but not need to go always mdn see in console and then search on mdn 
//  const newString= newName.substring(0,3);
//  console.log(newString);//==> vis ( last 3 index will not include)
const anotherString = newName.slice(-5,4  ) // in slice we can give negative value then it wil count to reverse 
console.log(anotherString); //=> ish  will count from end // but if substring we will use negative it will take is as 0 will ignore 
// -ve means from end .

// const newStringOne=" vishal  ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove space

const url= "https://vishal.com/vishal%20kharkya"
console.log(url.replace('%20', '-'))// will change %20 to "-"
console.log(url.includes('vishal')) // wil tell is vishal is in url or not 

//suppose we have to change a string in array on the basis of some value 
const myString = "hey how are you , i am ok and happy";
console.log(myString.split(' '));

// go to mdn and serch all  methods of array and learn !! imp;