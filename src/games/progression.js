#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'What number is missing in the progression?';

const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomInteger(0, 100);
  const progressionDifference = randomInteger(0, 100);

  const numbersArithmeticProgression = [];

  const getArithmeticProgression = (progrMember, progrDifference) => {
    if (numbersArithmeticProgression.length === 9) {
      return numbersArithmeticProgression;
    }
    numbersArithmeticProgression.push(progrMember);
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
  const question = getQuestion(numbersArithmeticProgression);
  const correctAnswer = answer;
  return [question, correctAnswer];
};
const startGameProgression = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
