//write afunction that takes an array of string as argument
//Return the longest string


function myFunction(arr){

    let len=arr[0];
    for(let i=0;i<arr.length;i++){
        if(len.length<arr[i].length){
            len=arr[i];
        }
        
    }

    return len;

}


console.log(myFunction(['help', 'me']))          //output:"help"
console.log(myFunction(['I', 'need', 'candy']))  //output:"candy"


//next solution

function fun(arr){

    return arr.reduce((a,b)=>a.length<=b.length?b:a);

}


console.log(fun(['I', 'need', 'candy']))  //output:"candy"