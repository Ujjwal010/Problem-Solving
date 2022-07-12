
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array


function myFunction(a,b){

    const c=new Set([...a,...b]);
    const arr=Array.from(c).sort((a,b)=>a-b)
    return arr;
 
 }
 
 
 console.log(myFunction([1, 2, 3], [3, 4, 5]))                      //output:[ 1, 2, 3, 4, 5 ]
 console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))  //output:[ -11, -10, 5, 22, 41,  42, 333]
 
 
 //next solution
 
 function fun(a, b) {
 
   return [...new Set([...a, ...b])].sort((x, y) => x - y);
 
 }
 
 
 console.log(fun([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))  //output:[ -11, -10, 5, 22, 41,  42, 333]