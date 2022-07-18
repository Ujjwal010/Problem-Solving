// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise


function myFunction(a, b){
                 for(let i in a){
                    if(i===b && a[b]!==null && a[b]!==undefined){
                        return true;
                    }
                 }
    return false;

}


console.log(myFunction({a:1,b:2,c:3},'b'))              //output:true
console.log(myFunction({x:'a',y:null,z:'c'},'y'))       //output:false
console.log(myFunction({x:'a',b:'b',z:undefined},'z'))  //output:false


//next solution

function fun(a,b){
    return Boolean(a[b]);
}


console.log(fun({x:'a',b:'b',z:undefined},'z'))     //output:false