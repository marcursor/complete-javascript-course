'use strict';

const playerOneElement = document.querySelector('.player--0');
const playerTwoElement = document.querySelector('.player--1');
const playerOneScoreElement = document.querySelector('#score--0');
const playerTwoScoreElement = document.getElementById('score--1');
const playerOneCurrScoreElement = document.getElementById('current--0');
const playerTwoCurrScoreElement = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// let currentScore = 0;
// let currentPlayer = 0;
// const scores = [0, 0];
// let playerOneTotalScore = 0;
// let playerTwoTotalScore = 0;
// let play = true;

// playerOneScoreElement.textContent = 0;
// playerTwoScoreElement.textContent = 0;
// diceElement.classList.add('hidden');

let play, scores, currentScore, currentPlayer;

const rollDice = function () {
  if (play) {
    // generate dice roll
    const roll = Math.trunc(Math.random() * 6) + 1;
    //   console.log(roll);

    // display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${roll}.png`;

    // check if rolled 1
    if (roll !== 1) {
      // add roll to current score
      currentScore += roll;
      // currentPlayer === 0
      //   ? (playerOneCurrScoreElement.textContent = currentScore)
      //   : (playerTwoCurrScoreElement.textContent = currentScore);
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // reset current score to 0, change player
      switchPlayer();
    }
  }
};

const switchPlayer = function () {
  if (play) {
    //   currentPlayer++;
    //   currentPlayer %= 2;
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;

    // currentPlayer === 0
    //   ? (playerOneCurrScoreElement.textContent = currentScore)
    //   : (playerTwoCurrScoreElement.textContent = currentScore);

    playerOneElement.classList.toggle('player--active');
    playerTwoElement.classList.toggle('player--active');
  }
};

const holdScore = function () {
  if (play) {
    // add current score to current player's total score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // check if total score >= 100
    if (scores[currentPlayer] >= 10) {
      // finish game
      // console.log('You Win!');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
      play = false;
    } else {
      switchPlayer();
    }
  }
};

const resetGame = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  play = 1;

  playerOneScoreElement.textContent = 0;
  playerTwoScoreElement.textContent = 0;
  playerOneCurrScoreElement.textContent = 0;
  playerTwoCurrScoreElement.textContent = 0;

  diceElement.classList.add('hidden');
  playerOneElement.classList.remove('player--winner');
  playerTwoElement.classList.remove('player--winner');
  playerOneElement.classList.add('player--active');
  playerTwoElement.classList.remove('player--active');
};

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', holdScore);

btnNew.addEventListener('click', resetGame);

resetGame();
