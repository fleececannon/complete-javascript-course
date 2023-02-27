'use strict';

// document.querySelector('.score').textContent = 50;
// document.querySelector('.highscore').textContent = 50;
// document.querySelector('.guess').value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = [0];

function decrementScore() {
  score = score - 1;
  if (score == 0) {
    document.querySelector('.message').textContent = 'You Lost, Try Again';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = secretNumber;
    return;
  }
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  console.log(guess);
  console.log(secretNumber);

  if (!guess) {
    document.querySelector('.message').textContent =
      'You have not guessed a number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!!!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    highScore.push(score);
    highScore.sort(function (a, b) {
      return b - a;
    });
    document.querySelector('.highscore').textContent = highScore[0];
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Guess is too high';
    decrementScore();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Guess is too low';
    decrementScore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
