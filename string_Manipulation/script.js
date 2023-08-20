// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.




// function manipusteString(string) {
//   return string.toUpperCase();
// }

// const manipuste_String = manipusteString("Hello , world!");
// console.log("The manipulated string is:", manipuste_String);

debugger
function manipulateString(inputstring,callback){

    const manipulated_string = inputstring.toUpperCase()
    callback(manipulated_string)
}
function logString(manipulated_string){
    console.log(`Manipulated string is ${manipulated_string}`);
}
manipulateString("Hello , World",logString)