// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


function myFunction(arr){

    return  arr.every((value,index,array)=>arr[0]===value);

}


console.log(myFunction([true, true, true, true]))  //output:true
console.log(myFunction(['test', 'test', 'test']))  //output:true
console.log(myFunction([1,1,1,2]))                 //output:false
console.log(myFunction(['10',10,10,10]))           //output:false


//next solution

function fun( arr ) {

  return new Set(arr).size === 1

}


console.log(fun(['10',10,10,10]))           //output:false