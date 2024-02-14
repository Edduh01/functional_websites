/*
// I can use either let or const
// The letters in J.S are case sensitive
const Trading = "amazing";

100 + 40 - 20;
//These values are not displayed in the console because the J.S has not instructed it to.

console.log(100 + 40 - 20);
//These are now displayed in the console because they have been subjected to the console. They are all values joined together to form one value

//Values and Variables.
// Values are the smallest unit of information in J.S
console.log("Edwine");
console.log(25);
// and they are stored in variables for them to be reused. Example below
const firstName = "Edwine";
//This is a variable declaration
// Variables are like boxes that holds some objects. So the Variable holds a value. It is like a label.
// Above example, the variable is the firstName and the Edwine is the value. The FirstName holds the name Edwine
console.log(firstName);
//So here the above variable declaration worked
// console.log(firstName);
// console.log(firstName);
//I can only change the value (Edwine) and they automaticaly gets changed in the variable name.
// The J.S code can only contains letters numbers, dollar sign and under scores.
// Errors can also occure when using resevered J.S key words. Examples are words like new, function.
// But there is a name that is reserved but still allowed to be used like name.
// I can not as well start a variable name with upper case. Some upper case names are also reserved, they might not change. e.g PI =3.1415 as shown below.
const PI = 3.1415;

const myFirstJob = "Teacher";
const myCurrentJob = "Programmer";
console.log(myFirstJob);
console.log(myCurrentJob);
//Done for the values and variabes


// DATA TYPES (Object or Primitive)
//They are 7 of primitive data types. But we focus on Number, String and Boolean
// It is the value that determine a data type and the variable holds the value

let javascriptIsFun = true;
console.log(javascriptIsFun); //A boolean in a variable
console.log(typeof true); //A boolean
console.log(typeof 23); //A Number
console.log(typeof javascriptIsFun); //A boolean
console.log(typeof "Edwine"); //A string

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); //A boolean in a variable

let year;
console.log(typeof year);
console.log(year); //This is undefined

console.log(typeof null); //This is a bug

// LET, CONST AND VAR DECLARATION(KEY WORDS)
let age = 23;
age = 23; //Mutating the variables we use let. Also used in empty variables
console.log(age);

const birthYear = 2000; //This might not change in the future
console.log(birthYear); //In the console
console.log(typeof birthYear); //Number data type. Remember the value carries the data type
// birthYear = 1999; - Will bring a bug
const firstJob = "Teacher";
const currentJob = "Programmer";
console.log(firstJob, currentJob); //In the console
// console.log(typeof firstJob);
// console.log(typeof currentJob);

lastName = "Edwine"; //Don't do this.
console.log(lastName); //I should always declare variables and not do it like this without a declaration even if it works because this is a terrible idea
const language = "Kiswahili";
console.log(language);

const birthMonth = "July";
console.log(birthMonth); //Can not change so const is the best to use
let careerName = "Teacher"; //Can change
console.log(careerName); //In the console
careerName = "Programmer"; //Changed from teacher to programmer using let. const won't allow this
console.log(careerName); //consoled

//BASIC OPERATORS
//Math Operators
const now = 2023;
const ageEdwine = now - 1998;
const ageEmmah = now - 2004;
console.log(ageEdwine);
console.log(ageEmmah);
console.log(ageEdwine, ageEmmah);

console.log(ageEdwine * 2, ageEdwine / 2, 2 ** 3); // 2**3 means to the power of 3 =2*2*2

const firstName = "Edwine";
const lastName = "Arita";
console.log(firstName + " " + lastName);

let x = 10 + 5; //10+5 is done first then assigned to x
x += 10; //at this line x=15 already so it just add 10 =25
x *= 4; //x=x*4 =100
x++;
x--;
console.log(x);

//Comparison Operators to produce a boolean value
console.log(ageEdwine > ageEmmah); //<,>,>= and <=
console.log(ageEmmah <= 18);

console.log(now - 1998 > now - 2004); //J.S started with seperate operations then it did a comparison then

const now = 2023;
const ageEdwine = now - 1998;
const ageEmmah = now - 2004;

console.log(now - 1998 > now - 2004); //The difference is done before the comparison

console.log(25 - 10 - 5); //This is a math operation done from right to left after it has done the assignment
let x, y;
x = y = 25 - 10 - 5; //Same variables declared x=y=10, x=10
console.log(x, y);

const averageAge = (ageEdwine + ageEmmah) / 2;
console.log(ageEdwine, ageEmmah, averageAge);

const firstName = "Edwine";
const job = "Programmer";
const birthYear = 1998;
const year = 2023;

const edwine =
  " I'm " +
  firstName +
  ",a " +
  (year - birthYear) +
  " years old " +
  job +
  " ! ";
console.log(edwine);

const edwineNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(edwineNew);

console.log(`Just a regular string`);

console.log(`A string
with multiple
lines`);

const firstName = "Edwine";
const currentJob = "Progrmmer";
const birthYear = 1998;
const currentYear = 2023;
//Using the old fashion without template literals
const edwine =
  " I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  currentJob;
console.log(edwine);

//Using the templates literals
const edwineNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${currentJob}`;
console.log(edwineNew);

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

//CONVERTING DATA TYPES
//- Conversion = Manually by us
//-Coercion= Behind the scenes by J.S

//- Conversion = Manually by us
const inputYear = "1998";
// console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Edwine")); //Not a Number (Nan)
console.log(typeof NaN); //Weired results saying "a number"

console.log(String(23), 23); //Not as important

//-Coercion= Behind the scenes by J.S
console.log("I am " + 25 + " years old ");
console.log("I am " + "25" + " years old ");
console.log("I am " + String(25) + " years old ");

// Not all operations do coercion to strings
console.log("23" + "10" + 3); //Compared the numbers operation
console.log("23" * "2");
console.log("25" / "5");

let n = "1" + 1; //The string 11
n = n - 1;
console.log(n);

//TRUTHY AND FALSY VALUES
//Falsy Values - Not false but they will become false when converted into boolean. Examples of those falsy value.
// 0, '' undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Edwine")); //string (not empty)=truthy value
console.log(Boolean({})); //object
console.log(Boolean("")); //empty string


const money = 0;
console.log(typeof money)
if (money) {
  console("Don't spend it all");
} else {
  console.log("You should get a job");
}
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

let height;
console.log(typeof height);
if (height) {
  console.log("YAY! Height is defined"); //The height is undefined and since undefined is  a falsy value, it will be false and the else statement is executed.
} else {
  console.log("Height is UNDEFINED"); //If the height is defined then the if statement is executed
} //There is some cases where the height is defined but assigned the 0 value which is  A BUG when coding using J.S. But it will be solved using LOGIC OPERATIONS


//EQUALITY OPERATORS (== Vs ===)
const age = 18; //The = here is an assignment. The rest are comparison. 
AND they are just explained below.
if (age === 18) console.log("You just became an adult");
console.log(18 === 18, 18 === 16); //Strict equality operator
console.log(18 == 18, 18 == 16); //Loose equality operator
//The === does not perform Type Coercion but the == does

//EXAMPLES BELOW
//Loose Equality = Loosely Equal
"18" == 18; //This is a loose equality operator in a string and a number. Lets log in to the console to see if it will coerce
console.log("18" == 18); // It just brought TRUE results. Meaning it has coerced

//Strict Equality = Strictly Equal
"18" === 18; //This is a strict equality operator in a string and a number. Lets log in to the console to see if it will coerce
console.log("18" === 18); // It just brought FALSE results. Meaning it doesn't coerce.

const currentAge = "18"; //This is just a string. Let use it
if (currentAge == 18) console.log("You just became and adult (loose)");
if (currentAge === 18) console.log("You just became an adult (strict)");

//GETTING A VALUE FROM ANY WEB PAGE = promtp FUNCTIONS!
// prompt("What is your favorite position?"); - This is just a prompt. I need to make a variable for it to store the fav. #

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite); //In the console displayed
console.log(typeof favorite); //This is a string instead of a number. Why is that so?
if (favorite === 30) {
  //30===30 strict Equality
  //If it is == 30 as a number which will be coerced
  console.log("Cool! 30 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 30 or 7");
}

if (favorite !== 30) console.log("Why not 30"); //Different operator


//BOOLEAN LOGIC
//We use AND, OR and NOT
//In AND -> We need only one false to affect all to be false
//In OR -> We need only one true to affect all to be true
//In Not -> The value is inverted (If it was false, it becomes true)

//BOOLEAN LOGIC
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sandrah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sandrah is able to drive");
} else {
  console.log("Someone else should drive");
}


//THE SWITCH STATEMENT -  It is an alt. of if...else stament
const day = "Monday";
switch (day) {
  case "Monday": //not a semi-colon (//day ===monday)
    console.log("Plan my course structure");
    console.log("Go to coding meet up");
    break;
  case "Tuesday":
    console.log("Preparing the theory vidoes");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("write code examples");
    break;
  case "Friday":
    console, log("Record a video");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Take some rest");
    break;
  default:
    console.log("Not a valid day");
}

const day = "Wednesday || Thursday";
if (day === "Monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meet up");
} else if (day === "Tuesday") {
  console.log("Preparing the theory vidoes");
} else if (day === "Wednesday" || "Thursday") {
  console.log("write code examples");
} else if (day === "Friday") {
  console, log("Record a video");
} else if (day === "Saturday" || "Sunday") {
  console.log("Take some rest");
} else {
  ("Not a valid day");
}


//THE CONDITIONAL OPERATOR (Similar to if else but in one line) an "operator" that produces a value which is an expression
const age = 25;
// console.log(age);
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine🍷" : "water💧"; //emoji = windows + .(fullstop)
console.log(drink); //The parts are seperated by a comma. The first is the if and the second is the else.
//It contains three parts ! The condition, the if and the else part. if else statement are written in one line.

//age >= 18? "wine🍷" : "water💧" (This is an expression that produces a value that is stored in the variable as shown above)
*/
let age = 18;
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
//The above expression variable is declared outside the if else and the reassigned inside the if else statement.

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//JAVASCRIPT RELEASES ES5, ES6+ and ESNEXT!
//ES for EcmaScript = history oj j.s
//It was Mocha created in 10 days by Brendan then named to Livescript and then Javascript in NetScape.

//Ecma is a standardization organization that was used to standardize the javascrippt after internet explore copying javascript from netscape and calling it JScript.
