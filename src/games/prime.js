import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};
const getTaskAndCorrectAnswer = () => {
  const question = randomValue(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGamePrime = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGamePrime;
