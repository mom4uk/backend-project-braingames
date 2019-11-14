import startTheEngine from '..';
import randomValue from '../utils';

const descriptionTask = 'What is the result of the expression?';
const getResult = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default: return null;
  }
};
const operators = ['+', '-', '*'];
const getTaskAndCorrectAnswer = () => {
  const randomOperator = operators[randomValue(0, operators.length - 1)];
  const firstRandValue = randomValue(1, 100);
  const secondRandValue = randomValue(1, 100);
  const question = `${firstRandValue} ${randomOperator} ${secondRandValue}`;
  const correctAnswer = String(getResult(firstRandValue, secondRandValue, randomOperator));
  return [question, correctAnswer];
};
const startGameCalc = () => startTheEngine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameCalc;
