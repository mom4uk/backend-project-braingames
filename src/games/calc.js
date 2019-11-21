import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
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
const getTaskAndCorrectAnswer = () => {
  const randomOperator = operators[randomValue(0, operators.length - 1)];
  const firstRandomValue = randomValue(1, 100);
  const secondRandomValue = randomValue(1, 100);
  const question = `${firstRandomValue} ${randomOperator} ${secondRandomValue}`;
  const correctAnswer = String(getResult(firstRandomValue, secondRandomValue, randomOperator));
  return [question, correctAnswer];
};
const startGameCalc = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameCalc;
