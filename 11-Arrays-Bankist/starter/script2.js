'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displyMovements = function(movements){
  containerMovements.innerHTML = ''
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'    ;
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          
          <div class="movements__value">${mov}€</div>
        </div>    
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

displyMovements(account1.movements);

const calcPrintBalance = function(movements){
  const balance = movements.reduce((acc, cur) =>  acc + cur, 0)
  labelBalance.textContent = `${balance}€`
  console.log(balance);
}
calcPrintBalance(account1.movements)


// crea el user name de cada cuenta 
const createUserName = function (accs){
  accs.forEach(function(acc){
    acc.userName = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}
createUserName(accounts)
console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const juliaData1 = [3, 5, 2, 12, 7]
const juliaData2 = [9, 16, 6, 8, 3]
const juliaData = [...juliaData1, ...juliaData2];
console.log(juliaData);
console.log(juliaData.slice(1, -2))
const dataJulia = juliaData.slice(1, -2)
console.log(dataJulia);

const kateData1 = [4, 1, 15, 8, 3]
const kateData2 = [10, 5, 6, 1, 4]
const kateData = [...kateData1, ...kateData2]
console.log(kateData);
const juliaKate = [...kateData, ...dataJulia]
console.log(juliaKate);

const checkDogs = function(dogsJulia, dogsKate) {
  const juliaKate = [...dogsJulia, ...dogsKate]
  console.log(juliaKate);
  juliaKate.forEach(function(mov, i, arr){
    const type = mov >= 3 ? 'is an adult' : 'is still a puppy'
    console.log(`Dog number ${i + 1} ${type}, and is ${mov} years old`);
  })
}
checkDogs(dataJulia, kateData)



let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // the slice method creats new array 
console.log([...arr]);// the spreed operator alse creats a new array

// SPLICE mothod mutate the original array
// console.log(arr.splice(2));
// console.log(arr);// here you see that SPLICE metho mutate the original array
arr.splice(-1)// this delete the las item on the array
console.log(arr);//['a', 'b', 'c', 'd']
arr.splice(1, 2)// this delete 2 items after the 1 
console.log(arr);// ['a', 'd']

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);// reverse will mutate the array

//concat
const letters = arr.concat(arr2)
console.log(letters);
console.log([...arr, ...arr2]);// to join 2 arrays you can use concat or the spread operator

//JOIN
console.log(letters.join('*'));
*/
/*
// FOR OF
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()){// esto 'ENTRIES()' trea el index de cada interacion.
  if(movement > 0){ 
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }else{
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);// Math.abs take of the negative operator -
  }
}

console.log(`----FOREACH ----`);
movements.forEach(function(movement, i, arr){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }else{
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);// Math.abs take of the negative operator -
  }
})
*/ 
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(`----FOREACH WITH MAP-----`);
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
*/

// the REDUCE method
// const balace2 = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur; 
// }, 0)
// REDUCE Con funcion de flecha
const balace2 = movements.reduce((acc, cur) => acc + cur, 0)
console.log(`este es el balance: ${balace2}`);

// manualmente con FOR en vez de REDUCE
let balance3 = 0
for (const mov of movements) {
  balance3 += mov
}
console.log(balance3);