#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'What is the result of the expression?';

const getExpressionAndCorrectAnswer = () => {
  const getAnswerExpression = (firstNumber, secondNumber, operator) => {
    switch (operator) {
      case '+':
        return String(firstNumber + secondNumber);
      case '-':
        return String(firstNumber - secondNumber);
      default: return String(firstNumber * secondNumber);
    }
  };

  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomInteger(0, operators.length)];

  const firstRandNum = randomInteger(1, 100);
  const secondRandNum = randomInteger(1, 100);

  const getQuestion = () => `${firstRandNum} ${randomOperator} ${secondRandNum}`;

  const getCorrectAnswer = () => getAnswerExpression(firstRandNum, secondRandNum, randomOperator);

  return [getQuestion, getCorrectAnswer];
};

frame(textDescription, getExpressionAndCorrectAnswer);
