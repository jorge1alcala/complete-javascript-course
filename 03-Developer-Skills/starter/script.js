// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* -->
const measureKevin = function (){
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degress celsius: '))
    value: 10
  }

  console.table(measurement);
   const kelvin = measurement.value + 273
   return kelvin 
}

console.log(measureKevin());

// --> /////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const aplitude = function (tems) {
  const newTems = tems.filter(tem => typeof tem === 'number')
  let min = newTems[0]
  let max = newTems[0]
  newTems.forEach(tem => {
       if (tem > max) max = tem;
       if (tem < min) min = tem     
  });
 console.log(min, max);
}
aplitude(['pepe', 34, -50, 'hola', 20, 58, 3, -34])
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr){
  let str = '...'
  arr.forEach((element, index) => {
    str += ` ${element}ºC in ${index + 1} days ...`
  });
  return str;
}
console.log(printForecast(data2));