//this is a single line comment
/* this 
is
a 
multiline
comment
*/

let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";
console.log(myStr);

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
console.log(wordBlanks)