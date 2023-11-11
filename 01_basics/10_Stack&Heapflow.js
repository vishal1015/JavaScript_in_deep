///+++++++++++++++ Stack and Heap memory ++++++++


// primitive( Stack)copy of the value ;
// non-primitive( Heap )referece of the original value;

let  myfriend= "vishal";
let myfriend2 = myfriend;
myfriend2= "Ravi";
console.log(myfriend2)// => ravi
console.log(myfriend) //=>vishal

// becaue of the copy of concept 

let obj1= {
    name:"vishal",
    work:"student"
}
let obj2= obj1;

console.log(obj1.name); // =>vishal
console.log(obj2.name); //=>vishal

obj1.name="krsna";
console.log(obj1.name); // =>krsna
console.log(obj2.name); //=>krsna
