
import frame from '..';

import randomNumber from '../utils';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = num - 1; i >= 2; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getTaskAndCorrectAnswer = () => {
  const randomValue = randomNumber(1, 100);
  const question = `${randomValue}`;
  const correctAnswer = isPrime(randomValue) ? 'yes' : 'no';

  return [question, correctAnswer];
};
const startGamePrime = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGamePrime;
