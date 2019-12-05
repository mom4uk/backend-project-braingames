import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'What number is missing in the progression?';
const lengthArithmericProgression = 10;
const hiddenElementIndex = randomValue(0, lengthArithmericProgression - 1);
const getArithmeticProgression = (progressionMember, progressionDifference, lengthProgression) => {
  const progression = [];
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    progression.push(progressionMember + progressionDifference * i);
  }
  progression.splice(hiddenElementIndex, 1, '..');
  return progression.join(' ');
};
const getTaskAndCorrectAnswer = () => {
  const initialProgressionMember = randomValue(0, 100);
  const progressionDifference = randomValue(0, 100);
  const arithmeticProgression = getArithmeticProgression(initialProgressionMember,
    progressionDifference, lengthArithmericProgression);
  const question = arithmeticProgression;
  const correctAnswer = `${initialProgressionMember + progressionDifference * hiddenElementIndex}`;
  return [question, correctAnswer];
};
const startGameProgression = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
