#!/usr/bin/env node

import {
  frame, randomInteger,
} from '..';

const textDescription = 'What number is missing in the progression?';

const getTaskAndCorrectAnswer = () => {
  let arrayProgression = [];
  const getArithmeticProgression = (progressionMember, progressionDifference) => {
    if (arrayProgression.length === 9) {
      return ;
    }
    return [getArithmeticProgression(progressionMember + progressionDifference, progressionDifference)];  
  }
  const getQuestion = (array) => {
    const counter = randomInteger(0,9);
    if (counter === array.length[randomInteger(0,9)]) {
      return 
    }
  }
};
