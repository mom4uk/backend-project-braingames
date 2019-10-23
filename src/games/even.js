#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const randomNumber = randomInteger(1, 100);
  const question = randomNumber;

  const findOutAnEvenNumber = (value) => {
    if (value % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const getCorrectAnswer = String(findOutAnEvenNumber(question));

  return [question, getCorrectAnswer];
};

const startGameEven = () => frame(textDescription, getTaskAndCorrectAnswer);
export default startGameEven;
