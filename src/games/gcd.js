import { cons } from 'hexlet-pairs';
import { getRandomInt, NOD } from '../math';
import game from '../index';

const rules = 'Find the greatest common divisor of given numbers.\n';

const data = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  const expression = `${number1} ${number2}`;

  const result = NOD(number1, number2);

  return cons(expression, String(result));
};

const gcd = () => game(rules, data);

export default gcd;
