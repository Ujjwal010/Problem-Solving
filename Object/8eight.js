// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object


function myFunction(a,b){
        const obj={};
        for(let i=0;i<a.length;i++ ){
             obj[a[i]]=b[i];  
        }
        
    return obj;
}


console.log(myFunction(['a','b','c'],[1,2,3]))         //output:{a:1,b:2,c:3}
console.log(myFunction(['w','x','y','z'],[10,9,5,2]))  //output:{w:10,x:9,y:5,z:2}
console.log(myFunction([1,'b'],['a',2]))               //output:{1:'a',b:2}


//next solution

function fun(a,b){
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}


console.log(fun([1,'b'],['a',2]))               //output:{1:'a',b:2}


