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
  let myVar = 5;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

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
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate", 1],
  ["C", 5],
  ["coffee", 3],
  ["maggi", 14],
];

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
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// 57
function nextInLine(arr, item) {
  arr.push(item);
  let i = arr.shift();
  return i;
}

const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//58
function welcomeToBooleans() {
  return true;
}
//59
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
//60
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
//61
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}
//63
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}
//64
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
//65
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
//66
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));
//67
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));
//68
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));
//69
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(10));
//70
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(15));
//71
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(4));
