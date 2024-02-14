/*
//ACTIVATING STRICT MODE = To write a secure JavaScript code (Easier to avoid bugs) it forbids us to do some things and show us visible errors
//"use strict";
let hasDriversLicence = false; //can be changed
const passTest = true; //Can't be changed

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive.");
//The strict mode will show us where the error is.
//The strict mode also will tell us the list of variable features that are not reserved to be used in the future.

// const interface = "Audio"; This interface word is reserved so J.S will bring an error. Another word is private


////////////////////////////////////////////////////////////
//FUNCTIONS
//Fundamental building Blocks (Is a piece of code that can be used and reused over and over again in a code)

//A variable hold value. a Function can hold a javascript line of codes

function logger() {
  console.log("My name is Edwine");
} 
//Anything between the paremthesis is the parenthesis and inside the caribraces is used to create function body and it is the one that is to be executed

//calling / running / invoking func tion
logger();
logger();
//When the function is caled, the code in the caribrcases is the one that is executed.(2 times)

//Function can receive, pass and return data back = Like a machine
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges); - Not needed
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //Craeting  a string
  return juice;
}
//the two (apples and oranges) are paramenters
//CALLING THE FUCNTION...
//USE ONE (calling)
fruitProcessor(5, 0); //The 5 and 0 are the argeuments
const appleJuice = fruitProcessor(5, 0); //stored values
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); //login directly

//USE TWO
const appleOrangeJuice = fruitProcessor(2, 4); //reusing the function (fruitProcessor) value to get a different output
console.log(appleOrangeJuice);

//Above are FUNCTION DECLARATION

//////////////////////////////////////////////////////////

//FUNCTION DECLARATION AND EXPRESSIONS

//1. DECLARAION
function calcAge1(birthYear) {
   return age = 2023 - birthYear;
}
calcAge1(1998);
const age1 = calcAge1(1998);
console.log(age1);

//2. EXPRESSION
const calcAge2 = function (birthYear) {
  return 2023 - birthYear; //anonymous function
};
const age2 = calcAge2(2000);
console.log(age2);
calcAge2(2000);
//I can use any!!

//Parameter is kind of a placeholder and the arguement is the figures we use to fill in the parameter.

//ARROW FUNCTIONS = Special and faster to write.

const calcAge3 = (birthyear) => 2023 - birthyear; //arrow function
calcAge3(1998); //calling the function
const age3 = calcAge3(1998); //storing the function
console.log(age3); //login to console

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2023 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

yearsUntilRetirement(1998); //calling the function
const retirement = yearsUntilRetirement(1998); //storing the function
console.log(yearsUntilRetirement(1998, "Edwine")); //login the function
console.log(yearsUntilRetirement(1969, "Francis")); //login the function

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`; //Craeting  a string
  return juice;
}

fruitProcessor(2, 3);
// const juice1 = fruitProcessor(2, 3);
// console.log(juice1);
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  let age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1998, "Edwine"));
console.log(yearsUntilRetirement(1955, "Ben"));


///////////////////////////////////////////////////////////
//ARRAYS
const friend = "Wicky";
const friend1 = "Emmah";
const friend3 = "David";

// console.log(friend, friend1, friend2, friend3);
//we can bundle this into one big container in a data structure and arrays is one of the  container in a data structure

//array is like a big container we can throw data structure

//objects are also a big  ontainer that we cab throw data structure

//ONE WAY
const friends = ["Wicky", "Emmah", "David"]; //brackets with strings = Literal synthax.
console.log(friends);

//2ND WAY
const y = new Array(1998, 1999, 2000, 2001); //more needing
console.log(y);

//We use the square brackets!
console.log(friends[0]); //Retrieving elements in the array
console.log(friends[1]); //Retrieving elements in the array

console.log(friends.length); //something.length is a property. It is not zero based = It gives the number of elements in the array
console.log(friends[friends.length - 1]); //To get the index of the last array

//We can change(add and remove) and mutate a friend (an array)
friends[1] = "Monicah"; //Only primitive values can not be changed or be immutatable and array is not one of them so no problem using const and change it's value later.
console.log(friends);

//AND we can not change the whole array. It will be a disaster.
//friends =['Edwine', 'Ken']

//An array can actually hold different value types at the same time.
const firstName = "Edwine";
const edwine = [
  firstName,
  "Arita",
  2023 - 1998,
  "with friends namely",
  friends,
];
console.log(edwine);
console.log(edwine.length);

//Exercise
const calcAge2 = function (birthYear) {
  return 2023 - birthYear; //anonymous function
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge2(years[0]),
  calcAge2(years[1]),
  calcAge2(years[years.length - 1]),
];
console.log(ages);


/////////////////////////////////////////////////////////////
//ARRAYS METHODS OPERATIONS
//They are countless array methods
const friends = ["Wicky", "Emmah", "David"]; //brackets with strings = Literal synthax.

/////////////////////
//ADD ELEMENTS
//Push Method = Adds elements to the end of an array
const newLength = friends.push("Gates"); //adds a new array
console.log(friends);
// console.log(newLength);
console.log(newLength);

//Unshift Method = Adds elements to the BEGINNING of an array
friends.unshift("Mzambezi");
console.log(friends);

//////////////
//REMOVE ELEMENTS
//Pop Method = Remove the last elements of an array(Opp of of push method)
friends.pop(); //No info needed in the parenthesis as arguement
console.log(friends);
const popped = friends.pop();
console.log(popped); //It brings the popped element
console.log(friends);

//shift Method = Remove the first elements of an array(Opp of of unshift method)
//
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Emmah")); //to show the index of the array
console.log(friends.indexOf("Edduh")); // index not there it will give a -1
friends.push(23);
console.log(friends.includes("Emmah"));
console.log(friends.includes("Edduh"));
console.log(friends.includes(23));

//Can be used to write conditionals
if (friends.includes("Edduh")) {
  console.log("You have a friend called Edduh");
} else {
  console.log("You don not have Edduh as a friend");
}

////////////////////////////////////////////////////////////////////
//OBJECTS
//It is another data structure after arrays. They store data in a container.
//
//an array below
const edwineArray = [
  "Jonas", //firstName
  "Arita", //lastName
  2023 - 1998, //age
  "Programmer", //Job
  ["Emmah", "David", "Anthony"], //friends
];

//For the Objects
const edwine = {
  firstName: "Edwine",
  lastName: "Arita",
  age: 2023 - 1998,
  job: "Programmer",
  friends: ["Emmah", "David", "Anthony"],
};
//The object has five properties (firstName, lastName, age, job and friends)
//The order in the objects does not matter but it does matter in arrays when we are retrieving the data. iN OBJECTS they are orderd alphabetically

////////////////////////////////////////////////////////
//Retrieving data from Objects and change using DOT Vs BRACKET NOTATION
const edwine = {
  firstName: "Edwine",
  lastName: "Arita",
  age: 2023 - 1998,
  job: "Programmer",
  friends: ["Emmah", "David", "Anthony"],
};
console.log(edwine); //login

//RETRIEVING DATA USING DOT METHOD
console.log(edwine.friends);

//RETRIEVING DATA USING brackets notation
console.log(edwine["job"]); //The bracket can store an expression

const nameKey = "Name";
console.log(edwine["first" + nameKey]);
console.log(edwine["last" + nameKey]);

// console.log(edwine."first" + nameKey); //Does not work

const interestedIn = prompt(
  "What do you want to know about Edwine? Choose between firstName, lastName, age, job, and friends"
);
console.log(edwine[interestedIn]);

if (edwine[interestedIn]) {
  console.log(edwine[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//ADDING  DATA USING DOT METHOD and BRACKETS NOTATION
edwine.location = "Kenya";
edwine["twitter"] = "@aritaedwine";
console.log(edwine);

//CHALLENGE
//'Edwine has 3 friends and his best friend is called David'

const edwine = {
  firstName: "Edwine",
  lastName: "Arita",
  age: 2023 - 1998,
  friends: ["Emmah", "David", "Anthony"],
};
// console.log(edwine);
const aboutEdwine = `${edwine.firstName} has ${edwine.friends.length} friends,and his best friend is called ${edwine.friends[1]}`;
console.log(aboutEdwine);

//////////////////////////////////////////////////////////////
//OBJECT METHODS
const edwine = {
  firstName: "Edwine",
  lastName: "Arita",
  birthYear: 1998,
  job: "Programmer",
  friends: ["Emmah", "David", "Anthony"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear; //a function expression is needed
  // },

  //ANOTHER WAY to being DRY
  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      edwine.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
console.log(edwine.calcAge()); //We are not keeping it dry. We are repeating ourselves
// console.log(edwine["calcAge"](1998));
// console.log(edwine.age);
// console.log(edwine.age);
// console.log(edwine.age);
/////////////////////////

//CHALLENGE
//"Edwine is a 25 year old programmer, and he has a driver's license."
console.log(edwine.getSummary());

const aboutEdwine = `${edwine.firstName} is a ${edwine.age} years old, and he has a driver's license`;
console.log(aboutEdwine);
*/

//////////////////////////////////////////////////////////
//LOOPS - Control Structures
// for(let rep = 1; rep <= 10);

//TAKING DECISIONS WITH IF/ELSE STATEMENT (CONTROL STRUCTURE)
const currentAge = 18;
const isOldEnough = currentAge >= 20;

if (currentAge >= 20) {
  console.log("Emmah can start driving license");
} else {
  const yearsLeft = 20 - currentAge;
  console.log(
    `Emmah is young. Wait another ${yearsLeft} years to start driving license`
  );
}
const birthYear = 2004;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
