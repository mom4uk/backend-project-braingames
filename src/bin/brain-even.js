#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  findOutAnEvenNumber, randomInteger, printGreeting, printDescription,
} from '..';

printGreeting();

printDescription('Answer "yes" if the number is even, otherwise answer "no".');


let counterRightAnswer = 0;

const parityCheck = () => {
  const userName = readlineSync.question('May I have your name? ');
  while (counterRightAnswer !== 3) {
    const randomNumber = randomInteger(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (findOutAnEvenNumber(randomNumber) === true && userAnswer === 'yes') {
      counterRightAnswer += 1;
      console.log('Correct!');
    } else if (findOutAnEvenNumber(randomNumber) === true && userAnswer === 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    } else if (findOutAnEvenNumber(randomNumber) === true && userAnswer !== 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }
    if (findOutAnEvenNumber(randomNumber) === false && userAnswer === 'no') {
      counterRightAnswer += 1;
      console.log('Correct!');
    } else if (findOutAnEvenNumber(randomNumber) === false && userAnswer === 'yes') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    } else if (findOutAnEvenNumber(randomNumber) === false && userAnswer !== 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
parityCheck();
