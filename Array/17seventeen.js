// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum


function myFunction(a,b){

   let sum=0;
   a.forEach(element => {element>b?sum=sum+element:sum=sum+0;});
  return sum;

}


function myFunction(a, b) {

    return a.reduce((sum, cur) => {
      if (cur > b) return sum + cur;
      return sum;
    },0);

  }


console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2))     //output:25
console.log(myFunction([-10, -11, -3, 1, -4], -3))    //output:1
console.log(myFunction([78, 99, 100, 101, 401], 99))  //output:602
