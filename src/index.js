import readlineSync from 'readline-sync';

import {
  textDescription, correctAnswer, gameQuestion,
} from '/users/mikhailmanov/Documents/Dev/backend-project-lvl1/src/bin/brain-calc';

export const frame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${textDescription}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`Question: ${gameQuestion()}`);
  const userAnswer = readlineSync.question('Your answer: ');

  let accumulateRightAnswers = 0;

  while (accumulateRightAnswers < 3) {
    if (userAnswer === correctAnswer()) {
      accumulateRightAnswers += 1;
      console.log('Correct!');
    }
    else if (userAnswer !== correctAnswer()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}.\nLet's try again, ${userName}!`);
      return;
    }
    else if (accumulateRightAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export const randomInteger = (minValue, maxValue) => Math.floor(Math.random()
  * (maxValue - minValue + 1));
