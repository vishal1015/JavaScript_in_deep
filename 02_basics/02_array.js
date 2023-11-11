let demigod=['indra','agni','vayu'];
let demon= ['ravan' , 'hiranyakashipu', 'saktasur'];

// demigod.push(demon);// add array inside array
//  let newarr= demigod.concat(demon)
let newarr =[...demon,...demigod] ///spred operater means spred all things toot jana 
// console.log(newarr); // concate in the same array and reaturn same array;
// console.log(demon)
// const anewarr=[1,2,4,5,[3,4,5,3],[3,3,[4,3,[2,[3,2,2]]]]]// see if like arrya inside array
// const real_arr= anewarr.flat(Infinity)// flat tells how much depth you can go and show in the array so this i used to show 
// console.log(real_arr);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("vishal"))//from convert the array value in the array
console.log(Array.from({name:"vishal"}))// interstign . you have to tell what value array we should make  this will give empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); // for making the array of values 
