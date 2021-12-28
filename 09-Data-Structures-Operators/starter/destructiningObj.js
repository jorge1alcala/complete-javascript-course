'use strict';
const openingHours = {
  thu: {open: 12,close: 22,},
  fri: {open: 11,close: 23,},
  sat: {open: 0, close: 24,
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
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for(const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let odds = Object.values(game.odds)
let average = 0
for (const odd of odds ) average += odd;
  average /= odds.length
  console.log(average);


let average2 = odds.reduce((oddTotal, odd) => {
  return oddTotal + odd
}, 0)
console.log(average2 / odds.length);