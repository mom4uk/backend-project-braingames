import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  for (let i = 0; i <= value / 2; i += 1) {
    if (value < 2) {
      return false;
  }
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(0),isPrime(32),isPrime(25),isPrime(31),isPrime(23),isPrime(37),isPrime(61),isPrime(67));
const getTaskAndCorrectAnswer = () => {
  const question = randomValue(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGamePrime = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGamePrime;
