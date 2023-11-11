//nestend scope 
function one(){
    const username= "vishal"
    function two(){
        const  website= "youtiube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// +++++++++++++++intesring ++++++++//
function addone(num){
    return num+1;
}
addone(5)// if i  call befor function it will run

// console.log(addtwo(5));
const addtwo= function(num){  /// called expression
    return num+2
}
console.log(addtwo(5));