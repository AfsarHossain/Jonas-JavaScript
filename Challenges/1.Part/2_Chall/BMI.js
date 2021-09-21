let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

let BmiMark = massMark / heightMark ** 2;

let BmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = BmiMark > BmiJohn;

// console.log(BmiMark, BmiJohn, markHigherBMI);

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`"Mark's BMI ${BmiMark} is higher than John's ${BmiJohn}!"`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`"John's BMI ${BmiJohn} is higher than Mark's ${BmiMark}!"`);
}
