
import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndCorrectAnswer = () => {
  const randomNumber = randomInteger(1, 100);
  const question = randomNumber;

  const findOutAnEvenNumber = (value) => value % 2 === 0;

  const booleanTransformsIntoYesOrNo = (boolean) => {
    if (boolean) {
      return 'yes';
    }
    return 'no';
  };

  const correctAnswer = booleanTransformsIntoYesOrNo(findOutAnEvenNumber(randomNumber));

  return [question, correctAnswer];
};

const startGameEven = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameEven;
