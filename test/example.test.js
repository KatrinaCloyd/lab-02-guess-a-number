// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('if user number is less than winning number return -1', (expect) => {
    const expected = -1;
    const actual = compareNumbers(5, 15);
    expect.equal(actual, expected);
});

test('if user number is same as winning number return 0', (expect) => {
    const expected = 0;
    const actual = compareNumbers(14, 14);
    expect.equal(actual, expected);
});

test('if user number is greater than winning number return 1', (expect) => {
    const expected = 1;
    const actual = compareNumbers(14, 2);
    expect.equal(actual, expected);
});
