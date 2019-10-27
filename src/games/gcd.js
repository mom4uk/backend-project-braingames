#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'Find the greatest common divisor of given numbers.';

const getTaskAndCorrectAnswer = () => {
  const firstRandNum = randomInteger(1, 100);
  const secondRandNum = randomInteger(1, 100);
  const question = `${firstRandNum} ${secondRandNum}`;
  const answer = (firstNum, secondNum) => {
    if (firstNum % secondNum === 0) {
      return secondNum;
    }
    return answer(secondNum, firstNum % secondNum);
  };

  const getCorrectAnswer = String(answer(firstRandNum, secondRandNum));
  return [question, getCorrectAnswer];
};
const startGameGcd = () => frame(textDescription, getTaskAndCorrectAnswer);
export default startGameGcd;
