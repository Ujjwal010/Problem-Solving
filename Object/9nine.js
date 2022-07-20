// Write a function that takes an object (a) as argument
// Return an array with all object keys


function myFunction(a){
    const arr=[];
    for (let x in a){
        arr.push(x);
             
    }

    return arr;
}


console.log(myFunction({a:1,b:2,c:3}))      //output:['a','b','c']
console.log(myFunction({j:9,i:2,x:3,z:4}))  //output:['j','i','x','z']
console.log(myFunction({w:15,x:22,y:13}))   //output:['w','x','y']


//next solution

function fun(a){
    return Object.keys(a)
}


console.log(fun({w:15,x:22,y:13}))   //output:['w','x','y']


