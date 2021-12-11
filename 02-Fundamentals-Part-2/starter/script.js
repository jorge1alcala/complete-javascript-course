
/*
//🌟 Function declaration
function calcAge1(birthYear){
  return new Date().getFullYear() - birthYear
}
const jorge = calcAge1(1972)
console.log(jorge);

// Anonimate or Expression Funtion
// Function Expression cant'n call them before they are difined, becouse of the process call hoisting.
// Jonas preffered Functions Expression better than Functions delcaration.
const calcAge2 = function(birthYear){
  return new Date().getFullYear() - birthYear
}
const jorge2 = calcAge2(1971)
console.log(jorge2); 
*/
/*
//🌟 Arrow Function
const calcAge3 = birthYear => new Date().getFullYear() - birthYear
// const age3 = calcAge3(1972)
console.log(calcAge3(1972));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} will retires in ${retirement} years`
}
 console.log(yearsUntilRetirement(1972, 'Jorge'));


 function cutFruitPieces(fruit){
  return fruit * 4;
 }

 function fruitProcessor(apples, oranges){
   const applePieces = cutFruitPieces(apples)
   const orangesPieces = cutFruitPieces(oranges)

   const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} pieces of orange.`
   return juice;
  }
  console.log(fruitProcessor(2,3));
  */

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) =>  (a + b + c) / 3;

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas, scoreDolphins);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win 🏆 ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas win 🏆 ${avgKoalas} vs ${avgDolphins}`);
  } else {
    return console.log('no one wins');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas, scoreDolphins);
checkWinner(scoreDolphins, scoreKoalas);

// --> La idea es de crear funciones que sean reusables en todo el projecto.
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648243
*/
 
/*
// 🌟 Arrays and Objects are the bigest Data Structures in JavaScript
// arrays holds any value and any type
// 2 ways to write an Array
const friends = ['Micheal', 'Steven', 'Peter']
const y = new Array(1991, 1984, 2008, 2020)

console.log(friends, y);

//  to retrived the values from array 

console.log(friends[1]);
console.log(friends[0]);
console.log(friends[friends.length -1]); // expresions create a value, only an Expression can be here.

// how to mutar an Array? 
friends[2] = 'Todd'
console.log(friends); // we be able to mutar el array aun cuendo es una constante 'const' porque solo los primitivos son inmutantes y las arrays no son primitivos. 
//friends = ['Bob', 'Alice'] // pero no se puede cambiar toda la arrey esto no es permitido.

const firstName = 'Jorge'
const jorge = [firstName, 'Alcala', new Date().getFullYear() - 1972, 'CarSales', friends];// Arrays expect expressions.
console.log(jorge);
console.log(jorge.length);

// Exercise
const calcAge = function(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const years = [1990, 1972, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

// you can add function into arrays becouse function are expression that produce a value.
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/

/*
// -->🌟🌟🌟 Array Methods 🌟🌟🌟<-- ////
// PUSH Method add alements to the end of the array
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // the push method is a funtion that not only push a value to the end of the array but also returns a value whish is the length.
console.log(friends);
console.log(newLength);

// UNSHIFT Method ////
// unsifth Method add an element to the begening of the array
friends.unshift('John')
console.log(friends);

// Removing Elements
// POP method just like PUSH but this will remove the last element.
// POP methos returs the removed element.
friends.pop()
const lastremoved = friends.pop(); //this Method also returns a value whish is the element
console.log(friends);
// SHIFT Method
friends.shift()// this will remove the first element
console.log(friends);

// 🌟 BUSCAR ELEMENTOS EN EL ARRAY //
// INDEXOF Method
// INDEXOF will return the index of the element in the array
console.log(friends.indexOf('Micheal')); // the index of Micheal is 0
console.log(friends.indexOf('Bob')); // Bob no existe en el array so returns -1
// FINDINDEX will returns the item of the array of objects wheh indexOf not workss in objects.

// INCLUDES Method
// Includes method will find an the element and ruturns true or false.
friends.push(23);
console.log(friends.includes('Steven'));// this will return true.
console.log(friends.includes('Bob')); // this will retunr false.
console.log(friends.includes(23));// true

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
// hice esta funcion pero no me salio los porcentajes pero el segundo ejemplo si salio todo bien como era.
const bills = []
const total = []
const calcTip = function (tip){
  bills.push(tip)
  return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2;
}
const tip = [calcTip(125), calcTip(555), calcTip(44)]

console.log(tip);
console.log(bills);
console.log(total);
*/

/*
// esta es la funcion que si trabaja como quiso el maestro para este challege.
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips);
console.log(totals);
*/

/* -->🌟 OBJETOS <-- */
/*
const jorge = {
  firstName: 'Jorge',
  lastName: 'Alcala',
  age: new Date().getFullYear() - 1972,
  job: 'Web developer',
  friends: ['Micheel', 'Peter', 'Steven']
}

console.log(jorge);
/* const interestedIn = prompt('What do you want to know about Jorge? Choose between, lastName, age, job and friends');

console.log(jorge[interestedIn]);

if (jorge[interestedIn]) {
  console.log(jorge[interestedIn]);
}else {
  console.log('Wrong request! Choose between, lastName, age, job and friends');
}
*/
/*
jorge.location = "Oregon"

jorge['twitter'] = '@smartway'
console.log(jorge);

console.log(`${jorge.firstName} has ${jorge.friends.length} friends, and his best friend is ${jorge.friends[0]}`); // cual tiene la preferencia entre operadores? 

// Operator precedent MDN https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

/* -->🌟 OBJECT METHODS<-- */
/*
const jorge = {
  firstName: 'Jorge',
  lastName: 'Alcala',
  birthYear: 1972,
  job: 'Web developer',
  friends: ['Micheel', 'Peter', 'Steven'],
  hasDriversLicense: true,
  
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear
  // }
  // calcAge: function () {
  //   return new Date().getFullYear() - this.birthYear
  // }
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear
    return this.age;
  },

  getSummary: function (){
    return `${this.firstName} is a ${this['calcAge']()} old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
};

