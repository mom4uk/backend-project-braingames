
import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'What number is missing in the progression?';

const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomInteger(0, 100);
  const progressionDifference = randomInteger(0, 100);

  const getArithmeticProgression = (progrMember, progrDifference) => {
    const array = [];
    for (let i = 0; i < 9; i += 1) {
      array.push(progrMember + progrDifference * i);
    }
    return array;
  };

  const numbersArithmProgr = getArithmeticProgression(progressionMember, progressionDifference);
  const randomIndex = randomInteger(0, 9);

  let replacedNumberInArray = '';

  const getQuestion = (array) => {
    for (let i = 0; i < array.length; i += 1) {
      if (randomIndex === i) {
        replacedNumberInArray = `${array[i]}`;
      }
    }
    array.splice(randomIndex, 1, '..');
    return array.join(' ');
  };
  const question = getQuestion(numbersArithmProgr);
  const correctAnswer = replacedNumberInArray;
  return [question, correctAnswer];
};
const startGameProgression = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
