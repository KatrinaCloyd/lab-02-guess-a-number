export function compareNumbers(userNum, winNum) {
    if (userNum > winNum) {
        return 1;
    }
    else if (userNum < winNum) {
        return -1;
    }
    else {
        return 0;
    }
}

export function hideResultInfo() {

    remainingGuesses.hidden = true;
    numberInput.disabled = true;
    guessBtn.disabled = true;
}

export function showResultInfo() {

    remainingGuesses.hidden = false;
    numberInput.disabled = false;
    guessBtn.disabled = false;
}