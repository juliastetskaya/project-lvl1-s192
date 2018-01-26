import { cons } from 'hexlet-pairs';
import { getRandomInt, isPrime } from '../math';
import game from '../index';

const rules = 'Is this number prime?';

const data = () => {
  const number = getRandomInt(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(number, correctAnswer);
};

const prime = () => game(rules, data);

export default prime;
