import readlineSync from 'readline-sync';

export const randomInteger = (minValue, maxValue) => Math.floor(Math.random()
  * (maxValue - minValue + 1));

export const frame = (textDescription, getExpressionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${textDescription}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let accumulateRightAnswers = 0;
  while (accumulateRightAnswers < 3) {
    const [getQuestion, getCorrectAnswer] = getExpressionAndCorrectAnswer();
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === getCorrectAnswer) {
      accumulateRightAnswers += 1;
      console.log('Correct!');
    } else if (userAnswer !== getCorrectAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getCorrectAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    if (accumulateRightAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
