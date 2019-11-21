import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;
const getTaskAndCorrectAnswer = () => {
  const question = randomValue(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGameEven = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameEven;
