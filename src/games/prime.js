
import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const randomNumber = randomInteger(1, 100);

  const findOutIfAPrimeNumber = (num) => {
    for (let i = num - 1; i >= 2; i -= 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = randomNumber;
  const correctAnswer = findOutIfAPrimeNumber(randomNumber);

  return [question, correctAnswer];
};
const startGamePrime = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGamePrime;
