#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'What number is missing in the progression?';

const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomInteger(0, 100);
  const progressionDifference = randomInteger(0, 100);

  const numbersProgression = [];

  const getArithmeticProgression = (progrMember, progrDifference) => {
    if (numbersProgression.length === 9) {
      return numbersProgression;
    }
    numbersProgression.push(progrMember);
    return getArithmeticProgression(progrMember + progrDifference, progrDifference);
  };

  getArithmeticProgression(progressionMember, progressionDifference);

  let answer = '';

  const getQuestion = (array) => {
    for (let i = randomInteger(0, 9); i <= 9; i += 1) {
      answer = `${array[i]}`;
      array[i] = '..';
      return array.join(' ');
    }
    return array;
  };
  const question = getQuestion(numbersProgression);
  const getCorrectAnswer = answer;
  return [question, getCorrectAnswer];
};
const startGameProgression = () => frame(textDescription, getTaskAndCorrectAnswer);
export default startGameProgression;
