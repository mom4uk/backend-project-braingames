import startTheEngine from '..';
import randomValue from '../utils';

const descriptionTask = 'What number is missing in the progression?';
const lengthProgression = 10;
let replacedNumberInArray = '';
const getArithmeticProgression = (progrMember, progrDifference) => {
  const array = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    array.push(progrMember + progrDifference * i);
  }
  return array;
};
const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomValue(0, 100);
  const progressionDifference = randomValue(0, 100);
  const randomIndex = randomValue(0, lengthProgression);
  const numbersArithmProgr = getArithmeticProgression(progressionMember, progressionDifference);
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
const startGameProgression = () => startTheEngine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
