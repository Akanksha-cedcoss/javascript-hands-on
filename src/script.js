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
//72
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(7));
//73
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));
//74
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  // Only change code above this line
}

console.log(testSize(7));
//75
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
  // Only change code above this line
}

console.log(golfScore(5, 4));
//76
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));
//77
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
  }

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff(1));
//78
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}

console.log(sequentialSizes(1));
//79
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      return "";
  }

  return answer;
}

console.log(chainToSwitch(7));
//80
function isLess(a, b) {
  return a < b;
}

isLess(10, 15);
//81

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
//82
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  }
  return count + " Hold";
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
//83
const myDog = {
  // Only change code below this line
  name: "a",
  legs: 4,
  tails: 1,
  friends: ["a", "b", "c"],

  // Only change code above this line
};
//84
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt;
//85
/*
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
*/
// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"];
//87
/*
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
*/
// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber];
//87
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog["name"] = "Happy Coder";
//88
myDog.bark = "woof";
//89
delete myDog.tails;
//90
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
    alpha: "Adams",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
//91
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}
//92
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "abc",
    title: "bf",
    release_year: 120,
    formats: ["a", "b", "b"],
  },
];
//93
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//94
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
//95
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
//96
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
//97
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
//98
const myArray = [];
for (let i = 1; i < 10; i++) {
  if (i % 2 != 0) {
    myArray.push(i);
  }
}
console.log(myArray);
//99
const myArray = [];
for (let i = 10; i > 0; i--) {
  if (i % 2 != 0) {
    myArray.push(i);
  }
}
console.log(myArray);
