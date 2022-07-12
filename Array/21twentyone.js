// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array


function myFunction(a,n){
    c=[];
    let incr=n-1
     for(let i in a){
     if(i==incr){
  
      c.push(a[i]);
      incr+=n;
     }
     }
     return c;
  
  }
  

  console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3))   //output:[3,6,9]
  console.log(myFunction([10,9,8,7,6,5,4,3,2,1],5))   //output:[6,1]
  console.log(myFunction([7,2,1,6,3,4,5,8,9,10],2))   //output:[2,6,4,8,10]
  

  //next solution

  function fun(a, n) {
    let rest = [...a];
    let result = [];
    for (let i = 0; i < a.length; i++) {
       if (rest.length < n) break;
       result.push(rest[n - 1]);
       rest = rest.slice(n);
    }
    return result;
  }

  
  console.log(fun([7,2,1,6,3,4,5,8,9,10],2))  //output:[2,6,4,8,10]