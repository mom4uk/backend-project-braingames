
import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const randomNumber = randomInteger(1, 100);
  const question = randomNumber;

  const findOutAnEvenNumber = (value) => {
    if (value % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const correctAnswer = String(findOutAnEvenNumber(question));

  return [question, correctAnswer];
};

const startGameEven = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameEven;
