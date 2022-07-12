// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array


function myFunction(arr, num){
    if(num>=6){
      arr.splice(0,0,num);
    }
    else{
      arr.splice(0,0,0);
    }
 return arr;
 }
 

 console.log(myFunction([1,2,3], 6))        //output:[6,1,2,3]
 console.log(myFunction(['a','b'], 2))      //output:[0,'a','b']
 console.log(myFunction([null,false], 11))  //output:[11,null,false]
 
 //next solution

 function fun(arr, num) {
   return [...(num > 5 ? [num] : [0]), ...arr];
  }

  console.log(fun([null,false], 11))    //output:[11,null,false]