import { cons } from 'hexlet-pairs';
import { getRandomInt, Balance } from '../math';
import game from '../index';

const rules = 'Balance the given number.';

const data = () => {
  const number = getRandomInt(100, 1000);
  const array = String(number).split('').map(Number);
  const result = Balance(array).join('');

  return cons(number, result);
};

const balance = () => game(rules, data);

export default balance;
