// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array


function myFunction(a,b){

    for(let i=0;i<a.length;i++){
        if(a[i]===b){
            a.splice(i,1);
        }
    
    }
    return a
    }
    
  console.log((myFunction([1,2,3], 2)))            //output:[1, 3]
  console.log((myFunction([1,2,'2'], '2')))        //output:[1, 2]
  console.log((myFunction([false,'2',1], false)))  //output:['2', 1]
  console.log((myFunction([1,2,'2',1], 1)))        //output:[2, '2']


//next solution

function fun(a,b){
    const c=a.filter((value)=>value!==b)
    return c;
    }
console.log(fun([1,2,3], 2))

