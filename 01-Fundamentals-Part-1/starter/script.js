let js = 'amazing';
      
/*
// Declaring a variable
let firstName = 'Jorge';
console.log(firstName);


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
//tes data 1
const markMass = 78;
const markMass2 = 95;
const markHeight = 1.69;
const markHeight2 = 1.88;
const markBMI = markMass / markHeight ** 2;
const markBMI2 = markMass2 / markHeight2 ** 2;
console.log(markBMI);
console.log(markBMI2);

const johnMass = 92;
const johnMass2 = 85;
const johnHeight = 1.95;
const johnHeight2 = 1.76;
const johnBMI = johnMass / johnHeight ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(johnBMI);
console.log(johnBMI2);

const markHigherBMI = markBMI > johnBMI;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI);
console.log(markHigherBMI2);
*/

/*
const firstName = 'Jorge';
const job = 'programer';
const birthYear = 1972;
const year = new Date().getFullYear();
console.log(year);

const jorge = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jorge);

// template literal = Template string
const jorgeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jorgeNew);

// Before to creat multiple lines string
console.log('String with \n\
multinple \n\
lines');

// new with tamplates literal
console.log(`String with
multiple
lines  🚗`);
*/

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sara can strar driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is not ready for divers license, Wait another ${yearsLeft} years. 😋`);
}
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀


// Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Data 2
// const markHeight = 1.88;
// const markMass = 95;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}*/

/*
// Type Conversion and Coercion
// Convert string numbers to numbers
const stringNumber = '18';
console.log(stringNumber, Number(stringNumber)); // 18
console.log(Number(stringNumber) + 8); 

let n = "1" + 1;
console.log(n);// '11'
n = n -1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // "95"
console.log('10'- '4'-'3'-'2' + '5'); //15
*/
/*
// 5 falsy values: 0, '', undefined, null, Nan.
console.log(Boolean(0)); // false
console.log(Boolean(undefined));// false
console.log(Boolean('Jorge')); // true
console.log(Boolean({})); // true

const money = 0; // cero is Falsy value
if (money) {
  console.log("don't spend it all");
}else {
  console.log('You should get a Job');
}

let height;// Variable without value is undefined so is Folsy value
if (height) { 
  console.log('YAY! Height is defined');
}else{
  console.log('Height is Undefined');
}*/

/*
const hasDriversLicense = true //A
const hasGoodVision = false // B

console.log(hasDriversLicense && hasGoodVision);// the 2 needs to be false and false or true and true!
console.log(hasDriversLicense || hasGoodVision);// only 1 needs to be false or true to be true
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sara is able to drive!');
} else {
  console.log('Someone else should drive...');
}*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
 /*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log('the Dolphins are the winners'); 
} else if (scoreDolphins === scoreKoalas) {
  console.log('draw');  
} else {
  console.log('Koalas are the winners');
}

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 123) / 3;

if (scoreDolphins2 >= 100 && scoreDolphins2 > scoreKoalas2) {
  console.log('the Dolphines are the winners!');
}else if (scoreKoalas2 >= 100 && scoreKoalas2 > scoreDolphins2){
  console.log(`the Koalas are the winners! with ${scoreKoalas2} points vs ${scoreDolphins2}` );
}*/
/*
const scoreDolphins3 = (97 + 112 + 101) / 3;
const scoreKoalas3 = (109 + 95 + 106) / 3;


if (scoreDolphins3 > scoreKoalas3 && scoreDolphins3 >= 100) {
  console.log(`Dolphins win the trophy, Dolphins ${scoreDolphins3} vs Koalas ${scoreKoalas3}`);
} else if (scoreDolphins3 < scoreKoalas3 && scoreKoalas3 >= 100){
  console.log(`Koalas win the trophy, Dolphins ${scoreDolphins3} vs Koalas ${scoreKoalas3}`);
} else if (scoreDolphins3 === scoreKoalas3 && scoreKoalas3 >= 100){
  console.log(`Both win the trophy, Dolphins ${scoreDolphins3} vs Koalas ${scoreKoalas3}`);
} else {
  console.log('no one wins the trophy');
}*/

////////////////////////////////////
// Switch vs if statement
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const day = days[new Date().getDay()]
console.log(day);
/*
switch (day) { // day === 'Monday'
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory video');
    break;
  case 'Wednesday':
  case 'Thursday':
      console.log('write code examples');
      break
  case 'Friday':  
    console.log('Record videos');  
    break
  case 'Saturday':
  case 'Sunday':
    console.log(' Enjoy the weekend 😎');
    break
  default:
    console.log('Not a valid day');
    break;
}*/
/*
// If statement
if (day === 'Monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');  
} else if (day === 'Tuesday') {
  console.log('Prepare theory video');
} else if (day === 'Wednesday' || day === 'thursday') {
  console.log('write code examples');
} else if (day === 'Friday') {
  console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log(' Enjoy the weekend 😎');
} else {
  console.log('Not a valid day');
}
*/

//  Statement and Expresions
// Epresions produce a value
// Statement is full sentence that translate our actions.
const age = 21;
const str = `esto es para ver si esto es una expresion or statement ${age >= 18 ? console.log('I like to drink') : console.log('I like to drink water')}`

//Espresion
const drink = age >= 18 ? 'wine 🍷' : 'water 🥤';
console.log(drink);

//Statement
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷'
}else {
  drink2 = 'water 🥤'
}

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Tips Calculater
const bill = 100;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);
*/

