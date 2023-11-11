// immediatly invoked function expression (IIFE)//
// why need  we want jese hi application start ho trurant cahl jaye 
//  second we don't want polution form global scope 

(function fun(){ // named IIFE
    console.log("DB - connected");
})();  // semicolon is necessor becuause IIFE invoked to ho gya but don't know where to stop context so we have to end this by making semicol if we are using more then one IIFE  

( (name)=>{  // unname IIFE 
console.log(`Hi i'm ${name}`)
}
)('vishal');
// to stope globle execution propblem 
// ()()-> fist bracket function and then second bracket is telling to execute  
