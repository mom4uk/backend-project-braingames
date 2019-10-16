#!/usr/bin/env node

import {
  randomInteger, frame,
} from '..';

export const textDescription = 'What is the result of the expression?';

const firstRandomNumber = randomInteger(1, 100);
const secondRandomNumber = randomInteger(1, 100);
const numberRandomOperator = randomInteger(1, 3);

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
