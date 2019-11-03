#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const randomNumber = randomInteger(1, 100);

  const getAnswer = (num) => {
    for (let i = num - 1; i >= 2; i -= 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = `${randomNumber}`;
  const getCorrectAnswer = getAnswer(randomNumber);
  return [question, getCorrectAnswer];
};
const startGamePrime = () => frame(textDescription, getTaskAndCorrectAnswer);
export default startGamePrime;
