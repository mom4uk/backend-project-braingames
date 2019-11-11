
import frame from '..';

import randomNumber from '../utils';

const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const question = randomNumber(1, 100);

  const isEven = (value) => value % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGameEven = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameEven;
