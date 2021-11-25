
/*
// Function declaration
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
// Arrow Function
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
//  Arrays and Objects are the bigest Data Structures in JavaScript
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
// // Array Methods ////
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

// INDEXOF Method
// INDEXOF will return the index of the element in the array
console.log(friends.indexOf('Micheal')); // the index of Micheal is 0
console.log(friends.indexOf('Bob')); // Bob no existe en el array so returns -1

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