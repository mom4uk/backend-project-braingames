import engine from '..';
import randomValue from '../utils';

const descriptionTask = 'What number is missing in the progression?';
const getArithmeticProgression = (progressionMember, progressionDifference) => {
  const lengthProgression = 10;
  const progression = [];
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    progression.push(progressionMember + progressionDifference * i);
  }
  return progression;
};
const getTaskAndCorrectAnswer = () => {
  const lengthProgression = 10;
  const initialProgressionMember = randomValue(0, 100);
  const progressionDifference = randomValue(0, 100);
  const randomIndex = randomValue(0, lengthProgression - 1);
  const arithmeticProgression = getArithmeticProgression(initialProgressionMember,
    progressionDifference);
  const getQuestion = (array) => {
    array.splice(randomIndex, 1, '..');
    return array.join(' ');
  };
  const question = getQuestion(arithmeticProgression);
  const correctAnswer = `${initialProgressionMember + progressionDifference * randomIndex}`;
  return [question, correctAnswer];
};
const startGameProgression = () => engine(descriptionTask, getTaskAndCorrectAnswer);
export default startGameProgression;
