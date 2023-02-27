'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const p1CurrentScore = document.querySelector('#current--0');
const p2CurrentScore = document.querySelector('#current--1');
const p1Score = document.querySelector('#score--0');
const p2Score = document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
let currentScore = 0;
let p1Scores = 0;
let p2Scores = 0;

roll.addEventListener('click', function () {
  let die = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `dice-${die}.png`;
  if (p1.classList.contains('player--active')) {
    if (die === 1) {
      currentScore = 0;
      p1CurrentScore.textContent = 0;
      p1.classList.remove('player--active');
      p2.classList.add('player--active');
    } else {
      currentScore += die;
      p1CurrentScore.textContent = currentScore;
    }
  } else if (p2.classList.contains('player--active')) {
    if (die === 1) {
      currentScore = 0;
      p2CurrentScore.textContent = 0;
      p2.classList.remove('player--active');
      p1.classList.add('player--active');
    } else {
      currentScore += die;
      p2CurrentScore.textContent = currentScore;
    }
  }
  console.log(p1Score);
});

hold.addEventListener('click', function () {
  if (p1.classList.contains('player--active')) {
    p1Scores += currentScore;
    p1Score.textContent = p1Scores;
    p1CurrentScore.textContent = 0;
    currentScore = 0;
    p1.classList.remove('player--active');
    p2.classList.add('player--active');
  } else if (p2.classList.contains('player--active')) {
    p2Scores += currentScore;
    p2Score.textContent = p2Scores;
    p2CurrentScore.textContent = 0;
    currentScore = 0;
    p2.classList.remove('player--active');
    p1.classList.add('player--active');
  }
  if(p1Score >= 100)
  }
});

newGame.addEventListener('click', function () {
  p1Score.textContent = 0;
  p1CurrentScore.textContent = 0;
  p2Score.textContent = 0;
  p2CurrentScore.textContent = 0;
});
