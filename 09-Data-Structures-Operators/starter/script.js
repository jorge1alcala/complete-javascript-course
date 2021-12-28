'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  oderPizza: function(mainIgredient, ...otherIngredients) {
    console.log(mainIgredient);
    console.log(otherIngredients);
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({time='20:00', address, mainIndex=0, starterIndex=1}){
  console.log(`Oder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` );
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'Villa del Sole 21',
  mainIndex: 2,
  starterIndex: 2,// results in the console: // Oder received! Garlic Bread and Risotto will be delivered to Villa del Sole 21 at 23:30
})
restaurant.orderDelivery({
  
  address: '4781 Burlwood Loop Se',
  mainIndex: 2,
  // resultados en la consola: Oder received! Bruschetta and Risotto will be delivered to 4781 Burlwood Loop Se at 20:00
})

const ingredients = [
  prompt('let\'s make pasta, choose the first ingridient'), 
  prompt('Segundo ingrediente?'), 
  prompt('Terser ingrediente?')
]
console.log(ingredients);

restaurant.orderPasta(...ingredients)
/*
const [first, , second ]= restaurant.mainMenu;
console.log(first, second);// Pizza Risotto

const [x, , ,y] = restaurant.starterMenu;
console.log(x, y);//Focaccia Caprese Salad

// how to switch variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);//Italian Vegetarian
[main, secondary] = [secondary, main]
console.log(main, secondary);//Vegetarian Italian

// receive 2 resturn values from a funtion
console.log(restaurant.order(2,0)); // [ 'Garlic Bread', 'Pizza' ]
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);//Garlic Bread Pizza

// how to extract from an array inside an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);//2 5 6

// default values
const [p =1, q=1, r=1] = [8, 9];
console.log(p, q, r);// 8,9,1
*/
////// Como sacar la propiedades de un objeto
// Property NAME
const properties = Object.keys(openingHours)// esto convierte items en un array
console.log(properties[0])
console.log(properties[1])
console.log(properties[2])
/*
// const { fri, ...weekdays} = restaurant.openingHours;// aqui removimos un dia (friday)
// const horarios = {...weekdays} 

// console.log(friday);
const horarios = restaurant.openingHours
console.log(`abirmos ${properties.length} dias a la semana y nuestro horario son ${properties[0]} de ${horarios.thu.open}:00 a ${horarios.thu.close}:00, ${properties[1]} de ${horarios.fri.open}:00 a ${horarios.fri.close}:00 y ${properties[2]} de ${horarios.sat.open}:00 a ${horarios.sat.close}:00 `);
*/
let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `  
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours)// aqui sacamos lo valores de las propiedades
console.log(values);

// Entire object
const entries = Object.entries(openingHours)
console.log(entries);

let horasPSemana;
for (const [key, {open, close}] of entries) {// se uso [key, {open, close}] porque es un objeto para structed los valores, sino fuera objeto solo se usaria: [key, value]
  openStr += ` ${key} del ${open}:00 a ${close}:00`  
  horasPSemana  = `nuestro horario es de ${properties[0]} a ${properties[properties.length -1]}`;

}

console.log(openStr);
console.log(horasPSemana);


/*
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const { name: restauranName, openingHours: hours, categories: tags } = restaurant;
// console.log(restauranName, hours, tags);
// console.log(`nuestros horarios son ${hours.thu.open}`);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(name, starters);
*/
/*
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);// resultado en la consola 23, 7

// Nested objects
const {fri: {open, close} } = openingHours;
console.log(open, close);

// Nested objects
const {fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
// 2 Funtions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);    
  }
}
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.oderPizza('mushrooms', 'onion', 'olives', 'spinach');

const [piz,  , ris, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(piz, ris, otherFood);
console.log(`aqui tienes tu pedido una ${piz} con ${ris}`);

*/


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
    ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [players1, players2] = game.players// aqui divides el array en dos arrays
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1// aqui separas el primer item del array
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2] //aqui juntas todos las arrays en una sola
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']// aqui creas una nueva array y añades mas items al array
console.log(players1Final);

const {odds: {team1, x: draw, team2,}} = game// aqui le cambiamos el nombre a una variable (x por draw)
console.log(game);

const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);//4 goals were scored
console.log(`${players}`);//Lewandowski,Gnarby,Lewandowski,Hummels
}
printGoals(...game.scored)
printGoals(game.scored)

team1 < team2 && console.log('team 1 is more likely to win');//porque team1 es menos que team2 aqui se usa && para que pase al console.log
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// const values = Object.values(game.scored)
// console.log(values);

// for (const [key, player] of values) {
//   console.log(`Goal ${key}: ${player}`);  
// }


const printGoals = function (...players) {
for (const [key, player] of players) {
    console.log(`Goal${key}: ${player}`);//Lewandowski,Gnarby,Lewandowski,Hummels
  }
}
printGoals(...game.scored)

// printGoals(game.scored)

// const entries = Object.entries(game.scored)
console.log(entries);
for (const [i, player] of entries) {
  
  console.log(`Goal ${i + 1}: ${player}`);// no bueno no me salio como queria... Goal 01: Lewandowski, Goal 11: Gnarby, Goal 21: Lewandowski, Goal 31: Hummels
// }
for (const [i, player] of game.scored.entries()) {//(this way is for arrays) returns a new Array Iterator object that contains the key/value pairs
  console.log(`Goal ${i + 1}: ${player}`);  
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const sumofOdds = Object.values(game.odds)
console.log(sumofOdds);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(sumofOdds.reduce(reducer));// solucion 1 con reduce
const total = sumofOdds.reduce(reducer)
 console.log(total / sumofOdds.length )

/*
let average = 0
for (const odd of sumofOdds) // solucion 2 con for
  average += odd
average /= sumofOdds.length;
console.log(average);

let average2 = odds.reduce((oddTotal, odd) => {
  return oddTotal + odd
}, 0)
console.log(average2 / odds.length); // solucion 3 con reduce
  
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'Drow' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

// for (const [team, odd] of Object.entries(game.odds)) {
//   // console.log(team, odd);  
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd} `);
// }
}
