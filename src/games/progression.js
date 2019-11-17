import startTheEngine from '..';
import randomValue from '../utils';

const descriptionTask = 'What number is missing in the progression?';
const lengthProgression = 10;
let replacedValueInArray = '';
const getArithmeticProgression = (progressionMember, progressionDifference) => {
  const array = [];
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    array.push(progressionMember + progressionDifference * i);
  }
  return array;
};
const getTaskAndCorrectAnswer = () => {
  const progressionMember = randomValue(0, 100);
  const progressionDifference = randomValue(0, 100);
  const randomIndex = randomValue(0, lengthProgression);
  const valuesArithmeticProgression = getArithmeticProgression(progressionMember,
    progressionDifference);
  const getQuestion = (array) => {
    for (let i = 0; i <= array.length - 1; i += 1) {
      if (randomIndex === i) {
        replacedValueInArray = `${progressionMember + progressionDifference * i}`;
      }
    }
    array.splice(randomIndex, 1, '..');
    return array.join(' ');
  };
  const question = getQuestion(valuesArithmeticProgression);
  const correctAnswer = replacedValueInArray;
  return [question, correctAnswer];
};
const startGameProgression = () => startTheEngine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
