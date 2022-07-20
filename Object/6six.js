// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object


function myFunction(a){
    const obj={};
    obj.key=a;
        return obj;
}


console.log(myFunction('a'))  //output:{key:'a'}
console.log(myFunction('z'))  //output:{key:'z'}
console.log(myFunction('b'))  //output:{key:'b'}


//next solution

function fun(a){
    return{key:a};
}


console.log(fun('b'))  //output:{key:'b'}