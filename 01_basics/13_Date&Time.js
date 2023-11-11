//Dates

let myDate= new Date();
// typeof(myDate)//obj
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// Date declaration

let MyCreatDate= new Date(2023, 0, 24, 5,3);
// let MyCreatDate= new Date("2023-01-14"); yy ,MM,DD
// let MyCreatDate= new Date("01-14-2020"); MM,DD,YY
// console.log(MyCreatDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp); //give long msecond number
// for comparison purpose we use 
// console.log(MyCreatDate.getTime()); //convert in milli second
// console.log(Math.floor(Date.now()/1000)); //convert it in second 

let newDate= new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1)
console.log(`${newDate.getDay()} and the time is `)

newDate.toLocaleString(`default`,{
    weekday:"long",
    
})