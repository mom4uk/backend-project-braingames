import startTheEngine from '..';
import randomValue from '../utils';

const descriptionTask = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDenom = (firstValue, secondValue) => {
  if (firstValue % secondValue === 0) {
    return secondValue;
  }
  return getGreatestCommonDenom(secondValue, firstValue % secondValue);
};
const getTaskAndCorrectAnswer = () => {
  const firstRandValue = randomValue(1, 100);
  const secondRandValue = randomValue(1, 100);
  const question = `${firstRandValue} ${secondRandValue}`;
  const correctAnswer = String(getGreatestCommonDenom(firstRandValue, secondRandValue));
  return [question, correctAnswer];
};
const startGameGcd = () => startTheEngine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameGcd;
