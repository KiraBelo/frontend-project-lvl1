import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);

export default startGame;