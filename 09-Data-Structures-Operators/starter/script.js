'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (obj) {
    console.log(obj);
    console.log(obj.length);
  },
};

// coding challenge 1
const bayern = game.players[0];
const borussia = game.players[1];
const [gk, ...fieldPlayers] = bayern;
const allPlayers = [...bayern, ...borussia];
const bayernFinal = [...bayern, 'Thiago', 'player 2', 'player 3'];
const { team1: team1, x: draw, team2: team2 } = game.odds;
const scorers = game.scored;

game.printGoals(scorers);

// coding challenge 2
//(1)
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
console.log('____________________');

//(2)

let avgOdds = 0;
for (const value of Object.values(game.odds)) {
  avgOdds += value;
}
console.log(avgOdds / Object.values(game.odds).length);
console.log('____________________');

const keys = Object.keys(game.odds);
const values = Object.values(game.odds);
const entries = Object.entries(game.odds);

for (const [team, odds] of entries) {
  let x = game?.[team] ?? 'draw';
  console.log(`Odds of ${x} are ${odds}`);
}

///create average of the odds
///print the odds for each team and the draw

// console.log(bayern)
// console.log(gk);
// console.log(fieldPlayers)
// console.log(allPlayers)
// console.log(bayernFinal)
// console.log(team1, draw, team2)

////Menu Shit
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
