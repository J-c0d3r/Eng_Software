const calculator = require('./src/calculator');

let resultSum = calculator.sum(2, 3);
let resultSub = calculator.subtraction(1, 3);
let resultMul = calculator.multiplication(5, 2);
let resultDiv = calculator.division(1, (100 / 0));
let resultPow = calculator.power(0, 0);

console.log("\n",
    resultSum, "\n",
    resultSub, "\n",
    resultMul, "\n",
    resultDiv, "\n",
    resultPow
);
