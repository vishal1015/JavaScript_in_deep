const myArr= [1,2,3,4,5,6,7];
// js Array can me  resizable and mixed types ,zero based indexing , copy operation then shallow copy ( same referese point );
// const myHeross= ["ram","krsna"];
// const myArr2= new Array(1,2,3,4,3);
// console.log(myArr[0])

//array methods 

// myArr.push(6);//for adding the value 
// myArr.push(7);
// myArr.pop();// remove last value 
// myArr.unshift(4)// add in starting but time taking  use only for work not good
// myArr.shift()// remove form starting
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(34));
// const newArr= myArr.join();
// console.log(newArr);
// console.log(myArr);

// slice, splice
console.log("A",myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2= myArr.splice(1,3)
console.log("c" ,myArr)
console.log(myn2);
// diff in slice and splice is that fist that splice include the lastrang and by using the slice that part of array extracted means original array changed

