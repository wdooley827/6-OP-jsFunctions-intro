//1 - Takes a number, returns that number + 7

function add7(a){
    return a+7;
}

console.log(add7(2));


function multiply(a,b){
    return a*b;
}

//2 - Takes two numbers and multiplies, returns sum.

console.log(multiply(3,4));

//3 - Take a string and capitalize each word. Multiple methods.

//method 1

example1 = "First we split, then we MAP, then we slice, and finally we join.";

function capitalize(str){
    words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
 }

console.log(capitalize(example1));

//method 2

example2 = "another METHOD of doing the same function";

let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
let capitalizeWords = (str) => str.split(" ").map
(capitalizeString).join(" ")

console.log(capitalizeWords(example2));

//method 3

example3 = "yet ANOTHER method for the problem"

let caps = function(sentence){

    let str = sentence.split(" ");
    for(let i=0; i<str.length;i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
     }
    return str.join(" ")
}

console.log(caps(example3));

//4 - Take a string and return the very last letter of that string

function lastLetter(text){
    return text.charAt(text.length-1);
}

console.log(lastLetter("Pizza"));
