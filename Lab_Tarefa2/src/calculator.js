const validate = require('validate.js');

const Calculator = {
    sum(num1, num2) {
        const num1Val = validate.isNumber(num1);
        const num2Val = validate.isNumber(num2);
        if (num1Val && num2Val) {
            return num1 + num2;
        } else {
            return 'Error'
        }
    },

    subtraction(num1, num2) {
        const num1Val = validate.isNumber(num1);
        const num2Val = validate.isNumber(num2);
        if (num1Val && num2Val) {
            return num1 - num2;
        } else {
            return 'Error'
        }
    },

    multiplication(num1, num2) {
        const num1Val = validate.isNumber(num1);
        const num2Val = validate.isNumber(num2);
        if (num1Val && num2Val) {
            return num1 * num2;
        } else {
            return 'Error'
        }
    },

    division(num1, num2) {
        const num1Val = validate.isNumber(num1);
        const num2Val = validate.isNumber(num2);
        if (num1Val && num2Val) {
            return num1 / num2;
        } else {
            return 'Error'
        }
    },

    power(num1, num2) {
        const num1Val = validate.isNumber(num1);
        const num2Val = validate.isNumber(num2);
        if (num1Val && num2Val) {
            return Math.pow(num1, num2);
        } else {
            return 'Error'
        }
    }
};

module.exports = Calculator;
