// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise


function myFunction(a,b){
    for(let i in a){
        if(i===b){
            return true;
        }
         
    }
    return false;
    
}


console.log(myFunction({a:1,b:2,c:3},'b'))       //output:true
console.log(myFunction({x:'a',y:'b',z:'c'},'a')) //output:false
console.log(myFunction({x:'a',y:'b',z:'c'},'z')) //output:true


//next solution

function fun(a,b){

    return b in a;

}


console.log(fun({x:'a',y:'b',z:'c'},'z')) //output:true

