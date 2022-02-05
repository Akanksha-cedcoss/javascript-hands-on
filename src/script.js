//this is a single line comment
/* this 
is
a 
multiline
comment
*/

let myGlobal = 10;

function fun1() {
   oopsGlobal = 5;


}
function myLocalScope() {
    // Only change code below this line
  let myVar=5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
const lastLetterOfLastName = lastName[lastName.length - 1];
const thirdLetterOfLastName = lastName[2];
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
console.log(wordBlanks);

const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate", 1],
  ["C", 5],
  ["coffee", 3],
  ["maggi", 14],
];
console.log(myList);

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(3, 5);
function timesFive(a) {
  return a * 5;
}
timesFive(5);
