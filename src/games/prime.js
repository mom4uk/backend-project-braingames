import startTheEngine from '..';
import randomValue from '../utils';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  for (let i = 2; i <= value - 1; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};
const getTaskAndCorrectAnswer = () => {
  const randomValueForTask = randomValue(1, 100);
  const question = randomValueForTask;
  const correctAnswer = isPrime(randomValueForTask) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGamePrime = () => startTheEngine(descriptionTask, getTaskAndCorrectAnswer);
export default startGamePrime;
