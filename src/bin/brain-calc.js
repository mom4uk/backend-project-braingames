#!/usr/bin/env node

import {
  frame, firstRandomNumber, secondRandomNumber, numberRandomOperator,
} from '..';

export const textDescription = 'What is the result of the expression?';

export const gameQuestion = () => {
  if (numberRandomOperator === 1) {
    return `${firstRandomNumber} + ${secondRandomNumber}`;
  }
  if (numberRandomOperator === 2) {
    return `${firstRandomNumber} - ${secondRandomNumber}`;
  }
  return `${firstRandomNumber} * ${secondRandomNumber}`;
};

let result = '';

export const correctAnswer = () => {
  if (numberRandomOperator === 1) {
    result = firstRandomNumber + secondRandomNumber;
    return `${result}`;
  }
  if (numberRandomOperator === 2) {
    result = firstRandomNumber - secondRandomNumber;
    return `${result}`;
  }
  result = firstRandomNumber * secondRandomNumber;
  return `${result}`;
};

frame();
