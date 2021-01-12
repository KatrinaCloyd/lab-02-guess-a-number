// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const remainingGuesses = document.getElementById('remainingGuesses');
const highLowWrong = document.getElementById('highLowWrong');


// initialize state
let winningNumber = Math.ceil(Math.random() * 20);
let remainGuessState = 4;
console.log(winningNumber);

// set event listeners to update state and DOM
guessBtn.addEventListener('click', () => {
    remainGuessState--;
    let userGuess = numberInput.value;
    remainingGuesses.textContent = `You have ${remainGuessState} guesses remaining!`;
    let didTheyWin = compareNumbers(userGuess, winningNumber);
    if (didTheyWin === 0) {
        highLowWrong.textContent = `Winner Winner Chicken Dinner!`;
    }
    else if (didTheyWin === -1) {
        highLowWrong.textContent = `Too low, go higher!`;
    }
    else if (didTheyWin === 1) {
        highLowWrong.textContent = `Too high, go lower!`;
    }

});
