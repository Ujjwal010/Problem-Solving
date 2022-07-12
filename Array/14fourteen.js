// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


function myFunction(...array){

    let a=[];
    for(let i in array){
        a=a.concat(array[i]);
    }
    return a;

}


console.log(myFunction([true, true], [1, 2], ['a', 'b']))  //output:[1, 2, 3, 4, 5, 6]
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))        //output:['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ['a', 'b']))  //output:[true, true, 1, 2, 'a', 'b']


//next solution

function fun(...array){

    const a=[];
    array.forEach((value)=>a.push(...value));
    return a;

}


console.log(fun([true, true], [1, 2], ['a', 'b']))  //output:[true, true, 1, 2, 'a', 'b']


//next solution
function myfun(...array){

    return array.flat();

    }

console.log(myfun([true, true], [1, 2], ['a', 'b']))  //output:[true, true, 1, 2, 'a', 'b']