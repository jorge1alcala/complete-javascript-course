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
/*
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

 // 1
 const [players1, players2] = [...game.players]
 console.log(players1);
 console.log(players2);

 // 2
 const [gk, ...fieldPlayers ] = [...players1]
 console.log(gk);
 console.log(fieldPlayers);

 //3
 const allPlayers = [...players1, ...players2]
 console.log(allPlayers);

 //4
 const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
 console.log(players1final);

 //5
//  const {team1, x: draw, team2} = game.odds // manera simple
 const {odds: {team1, x: draw, team2}} = game // destructuring the method (object) odd nested inside the object
 console.log(team1);
 console.log(draw);
 console.log(team2);

 //6
 const printGoals = function(...playerName) {
    console.log(`here are the gols ${playerName.length}`);
 }
 printGoals(...game.scored)
 printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
 printGoals('Davies', 'Muller')

 //7
 team1 < team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win');
 */
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

 // with optional chaining
 const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for(const day of days){
//   const open = restaurant.openingHours[day]?.open || 'close'// this does not work with saturday '0'
  const open = restaurant.openingHours[day]?.open ?? 'close'// here we used nullish coalescing operator '??'
   console.log(`On ${day}, we open at ${open}`)
}