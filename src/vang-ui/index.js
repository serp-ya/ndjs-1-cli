#!/usr/bin/env node
const readline = require('readline');
const input = readline.createInterface(process.stdin);
const multiplyer = parseInt(Math.random() * 100);
const hiddenNumber = parseInt(Math.random() * multiplyer);

process.stdout.write(`Загадано число в диапозоне от 0 до ${multiplyer}\n`);

input.on('line', msg => {
    const inputedNumber = Number(msg);
    if (!msg || !isFinite(inputedNumber)) {
        process.stdout.write(`Пожалуйста, введите корректное целое число. Предыдущее значение: "${msg}"\n`);
        return;
    }

    if (inputedNumber === hiddenNumber) {
        process.stdout.write(`Отгадано число ${msg}!`);
        process.exit(0);
    }

    if (inputedNumber > hiddenNumber) {
        process.stdout.write('Меньше\n');
        return;
    }

    if (inputedNumber < hiddenNumber) {
        process.stdout.write('Больше\n');
        return;
    }
});