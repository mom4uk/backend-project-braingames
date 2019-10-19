import readlineSync from 'readline-sync';

import {
  textDescription, correctAnswer, gameQuestion,
} from './bin/brain-calc';

export const randomInteger = (minValue, maxValue) => Math.floor(Math.random()
  * (maxValue - minValue + 1));

export let firstRandomNumber = 0;
export let secondRandomNumber = 0;
export let numberRandomOperator = 0;

export const frame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${textDescription}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let accumulateRightAnswers = 0;
  while (accumulateRightAnswers < 3) {
    firstRandomNumber = randomInteger(1, 100);
    secondRandomNumber = randomInteger(1, 100);
    numberRandomOperator = randomInteger(1, 3);
    console.log(`Question: ${gameQuestion()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer()) {
      accumulateRightAnswers += 1;
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}.\nLet's try again, ${userName}!`);
      return;
    }
    if (accumulateRightAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
