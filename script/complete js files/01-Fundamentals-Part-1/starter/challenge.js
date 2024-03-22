//TASK ONE
/*const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBM1 = markMass / markHeight ** 2;
const johnBM1 = johnMass / johnHeight ** 2;

console.log(markMass / markHeight ** 2);
console.log(johnMass / johnHeight ** 2);

const markHigherBMI = markBM1 > johnBM1;
console.log(markHigherBMI);

//TASK TWO
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's BMI`);
} else {
  console.log(
    `John's BMI (${BMIJohn}), is higher than Mark's BMI (${BMIMark})`
  );
}


//TASK THREE
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);

// const draw = averageDolphins || averageKoalas;
if (averageDolphins > averageKoalas) {
  console.log("Dolphins wins the trophy");
} else if (averageKoalas > averageDolphins) {
  console.log("Koalas wins the trophy");
} else if (averageDolphins === averageKoalas) {
  ("Both win the trophy");
}

//CHALLENGE 4
const bill = 430;
const tip = bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);


// TASK ONE REPEAT
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
console.log(massMark, massJohn, heightMark, heightJohn);

let BMIMark = 78 / 1.69 ** 2;
let BMIJohn = 92 / 1.95 ** 2;
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/
// TASK TWO REPEAT
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
console.log(massMark, massJohn, heightMark, heightJohn);

let BMIMark = 78 / 1.69 ** 2;
let BMIJohn = 92 / 1.95 ** 2;
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's`);
} else {
  console.log(`John's BMI is higher than Mark's`);
}
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
