// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array


function myFunction(arr){
    //(arr[1].b)
    const a=[];
    if (arr[0].b<arr[1].b){
        for(let i=0;i<arr.length;i++){
             a.push(arr[i]);
        }
    }
    else{
        for(let i=arr.length-1;i>=0;i--){
            a.push(arr[i]);
        }
    }
    return a;

}


console.log(myFunction([{a:1,b:2},{a:5,b:4}]))   //output:[{a:1,b:2},{a:5,b:4}]
console.log(myFunction([{a:2,b:10},{a:5,b:4}]))  //output:[{a:5,b:4},{a:2,b:10}]
console.log(myFunction([{a:1,b:7},{a:2,b:1}]))   //output:[{a:2,b:1},{a:1,b:7}]


//next solution

function fun(arr){

    const sort = (x,y)=>x.b-y.b;
    return arr.sort(sort);

}


console.log(myFunction([{a:1,b:7},{a:2,b:1}]))   //output:[{a:2,b:1},{a:1,b:7}]
