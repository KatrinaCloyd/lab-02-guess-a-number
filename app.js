// import functions and grab DOM elements
import { compareNumbers, hideResultInfo } from './utils.js';

const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const remainingGuesses = document.getElementById('remainingGuesses');
const highLowWrong = document.getElementById('highLowWrong');
const tryAgain = document.getElementById('tryAgain');

// initialize state
let winningNumber = Math.ceil(Math.random() * 20);
let remainGuessState = 4;

// set event listeners to update state and DOM
guessBtn.addEventListener('click', () => {
    console.log(winningNumber);
    remainGuessState--;
    remainingGuesses.textContent = `You have ${remainGuessState} guesses remaining!`;
    let userGuess = numberInput.value;
    let didTheyWin = compareNumbers(userGuess, winningNumber);
    if (didTheyWin === 0) {
        highLowWrong.textContent = `Winner Winner Chicken Dinner! It was ${winningNumber}!`;
        hideResultInfo();
        document.body.style.backgroundColor = 'PaleTurquoise';
        tryAgain.style.visibility = 'visible';
    }
    else if (didTheyWin === -1) {
        highLowWrong.textContent = `Too low, go higher!`;
    }
    else {
        highLowWrong.textContent = `Too high, go lower!`;
    }
    if (remainGuessState === 0 && didTheyWin !== 0) {
        highLowWrong.textContent = `That was your last try. YOU LOSE!`;
        hideResultInfo();
        tryAgain.style.visibility = 'visible';
    }
});

tryAgain.addEventListener('click', () => {

    remainGuessState = 4;
    winningNumber = Math.ceil(Math.random() * 20);
    remainingGuesses.textContent = `You have ${remainGuessState} guesses remaining!`;
    document.body.style.backgroundColor = 'White';

    remainingGuesses.hidden = false;
    numberInput.disabled = false;
    guessBtn.disabled = false;

    tryAgain.style.visibility = 'hidden';
    highLowWrong.textContent = `Give it another go!`;
    numberInput.value = '';
});