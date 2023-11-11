 // object delcarion is two types literal and construction and when we use literal then singleton nhi banta hai consructor se banta hai 
 //singleton -- koi v consturction aap bante hai to aak taype ka object banta ahi 

 //object literals
//  Object.create() ye construer ke jesa --
const mysym= Symbol("key1");

 const jsUser= {
  name:"vishal",
 "full Name":"vishalkharkya",
  [mysym]:"mykey1",// if we don't use []then result will be same but data type will be string it will treat as a string and then interview reject if you don't know the correct syntax;
  age:14,
  email: "vishal@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["monday","saturday"]

 }
 //can acces by key and value;

//  console.log(jsUser.email)// but this is not very good 
//  console.log(jsUser["email"]) //why this is imp see next line
// //  console.log(jsUser."full Name");// now gap then 
// //  console.log(jsUser["full Name"]);
// //  console.log( typeof jsUser[mysym]);
// jsUser.email= "vishal@google.com";// like this you can change value
// Object.freeze(jsUser)// after freezing no value will be change in  the obj
// jsUser.email= "vishal@TCS.com";
//  console.log(jsUser);

// adding function in the object 

 jsUser.greeting = function(){
    console.log("hello js user");
 }

 jsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`);
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 console.log(jsUser);