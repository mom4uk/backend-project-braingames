#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'What number is missing in the progression?';

const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomInteger(0, 100);
  const progressionDifference = randomInteger(0, 100);

  let arrayProgr = [];
  const getArithmeticProgression = (progrMember, progrDifference) => {
    if (arrayProgr.length === 9) {
      return arrayProgr;
    }
    arrayProgr.push(progrMember);
    getArithmeticProgression(progrMember + progrDifference, progrDifference);
  };
  getArithmeticProgression(progressionMember, progressionDifference);

  let answer = 0;

  const getQuestion = (array) => {
    let newArray = array.map(function(item) {
      for (let i = 0; i < array.length; i += 1) {
        randomInteger(0, 9) === array[i] ? array[i] = '..' : item;
      }
    })
    return newArray;
  };
  const question = String(getQuestion(arrayProgr));
  const getCorrectAnswer = answer;
  return [question, getCorrectAnswer];
};
const startGameProgression = () => frame(textDescription, getTaskAndCorrectAnswer);
export default startGameProgression;
