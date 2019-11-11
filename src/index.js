import readlineSync from 'readline-sync';

const frame = (descriptionTask, getTaskAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getTaskAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export { frame as default };
