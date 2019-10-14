#!/usr/bin/env node

import {
  randomInteger, frame,
} from '..';

export const textDescription = 'What is the result of the expression?';

const firstRandomNumber = randomInteger(1, 100);
const secondRandomNumber = randomInteger(1, 100);
const random = randomInteger(1, 3);
export const gameQuestion = () => {
  if (random === 1) {
    return `${firstRandomNumber} + ${secondRandomNumber}`;
  }
  if (random === 2) {
    return `${firstRandomNumber} - ${secondRandomNumber}`;
  }
  return `${firstRandomNumber} * ${secondRandomNumber}`;
};

export const correctAnswer = () => {
  if (random === 1) {
    return firstRandomNumber + secondRandomNumber;
  }
  if (random === 2) {
    return firstRandomNumber - secondRandomNumber;
  }
  return firstRandomNumber * secondRandomNumber;
};

frame();
