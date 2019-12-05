import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'What number is missing in the progression?';
const lengthArithmericProgression = 10;
const getArithmeticProgression = (progressionMember, progressionDifference, lengthProgression) => {
  const progression = [];
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    progression.push(progressionMember + progressionDifference * i);
  }
  return progression;
};
const getTaskAndCorrectAnswer = () => {
  const initialProgressionMember = randomValue(0, 100);
  const progressionDifference = randomValue(0, 100);
  const hiddenElementIndex = randomValue(0, lengthArithmericProgression - 1);
  const arithmeticProgression = getArithmeticProgression(initialProgressionMember,
    progressionDifference, lengthArithmericProgression);
  const getQuestion = (array) => {
    array.splice(hiddenElementIndex, 1, '..');
    return array.join(' ');
  };
  const question = getQuestion(arithmeticProgression);
  const correctAnswer = `${initialProgressionMember + progressionDifference * hiddenElementIndex}`;
  return [question, correctAnswer];
};
const startGameProgression = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
