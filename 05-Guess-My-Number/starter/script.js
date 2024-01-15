'use strict';

console.log(document.querySelector('.message').textContent);

/*
displayMessage'Correct number! ✅';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  guess = guess !== '' ? Number(guess) : guess;
  // const guess = Number(document.querySelector('.guess').value);
  //  const guess = document.querySelector('.guess').value;

  //   console.log(guess);
  //   console.log(Number.isInteger(guess));
  //   console.log(guess === 0);

  // if there is no number
  if (!guess && guess !== 0) {
    displayMessage('No number 🚫');
    // if number is out of range
  } else if (guess < 1 || guess > 20) {
    displayMessage('Choose a number between 1 and 20');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('You got it!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else {
    score--;
    // run out of lives and lose
    if (score === 0) {
      displayMessage('You lose');
      // still has attempts left
    } else {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
