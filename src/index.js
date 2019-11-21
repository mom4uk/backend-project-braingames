import readlineSync from 'readline-sync';

const cyclesCount = 3;
const engine = (descriptionTask, getTaskAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i <= cyclesCount - 1; i += 1) {
    const [question, correctAnswer] = getTaskAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export { engine as default };
