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