// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array


function myFunction(a){

    return a.filter((value)=>value<0).length;
  
  }
  
  
  console.log(myFunction([1,-2,2,-4]))  //output:2
  console.log(myFunction([0,9,1]))       //output:0
  console.log(myFunction([4,-3,2,1,0]))  //output:1
  
  
  //next solution
  
  function fun(a){
    const b=[];
    for(let i in a){
        if(a[i]<0){
            b.push(a[i]);
        }
    }
    return b.length;
  }
  
  console.log(fun([4,-3,2,1,0]))  //output:1