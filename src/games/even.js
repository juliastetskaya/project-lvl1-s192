import { cons } from 'hexlet-pairs';
import { getRandomInt, isEven } from '../math';
import game from '../index';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const data = () => {
  const ranNum = getRandomInt(1, 500);
  const correctAnswer = isEven(ranNum) ? 'no' : 'yes';
  return cons(ranNum, correctAnswer);
};

const even = () => game(rules, data);

export default even;
