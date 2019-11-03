#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'What is the result of the expression?';

const getTaskAndCorrectAnswer = () => {
  const getExpression = (firstNumber, secondNumber, operator) => {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      default: return firstNumber * secondNumber;
    }
  };

  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomInteger(1, 3)];

  const firstRandNum = randomInteger(1, 100);
  const secondRandNum = randomInteger(1, 100);

  const question = `${firstRandNum} ${randomOperator} ${secondRandNum}`;

  const correctAnswer = String(getExpression(firstRandNum, secondRandNum, randomOperator));

  return [question, correctAnswer];
};

const startGameCalc = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameCalc;
