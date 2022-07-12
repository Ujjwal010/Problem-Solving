// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


function myFunction(arr){

    const obj1={};
    const a=[];
    const b=[];
    
    for(let i in arr){
      if(arr[0][0]===arr[i][0]){
        a.push(arr[i]);
        
      }
      else{
        b.push(arr[i]);
      }
    }
    
    obj1[a[0][0].toLowerCase()]=a;
    obj1[b[0][0].toLowerCase()]=b;
    
    return obj1;
  
  }
  

  console.log(myFunction(['Alf', 'Alice', 'Ben']))       //output:{ a: ['Alf', 'Alice'], b: ['Ben']}
  console.log(myFunction(['Ant', 'Bear', 'Bird']))       //output:{ a: ['Ant'], b: ['Bear', 'Bird']}
  console.log(myFunction(['Berlin', 'Paris', 'Prague'])) //output:{ b: ['Berlin'], p: ['Paris', 'Prague']}
  
  
  //next solution

  function fun(arr) {

    return arr.reduce((acc, cur) => {
      const firstLetter = cur.toLowerCase().charAt(0);
      return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
   }


   console.log(myFunction(['Berlin', 'Paris', 'Prague']))  //output:{ b: ['Berlin'], p: ['Paris', 'Prague']}