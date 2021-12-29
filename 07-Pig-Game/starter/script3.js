'use strict';
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

// Secting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;
diceEl.classList.add('hidden')

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
// 1. Generating a random dice roll
const dice = Math.trunc(Math.random() * 6) + 1
// 2. Display dice

// 3. Check for rolled 1: if true. Swich to next player
// Add dice to current score
// Swich to next player
})

// Hold button
// 1. add current score to active player's score and display it to the Ui
// 2. check if player's score is >= 100, if so finish the game if in not Switch to the next player
//finish the game
// hidding the dice
// reset the current Score to 0
// add the payer--winter for the winner
//remove the player--active class
// if score os <= than 100 switch player

// new game button