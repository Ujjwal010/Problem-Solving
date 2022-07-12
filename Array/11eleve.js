// Write a function that takes an array of numbers as argument
// It should return the average of the numbers


function myFunction(arr){

    return arr.reduce((total,value,index,array)=>total+=value)/arr.length;
   
}


console.log(myFunction([10,100,40]))      //output:50
console.log(myFunction([10,100,1000]))    //output:370
console.log(myFunction([-50,0,50,200]))   //output:50