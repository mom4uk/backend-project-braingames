import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDenom = (firstValue, secondValue) => {
  if (firstValue % secondValue === 0) {
    return secondValue;
  }
  return getGreatestCommonDenom(secondValue, firstValue % secondValue);
};
const getTaskAndCorrectAnswer = () => {
  const firstRandomValue = randomValue(1, 100);
  const secondRandomValue = randomValue(1, 100);
  const question = `${firstRandomValue} ${secondRandomValue}`;
  const correctAnswer = String(getGreatestCommonDenom(firstRandomValue, secondRandomValue));
  return [question, correctAnswer];
};
const startGameGcd = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameGcd;
