import readlineSync from 'readline-sync';

import {
  findOutTheName, findOutAnEvenNumber, randomInteger,
} from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');

findOutTheName();

let counterRightAnswer = 0;

const parityCheck = () => {
  while (counterRightAnswer !== 3) {
    const randomNumber = randomInteger(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (findOutAnEvenNumber(randomNumber) === true && userAnswer === 'yes') {
      counterRightAnswer += 1;
      console.log('Correct!');
    } else if (findOutAnEvenNumber(randomNumber) === true && userAnswer === 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Sam!`);
    } else if (findOutAnEvenNumber(randomNumber) === true && userAnswer !== 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Sam!`);
    }
    if (findOutAnEvenNumber(randomNumber) === false && userAnswer === 'no') {
      counterRightAnswer += 1;
      console.log('Correct!');
    } else if (findOutAnEvenNumber(randomNumber) === false && userAnswer === 'yes') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Sam!`);
    } else if (findOutAnEvenNumber(randomNumber) === false && userAnswer !== 'no') {
      counterRightAnswer = 0;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Sam!`);
    }
  }
  return console.log('Congratulations, Sam!');
};
parityCheck();
