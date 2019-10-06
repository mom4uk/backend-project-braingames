import readlineSync from 'readline-sync';

export const findOutTheName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const findOutAnEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default findOutTheName;
