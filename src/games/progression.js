import { cons } from 'hexlet-pairs';
import { getRandomInt, makeProgression } from '../math';
import game from '../index';

const rules = 'What number is missing in this progression?';

const data = () => {
  const firstMember = getRandomInt(0, 10);
  const difference = getRandomInt(1, 10);
  const progress = makeProgression(firstMember, difference);

  const index = getRandomInt(0, 10);

  const correctAnswer = progress[index];
  progress[index] = '..';

  const expression = progress.map(value => `${value} `).join('');

  return cons(expression, String(correctAnswer));
};

const progression = () => game(rules, data);

export default progression;
