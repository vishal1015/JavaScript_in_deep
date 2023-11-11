const fbUser= new Object() //singleton object
// const fbUser={} // non singleton object
fbUser.id="01";fbUser.name="vishal";
// console.log(fbUser);
const reguralUser ={
    email:"vishal@ui.xom",
    fullname:{
        userName:{
            firstname:"vishal",
            lastname:"kahrkaya"
        }
    }
}
// console.log(reguralUser.fullname.userName.firstname);

//merger or combine objects 

const obj1 ={1:"a", 2:"b"}
const obj2= {3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}
// const obj3= {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3= Object.assign({}, obj1,obj2,obj4)// fist empty bracket act as the target all combine and come in this if we don't use this then it terat obj 1 as the target not much diff
// const obj3= {...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj3);
///one more synatax we will use when value will come form database in the form of array of obj 
const user=[
    {
        id:1,
        name:"vishal"
    },
    {
        id:2,
        name:"vishal2"
    }
]

console.log(user[1].name);//vishal2
console.log(fbUser);//{ id: '01', name: 'vishal' }
console.log(Object.keys(fbUser));//[ 'id', 'name' ]
console.log(Object.values(fbUser));//[ '01', 'vishal' ]
console.log(Object.entries(fbUser));//[ [ 'id', '01' ], [ 'name', 'vishal' ] ]
console.log(fbUser.hasOwnProperty('id'))// true// telll this property is there or not .. more you can see in console.