// console.log(jorge.calcAge());// formas de llamar una funcion dentro de un object.
// console.log(jorge['calcAge']());
console.log(jorge['calcAge']());
console.log(jorge.age);// para que este trabaje necesitas llamar la funcion primero.

console.log(jorge.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
  firstName : 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,
  calcBMI: function (){
    this.bmi = this.weight / this.height **2
    return this.bmi
  }
}

const john = {
  firstName : 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function (){
    this.bmi = this.weight / this.height **2
    return this.bmi
  }
}
john.calcBMI()
mark.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})`);
}else if (john.bmi > mark.bmi) {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})`);
}

// const markBMI = mark.weight / mark.height ** 2;
// const johnBMI = john.weight / john.height ** 2;
console.log(mark.bmi, john.bmi);
*/

/* -->🌟 The FOR loop<-- */
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`); 
}
*/
/*
const jorge = ['Jorge', 'Alcala', new Date().getFullYear() - 1972, 'CarSales', ['Micheal', 'Peter', 'Steven'], true];

const type = []
for (let i = 0; i < jorge.length; i++) {
  const element = jorge[i];
  // console.log(element, typeof jorge[i]);

  type[i] = typeof jorge[i]
  // type.push(typeof jorge[i])
}
console.log(type);


const years = [1972,2007,1969,2020]
const ages = []
for (let i = 0; i < years.length; i++) {
  const element = years[i];
  ages.push(new Date().getFullYear() - element)
}
console.log(ages);

// -->🌟 continue and break https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648291
console.log('--- ONLY STRINGS---');
for (let i = 0; i < jorge.length; i++) {
  const element = jorge[i];
  if (typeof jorge[i] !== 'string') continue;
    console.log(element, typeof element);  
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jorge.length; i++) {
  const element = jorge[i];
  if (typeof jorge[i] === 'number') break;
    console.log(element, typeof element);  
}
*/

// -->🌟 Looping Backwards
const jorge = ['Jorge', 'Alcala', new Date().getFullYear() - 1972, 'CarSales', ['Micheal', 'Peter', 'Steven']];

for (let i = jorge.length-1; i >= 0; i--) {
  const element = jorge[i];
  console.log(i, element);
}

// -->🌟 Looping inside loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Start exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻‍♂️`);
  }
}