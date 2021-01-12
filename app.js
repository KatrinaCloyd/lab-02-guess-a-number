// import functions and grab DOM elements

const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const remainingGuesses = document.getElementById('remainingGuesses');
const highLowWrong = document.getElementById('highLowWrong');


// initialize state
let winningNumber = Math.ceil(Math.random() * 20);
let remainGuessState = 4;

// set event listeners to update state and DOM
console.log(remainGuessState);



/*
const function comapre(guess, winningNumber) {
    return 0
        - 1
    or 1 to decide which result to show
}

*/