import readlineSync from 'readline-sync';

export const randomInteger = (minValue, maxValue) => Math.floor(Math.random()
  * (maxValue - minValue + 1));

export const frame = (descriptionTask, getTaskAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionTask}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let accumulateRightAnswers = 0;

  while (accumulateRightAnswers < 3) {
    const [question, correctAnswer] = getTaskAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      accumulateRightAnswers += 1;
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    if (accumulateRightAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
