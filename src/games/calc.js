
import frame from '..';

import randomNumber from '../utils';

const descriptionTask = 'What is the result of the expression?';

const getResult = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default: return false;
  }
};

const getTaskAndCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomNumber(1, operators.length)];

  const firstRandNum = randomNumber(1, 100);
  const secondRandNum = randomNumber(1, 100);

  const question = `${firstRandNum} ${randomOperator} ${secondRandNum}`;

  const correctAnswer = String(getResult(firstRandNum, secondRandNum, randomOperator));

  return [question, correctAnswer];
};

const startGameCalc = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameCalc;
