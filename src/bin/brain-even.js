import { findOutTheName, findOutAnEvenNumber, randomInteger } from './index';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');

findOutTheName();

const gameParityCheck = () => {
  let counterRightAnswer = 0;
  while (counterRightAnswer !== 3) {
    let randomNumber = randomInteger(1, 100);

    console.log(`Question: ${randomNumber}`);
    const answerFindOutAnEvenNumber = () => {
      let userAnswer = readlineSync.question('Your answer: ');
      const findOutCorrectAnswer = (randomNumber, userAnswer) => {
        if (findOutAnEvenNumber(randomInteger) === true && userAnswer === 'yes') {
          counterRightAnswer += 1;
          console.log('Correct!');
        } else {
          counterRightAnswer = 0;
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
        }
        if (findOutAnEvenNumber(randomInteger) === false && userAnswer === 'no') {
          counterRightAnswer += 1;
          console.log('Correct!');
        } else {
          counterRightAnswer = 0;
          return console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
        }
      };
    };
  }
  console.log(`Congratulations, ${userName}!`);
};