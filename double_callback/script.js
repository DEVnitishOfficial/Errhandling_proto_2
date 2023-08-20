// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

debugger
function doubleCallback(arr, callback){
      const doubledArr = arr.map( num => callback(num))
      return doubledArr
}

function callback(num){
    return num * 2;
}

const result = doubleCallback( [1,2,3,4,5],callback)
console.log(result);